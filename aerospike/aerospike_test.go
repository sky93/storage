package aerospike

import (
	"context"
	"testing"

	"github.com/aerospike/aerospike-client-go/v8"
	"github.com/stretchr/testify/require"
	"github.com/testcontainers/testcontainers-go"
	tcaerospike "github.com/testcontainers/testcontainers-go/modules/aerospike"
)

const (
	aerospikeImage     = "aerospike/aerospike-server:latest"
	aerospikePort      = "3000/tcp"
	aerospikeNamespace = "test"
)

func setupAerospikeTestClient(t *testing.T) *Storage {
	t.Helper()

	ctx := context.Background()

	c, err := tcaerospike.Run(ctx, aerospikeImage)
	if err != nil {
		t.Fatalf("Failed to start aerospike container: %v", err)
	}

	// Extract host and port
	host, err := c.Host(context.TODO())
	if err != nil {
		t.Fatalf("Failed to get container host: %v", err)
	}

	port, err := c.MappedPort(context.TODO(), aerospikePort)
	if err != nil {
		t.Fatalf("Failed to get container port: %v", err)
	}

	testcontainers.CleanupContainer(t, c)
	if err != nil {
		t.Fatalf("Failed to cleanup Aerospike container: %v", err)
	}

	return New(Config{
		Hosts:     []*aerospike.Host{aerospike.NewHost(host, port.Int())},
		Reset:     true,
		Namespace: aerospikeNamespace,
	})

}

// Test_AeroSpikeDB_Get tests the Get method
func Test_AeroSpikeDB_Get(t *testing.T) {
	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := setupAerospikeTestClient(t)
	defer testStore.Close()

	// Set a value
	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	// Get the value
	retrievedVal, err := testStore.Get(key)
	require.NoError(t, err)
	require.Equal(t, val, retrievedVal)
}

// Test_AeroSpikeDB_Set tests the Set method
func Test_AeroSpikeDB_Delete(t *testing.T) {

	var (
		key = "john"
		val = []byte("doe")
	)

	testStore := setupAerospikeTestClient(t)
	defer testStore.Close()

	// Set a value
	err := testStore.Set(key, val, 0)
	require.NoError(t, err)

	// Delete the value
	err = testStore.Delete(key)
	require.NoError(t, err)

	// Try to get the deleted value
	retrievedVal, err := testStore.Get(key)
	require.NoError(t, err)
	require.Nil(t, retrievedVal)
}

// Test_AeroSpikeDB_Reset tests the Reset method
func Test_AeroSpikeDB_Reset(t *testing.T) {

	var (
		key1 = "john"
		val1 = []byte("doe")
		key2 = "jane"
		val2 = []byte("smith")
	)

	testStore := setupAerospikeTestClient(t)
	defer testStore.Close()

	// Set multiple values
	err := testStore.Set(key1, val1, 0)
	require.NoError(t, err)
	err = testStore.Set(key2, val2, 0)
	require.NoError(t, err)

	// Reset the store
	err = testStore.Reset()
	require.NoError(t, err)

	// Ensure keys are deleted
	retrievedVal1, err := testStore.Get(key1)
	require.NoError(t, err)
	require.Nil(t, retrievedVal1)

	retrievedVal2, err := testStore.Get(key2)
	require.NoError(t, err)
	require.Nil(t, retrievedVal2)
}

// Test_AeroSpikeDB_GetSchemaInfo tests the GetSchemaInfo method
func Test_AeroSpikeDB_GetSchemaInfo(t *testing.T) {

	testStore := setupAerospikeTestClient(t)
	defer testStore.Close()

	// Get schema info
	schemaInfo := testStore.GetSchemaInfo()
	require.NotNil(t, schemaInfo)
	require.GreaterOrEqual(t, schemaInfo.Version, 1)
}
