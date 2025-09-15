window.BENCHMARK_DATA = {
  "lastUpdate": 1757957584738,
  "repoUrl": "https://github.com/hyoklee/h5bench",
  "entries": {
    "H5Bench Performance": [
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "bace3cde5f6a2e8aa8aa175439be32981d175189",
          "message": "ci: configure benchmark action to use gh-pages branch\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T09:21:32-05:00",
          "tree_id": "54da4ebf16896cdae0db56fc9ae2b659646186ad",
          "url": "https://github.com/hyoklee/h5bench/commit/bace3cde5f6a2e8aa8aa175439be32981d175189"
        },
        "date": 1757946652574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 303.99,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Tests Passed",
            "value": 2,
            "unit": "count"
          },
          {
            "name": "Test Pass Rate",
            "value": 100,
            "unit": "percent"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "bace3cde5f6a2e8aa8aa175439be32981d175189",
          "message": "ci: configure benchmark action to use gh-pages branch\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T09:21:32-05:00",
          "tree_id": "54da4ebf16896cdae0db56fc9ae2b659646186ad",
          "url": "https://github.com/hyoklee/h5bench/commit/bace3cde5f6a2e8aa8aa175439be32981d175189"
        },
        "date": 1757947779682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.4,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.22,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Tests Passed",
            "value": 2,
            "unit": "count"
          },
          {
            "name": "Test Pass Rate",
            "value": 100,
            "unit": "percent"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "e19cd350b1dc72b9f268e532236085ff64ed8484",
          "message": "fix: skip test pass count and rate in benchmark parsing\n\nFocus on performance metrics only for meaningful benchmark tracking\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T10:00:15-05:00",
          "tree_id": "9cc7a9b5d4e4213b23e9a1271993b2fb0eeae471",
          "url": "https://github.com/hyoklee/h5bench/commit/e19cd350b1dc72b9f268e532236085ff64ed8484"
        },
        "date": 1757949048871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.18,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.23,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "7fcb58325c07a328fcf5f3d22da109498dccde6e",
          "message": "feat: add daily cron schedule with HDF5 change detection\n\n- Run daily at 6 AM UTC via cron schedule\n- Add workflow_dispatch for manual triggers\n- Cache HDF5 builds based on commit hash\n- Check previous HDF5 hash and skip tests if unchanged\n- Store HDF5 commit hash in gh-pages branch\n- Only run tests when HDF5 develop branch changes\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T10:29:11-05:00",
          "tree_id": "a885c2164405b0ed33b4800a3fe9e370f2779297",
          "url": "https://github.com/hyoklee/h5bench/commit/7fcb58325c07a328fcf5f3d22da109498dccde6e"
        },
        "date": 1757950747452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 304.79,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.22,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "7fcb58325c07a328fcf5f3d22da109498dccde6e",
          "message": "feat: add daily cron schedule with HDF5 change detection\n\n- Run daily at 6 AM UTC via cron schedule\n- Add workflow_dispatch for manual triggers\n- Cache HDF5 builds based on commit hash\n- Check previous HDF5 hash and skip tests if unchanged\n- Store HDF5 commit hash in gh-pages branch\n- Only run tests when HDF5 develop branch changes\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T10:29:11-05:00",
          "tree_id": "a885c2164405b0ed33b4800a3fe9e370f2779297",
          "url": "https://github.com/hyoklee/h5bench/commit/7fcb58325c07a328fcf5f3d22da109498dccde6e"
        },
        "date": 1757957584323,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 301.12,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.22,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      }
    ]
  }
}