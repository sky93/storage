package cloudflarekv

import (
	"context"
	"log"
	"time"

	"github.com/cloudflare/cloudflare-go"
)

type Storage struct {
	api         *cloudflare.API
	email       string
	accountID   string
	namespaceID string
}

func New(config ...Config) *Storage {

	cfg := configDefault(config...)

	api, err := cloudflare.NewWithAPIToken(cfg.Key)

	if err != nil {
		log.Println("Error with cloudflare api initialization")
	}

	storage := &Storage{
		api:         api,
		email:       cfg.Email,
		accountID:   cfg.AccountID,
		namespaceID: cfg.NamespaceID,
	}

	return storage
}

func (s *Storage) Get(key string) ([]byte, error) {
	resp, err := s.api.GetWorkersKV(context.Background(), cloudflare.AccountIdentifier(s.accountID), cloudflare.GetWorkersKVParams{NamespaceID: s.namespaceID, Key: key})

	if err != nil {
		log.Println("Error occur in GetWorkersKV")
		return nil, err
	}

	return resp, nil
}

func (s *Storage) Set(key string, val []byte, exp time.Duration) error {

	_, err := s.api.WriteWorkersKVEntry(context.Background(), cloudflare.AccountIdentifier(s.accountID), cloudflare.WriteWorkersKVEntryParams{
		NamespaceID: s.namespaceID,
		Key:         key,
		Value:       val,
	})

	if err != nil {
		log.Println("Error occur in WriteWorkersKVEntry")
		return err
	}

	return nil
}

func (s *Storage) Delete(key string) error {
	_, err := s.api.DeleteWorkersKVEntry(context.Background(), cloudflare.AccountIdentifier(s.accountID), cloudflare.DeleteWorkersKVEntryParams{
		NamespaceID: s.namespaceID,
		Key:         key,
	})

	if err != nil {
		log.Println("Error occur in WriteWorkersKVEntry")
		return err
	}

	return nil
}

func (s *Storage) Reset() error {

	var cursor string

	for {
		resp, err := s.api.ListWorkersKVKeys(context.Background(), cloudflare.AccountIdentifier(s.accountID), cloudflare.ListWorkersKVsParams{
			NamespaceID: s.namespaceID,
			Cursor:      cursor,
		})

		if err != nil {
			log.Println("Error occur in ListWorkersKVKeys")
			return err
		}

		keys := []string{}

		for _, element := range resp.Result {
			name := element.Name
			keys = append(keys, name)
		}

		_, err = s.api.DeleteWorkersKVEntries(context.Background(), cloudflare.AccountIdentifier(s.accountID), cloudflare.DeleteWorkersKVEntriesParams{
			NamespaceID: s.namespaceID,
			Keys:        keys,
		})

		if err != nil {
			log.Println("Error occur in DeleteWorker")
			return err
		}

		if len(resp.Cursor) == 0 {
			log.Println("No keys left in the namespace")
			break
		}

		cursor = resp.Cursor
	}

	return nil
}

func (s *Storage) Close() error {
	return nil
}
