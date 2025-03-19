window.BENCHMARK_DATA = {
  "lastUpdate": 1742368039413,
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
          "id": "e4abddc19ffa4357782832b7993316fd4728c198",
          "message": "Merge pull request #1562 from the-real-i9/main\n\n🔥 feat: Add support for Neo4j",
          "timestamp": "2025-02-03T15:27:20+01:00",
          "tree_id": "3047322976de2108619c89df2419138c0acbf01c",
          "url": "https://github.com/gofiber/storage/commit/e4abddc19ffa4357782832b7993316fd4728c198"
        },
        "date": 1738592926167,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1525854,
            "unit": "ns/op\t   15293 B/op\t     304 allocs/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1525854,
            "unit": "ns/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 15293,
            "unit": "B/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 304,
            "unit": "allocs/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1413541,
            "unit": "ns/op\t   17653 B/op\t     357 allocs/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1413541,
            "unit": "ns/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 17653,
            "unit": "B/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 357,
            "unit": "allocs/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3564882,
            "unit": "ns/op\t   30630 B/op\t     608 allocs/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3564882,
            "unit": "ns/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 30630,
            "unit": "B/op",
            "extra": "292 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 608,
            "unit": "allocs/op",
            "extra": "292 times\n4 procs"
          }
        ]
      },
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
          "id": "c1933ed3e87ea6f84e3bde5edee29f19495afa91",
          "message": "Merge pull request #1515 from mdelapenya/tc-go-adoption-2\n\nchore: adopt testcontainers-go for Postgres, MySQL and MongoDB",
          "timestamp": "2025-03-19T08:01:09+01:00",
          "tree_id": "bd7d7600b063b44df0a5960ac0d1d4b43f6fa48c",
          "url": "https://github.com/gofiber/storage/commit/c1933ed3e87ea6f84e3bde5edee29f19495afa91"
        },
        "date": 1742368032382,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Neo4jStore_Set",
            "value": 1555425,
            "unit": "ns/op\t   15293 B/op\t     304 allocs/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - ns/op",
            "value": 1555425,
            "unit": "ns/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - B/op",
            "value": 15293,
            "unit": "B/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Set - allocs/op",
            "value": 304,
            "unit": "allocs/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get",
            "value": 1407776,
            "unit": "ns/op\t   17657 B/op\t     357 allocs/op",
            "extra": "742 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - ns/op",
            "value": 1407776,
            "unit": "ns/op",
            "extra": "742 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - B/op",
            "value": 17657,
            "unit": "B/op",
            "extra": "742 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_Get - allocs/op",
            "value": 357,
            "unit": "allocs/op",
            "extra": "742 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete",
            "value": 3451391,
            "unit": "ns/op\t   30626 B/op\t     608 allocs/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - ns/op",
            "value": 3451391,
            "unit": "ns/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - B/op",
            "value": 30626,
            "unit": "B/op",
            "extra": "298 times\n4 procs"
          },
          {
            "name": "Benchmark_Neo4jStore_SetAndDelete - allocs/op",
            "value": 608,
            "unit": "allocs/op",
            "extra": "298 times\n4 procs"
          }
        ]
      }
    ]
  }
}