window.BENCHMARK_DATA = {
  "lastUpdate": 1744190305541,
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
          "id": "cc15d521317f6a16e2fc36529e143483a00777af",
          "message": "Merge pull request #1535 from gofiber/dependabot/go_modules/mongodb/go_modules-5a9c29dde4\n\nchore(deps): bump golang.org/x/crypto from 0.22.0 to 0.31.0 in /mongodb in the go_modules group across 1 directory",
          "timestamp": "2025-01-30T11:21:48+01:00",
          "tree_id": "c6fa81d94fb181106c75a500f45c82bd1659b9da",
          "url": "https://github.com/gofiber/storage/commit/cc15d521317f6a16e2fc36529e143483a00777af"
        },
        "date": 1738232567796,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 337836,
            "unit": "ns/op\t    6389 B/op\t      92 allocs/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 337836,
            "unit": "ns/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6389,
            "unit": "B/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3567 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 266766,
            "unit": "ns/op\t    7281 B/op\t      80 allocs/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 266766,
            "unit": "ns/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7281,
            "unit": "B/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "4384 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 712203,
            "unit": "ns/op\t   11350 B/op\t     160 allocs/op",
            "extra": "1782 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 712203,
            "unit": "ns/op",
            "extra": "1782 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11350,
            "unit": "B/op",
            "extra": "1782 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1782 times\n4 procs"
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
        "date": 1742368037221,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 345270,
            "unit": "ns/op\t    6389 B/op\t      92 allocs/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 345270,
            "unit": "ns/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6389,
            "unit": "B/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3400 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 309166,
            "unit": "ns/op\t    7287 B/op\t      80 allocs/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 309166,
            "unit": "ns/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7287,
            "unit": "B/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3729 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 712798,
            "unit": "ns/op\t   11358 B/op\t     160 allocs/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 712798,
            "unit": "ns/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11358,
            "unit": "B/op",
            "extra": "1666 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1666 times\n4 procs"
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
          "id": "63962a4a9e9fba9d7afa499e756779149c58dc46",
          "message": "Merge pull request #1593 from gofiber/dependabot/go_modules/mongodb/github.com/stretchr/testify-1.10.0\n\nchore(deps): bump github.com/stretchr/testify from 1.9.0 to 1.10.0 in /mongodb",
          "timestamp": "2025-03-26T20:22:00+01:00",
          "tree_id": "ebe11d6fa1abe121abf00db584f4176bdadfcb07",
          "url": "https://github.com/gofiber/storage/commit/63962a4a9e9fba9d7afa499e756779149c58dc46"
        },
        "date": 1743019837208,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 344439,
            "unit": "ns/op\t    6392 B/op\t      92 allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 344439,
            "unit": "ns/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6392,
            "unit": "B/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3429 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 310199,
            "unit": "ns/op\t    7287 B/op\t      80 allocs/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 310199,
            "unit": "ns/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7287,
            "unit": "B/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3705 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 714781,
            "unit": "ns/op\t   11360 B/op\t     160 allocs/op",
            "extra": "1664 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 714781,
            "unit": "ns/op",
            "extra": "1664 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11360,
            "unit": "B/op",
            "extra": "1664 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1664 times\n4 procs"
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
          "id": "f94632f947fcf3500c57a2e1061b71316e6a92bc",
          "message": "Merge pull request #1612 from gofiber/dependabot/go_modules/mongodb/go.mongodb.org/mongo-driver-1.17.3\n\nchore(deps): bump go.mongodb.org/mongo-driver from 1.16.1 to 1.17.3 in /mongodb",
          "timestamp": "2025-03-27T09:16:42+01:00",
          "tree_id": "26e2ff893549e6e022398bf00a21b840dbf413cf",
          "url": "https://github.com/gofiber/storage/commit/f94632f947fcf3500c57a2e1061b71316e6a92bc"
        },
        "date": 1743063620588,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 343916,
            "unit": "ns/op\t    6426 B/op\t      92 allocs/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 343916,
            "unit": "ns/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6426,
            "unit": "B/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3379 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 309966,
            "unit": "ns/op\t    7414 B/op\t      80 allocs/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 309966,
            "unit": "ns/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7414,
            "unit": "B/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3820 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 711271,
            "unit": "ns/op\t   11423 B/op\t     160 allocs/op",
            "extra": "1663 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 711271,
            "unit": "ns/op",
            "extra": "1663 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11423,
            "unit": "B/op",
            "extra": "1663 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1663 times\n4 procs"
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
          "id": "904a606aa298640f2edb9a167de39219b932a3c4",
          "message": "Merge pull request #1631 from mdelapenya/tc-azurite\n\nchore: bump testcontainers-go to v0.36.0",
          "timestamp": "2025-04-09T11:15:31+02:00",
          "tree_id": "9a609b5228fe260c6730ccd3a8e041d94014c919",
          "url": "https://github.com/gofiber/storage/commit/904a606aa298640f2edb9a167de39219b932a3c4"
        },
        "date": 1744190297763,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_MongoDB_Set",
            "value": 347756,
            "unit": "ns/op\t    6477 B/op\t      92 allocs/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - ns/op",
            "value": 347756,
            "unit": "ns/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - B/op",
            "value": 6477,
            "unit": "B/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Set - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "3370 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get",
            "value": 317458,
            "unit": "ns/op\t    7463 B/op\t      80 allocs/op",
            "extra": "3770 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - ns/op",
            "value": 317458,
            "unit": "ns/op",
            "extra": "3770 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - B/op",
            "value": 7463,
            "unit": "B/op",
            "extra": "3770 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_Get - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "3770 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete",
            "value": 737963,
            "unit": "ns/op\t   11522 B/op\t     160 allocs/op",
            "extra": "1620 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - ns/op",
            "value": 737963,
            "unit": "ns/op",
            "extra": "1620 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - B/op",
            "value": 11522,
            "unit": "B/op",
            "extra": "1620 times\n4 procs"
          },
          {
            "name": "Benchmark_MongoDB_SetAndDelete - allocs/op",
            "value": 160,
            "unit": "allocs/op",
            "extra": "1620 times\n4 procs"
          }
        ]
      }
    ]
  }
}