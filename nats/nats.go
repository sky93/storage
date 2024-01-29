package nats

import (
	"bytes"
	"context"
	"encoding/gob"
	"errors"
	"fmt"
	"net"
	"sync"
	"time"

	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
)

// Storage interface that is implemented by storage providers
type Storage struct {
	nc  *nats.Conn
	kv  jetstream.KeyValue
	err []error
	ctx context.Context
	cfg Config
	mu  sync.RWMutex
}

type entry struct {
	Data   []byte
	Expiry int64
}

func init() {
	gob.Register(entry{})
}

// connectHandler is a helper function to set the initial connect handler
func (s *Storage) connectHandler(nc *nats.Conn) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.cfg.Logger.
		With("url", nc.ConnectedUrlRedacted()).
		With("mod", "nats").
		Info("connected")

	var err error
	s.kv, err = newNatsKV(
		nc,
		s.ctx,
		s.cfg.KeyValueConfig,
	)
	if err != nil {
		s.cfg.Logger.
			With("err", err).
			With("mod", "nats").
			Error("kv not initialized")
		s.err = append(s.err, err)
	}
}

// disconnectErrHandler is a helper function to set the disconnect error handler
func (s *Storage) disconnectErrHandler(nc *nats.Conn, err error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	if err != nil {
		s.cfg.Logger.
			With("err", err).
			With("mod", "nats").
			Error("disconnected")
	} else {
		s.cfg.Logger.
			With("mod", "nats").
			Info("disconnected")
	}
	nc.Opts.RetryOnFailedConnect = true
	if err != nil {
		s.err = append(s.err, err)
	}
}

// reconnectHandler is a helper function to set the reconnect handler
func (s *Storage) reconnectHandler(nc *nats.Conn) {
	s.connectHandler(nc)
}

// errorHandler is a helper function to set the error handler
func (s *Storage) errorHandler(nc *nats.Conn, sub *nats.Subscription, err error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.cfg.Logger.
		With("err", err).
		With("sub", sub.Subject).
		With("mod", "nats").
		Error("error")
	if err != nil {
		s.err = append(s.err, fmt.Errorf("subject %q: %w", sub.Subject, err))
	}
}

// closedHandler is a helper function to set the closed handler
func (s *Storage) closedHandler(nc *nats.Conn) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	s.cfg.Logger.
		With("mod", "nats").
		Info("closed")
}

func newNatsKV(nc *nats.Conn, ctx context.Context, keyValueConfig jetstream.KeyValueConfig) (jetstream.KeyValue, error) {
	js, err := jetstream.New(nc)
	if err != nil {
		return nil, fmt.Errorf("get jetstream: %w", err)
	}
	jskv, err := js.KeyValue(ctx, keyValueConfig.Bucket)
	if err != nil {
		if errors.Is(err, jetstream.ErrBucketNotFound) {
			jskv, err = js.CreateKeyValue(ctx, keyValueConfig)
			if err != nil {
				return nil, fmt.Errorf("jetstream: create kv: %w", err)
			}
		} else {
			return nil, fmt.Errorf("jetstream: get kv: %w", err)
		}
	}

	return jskv, nil
}

// New creates a new nats kv storage
func New(config ...Config) *Storage {
	// Set default config
	cfg := configDefault(config...)

	storage := &Storage{
		ctx: cfg.Context,
		cfg: cfg,
	}

	var optionalUserCreds nats.Option
	if len(cfg.CredentialsFile) > 0 {
		optionalUserCreds = nats.UserCredentials(cfg.CredentialsFile)
	}
	var optionalUserInfo nats.Option
	if len(cfg.Username) > 0 {
		optionalUserInfo = nats.UserInfo(cfg.Username, cfg.Password)
	}

	// Connect to NATS with minimal options
	var err error
	storage.nc, err = nats.Connect(
		cfg.URL,
		nats.Name(cfg.ClientName),
		optionalUserInfo,
		optionalUserCreds,
		nats.RetryOnFailedConnect(cfg.RetryOnFailedConnect),
		nats.MaxReconnects(cfg.MaxReconnects),
		nats.ConnectHandler(storage.connectHandler),
		nats.DisconnectErrHandler(storage.disconnectErrHandler),
		nats.ReconnectHandler(storage.reconnectHandler),
		nats.ErrorHandler(storage.errorHandler),
		nats.ClosedHandler(storage.closedHandler),
	)

	if opErr, ok := err.(*net.OpError); ok && cfg.RetryOnFailedConnect {
		if opErr.Op != "dial" {
			panic(err)
		}
	} else if err != nil {
		panic(err)
	}

	// TODO improve this crude way to wait for the connection to be established
	time.Sleep(100 * time.Millisecond)

	return storage
}

// Get value by key
func (s *Storage) Get(key string) ([]byte, error) {
	if len(key) <= 0 {
		return nil, nil
	}

	s.mu.RLock()
	kv := s.kv
	s.mu.RUnlock()
	if kv == nil {
		return nil, fmt.Errorf("kv not initialized: %v", s.err)
	}

	v, err := kv.Get(s.ctx, key)
	if err != nil {
		if errors.Is(err, jetstream.ErrKeyNotFound) {
			return nil, nil
		}
		return nil, fmt.Errorf("get: %w", err)
	}

	e := entry{}
	err = gob.NewDecoder(
		bytes.NewBuffer(v.Value())).
		Decode(&e)
	if err != nil || e.Expiry <= time.Now().Unix() {
		_ = kv.Delete(s.ctx, key)
		return nil, nil
	}

	return e.Data, nil
}

// Set key with value
func (s *Storage) Set(key string, val []byte, exp time.Duration) error {
	if len(key) <= 0 || len(val) <= 0 {
		return nil
	}

	s.mu.RLock()
	kv := s.kv
	s.mu.RUnlock()
	if kv == nil {
		return fmt.Errorf("kv not initialized: %v", s.err)
	}

	// expiry
	var expSeconds int64
	if exp != 0 {
		expSeconds = time.Now().Add(exp).Unix()
	}
	// encode
	e := new(bytes.Buffer)
	err := gob.NewEncoder(e).Encode(entry{
		Data:   val,
		Expiry: expSeconds,
	})
	if err != nil {
		return fmt.Errorf("encode: %w", err)
	}

	// set
	_, err = kv.Put(s.ctx, key, e.Bytes())
	if errors.Is(err, jetstream.ErrKeyNotFound) {
		_, err := kv.Create(s.ctx, key, e.Bytes())
		if err != nil {
			return fmt.Errorf("create: %w", err)
		}
	}

	return err
}

// Delete key by key
func (s *Storage) Delete(key string) error {
	if len(key) <= 0 {
		return nil
	}

	s.mu.RLock()
	kv := s.kv
	s.mu.RUnlock()

	if kv == nil {
		return fmt.Errorf("kv not initialized: %v", s.err)
	}

	return kv.Delete(s.ctx, key)
}

// Reset all keys
func (s *Storage) Reset() error {
	js, err := jetstream.New(s.nc)
	if err != nil {
		return fmt.Errorf("get jetstream: %w", err)
	}

	// Delete the bucket
	err = js.DeleteKeyValue(s.ctx, s.cfg.KeyValueConfig.Bucket)
	if err != nil {
		return fmt.Errorf("delete kv: %w", err)
	}

	// Create the bucket
	s.mu.Lock()
	s.kv, err = newNatsKV(
		s.nc,
		s.ctx,
		s.cfg.KeyValueConfig,
	)
	s.mu.Unlock()
	if err != nil {
		s.err = []error{err}
		return err
	}

	s.err = nil
	return nil
}

// Close the nats connection
func (s *Storage) Close() error {
	s.mu.RLock()
	s.nc.Close()
	s.mu.RUnlock()
	return nil
}

// Return database client
func (s *Storage) Conn() (*nats.Conn, jetstream.KeyValue) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return s.nc, s.kv
}

// Return all the keys
func (s *Storage) Keys() ([]string, error) {
	s.mu.RLock()
	kv := s.kv
	s.mu.RUnlock()
	keyLister, err := kv.ListKeys(s.ctx)

	if err != nil {
		return nil, fmt.Errorf("keys: %w", err)
	}

	var keys []string
	for key := range keyLister.Keys() {
		keys = append(keys, key)
	}
	_ = keyLister.Stop()

	// Double check if no valid keys were found
	if len(keys) == 0 {
		return nil, nil
	}

	return keys, nil
}
