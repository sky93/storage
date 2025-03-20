window.BENCHMARK_DATA = {
  "lastUpdate": 1742477898639,
  "repoUrl": "https://github.com/gofiber/storage",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rene@gofiber.io",
            "name": "RW",
            "username": "ReneWerner87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b03e3c2585de6351a01c2e5d098ebdb222c8308",
          "message": "Merge pull request #1574 from mdelapenya/tc-go-adoption-3\n\nfeat: add testcontainers-go tests to DynamoDB and NATS",
          "timestamp": "2025-03-20T14:36:52+01:00",
          "tree_id": "4fbcbe6a6f2161b029f0f7a34e8a5e5b6e067d20",
          "url": "https://github.com/gofiber/storage/commit/5b03e3c2585de6351a01c2e5d098ebdb222c8308"
        },
        "date": 1742477891529,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Nats_Set",
            "value": 266682,
            "unit": "ns/op\t    2465 B/op\t      45 allocs/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - ns/op",
            "value": 266682,
            "unit": "ns/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - B/op",
            "value": 2465,
            "unit": "B/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Set - allocs/op",
            "value": 45,
            "unit": "allocs/op",
            "extra": "4353 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get",
            "value": 267189,
            "unit": "ns/op\t    2189 B/op\t      39 allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - ns/op",
            "value": 267189,
            "unit": "ns/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - B/op",
            "value": 2189,
            "unit": "B/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_Get - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "4386 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete",
            "value": 542870,
            "unit": "ns/op\t    3834 B/op\t      71 allocs/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - ns/op",
            "value": 542870,
            "unit": "ns/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - B/op",
            "value": 3834,
            "unit": "B/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "Benchmark_Nats_SetAndDelete - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "2163 times\n4 procs"
          }
        ]
      }
    ]
  }
}