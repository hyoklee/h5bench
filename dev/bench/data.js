window.BENCHMARK_DATA = {
  "lastUpdate": 1773903346323,
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
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T13:00:32-05:00",
          "tree_id": "a7b423f321a7e197681c6aeb9ac8fd6f7922a34d",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1757959870512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 303.7,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1758004046557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.9,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1758090386698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.66,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1758176756517,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 302.53,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1758349596221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.44,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1758435952264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 299.44,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1758608818819,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 304.6,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1758695241892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 299.49,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1758781698747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.29,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1758867999122,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.68,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1758954217821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.35,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1759040709795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.99,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1759213699313,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 308.13,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1759299975858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.01,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1759472729849,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.06,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1759559164059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.23,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1759732008369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.83,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1759818440899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.73,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1759904732210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.18,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1759991164436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.77,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1760077556032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.59,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1760164224463,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 308.33,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1760336920148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.58,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1760509639745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.76,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1760595971255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.89,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1760682406222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.78,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1761028076520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 304.23,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1761200872733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.65,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1761287116088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.75,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1761373421683,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 304.32,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1761632821742,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.93,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1761805581065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.47,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1761891985777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 304.63,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1761978280903,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.85,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1762151343650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.76,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1762237614341,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.85,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1762323997336,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.15,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1762410415098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.58,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.2,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1762496862950,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.24,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.26,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1762583094900,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 311.89,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.24,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1762669492439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.97,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1762756077802,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 308.37,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1762842431641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.37,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1762928824690,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.36,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1763187897283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.25,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1763447179273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.32,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1763706429137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 308.62,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1763792660016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.42,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1764138446326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 308.33,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1764656882720,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.48,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1764743256522,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.64,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1764829653899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.52,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1764916067205,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.61,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1765002308156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 308.03,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1765088709465,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.24,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1765262348103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.36,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1765348091444,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.62,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1765607169969,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.9,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1765866498563,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.94,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1766039252186,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.38,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1766125643058,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 308.51,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1766212002719,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.14,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1766471320222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.87,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1766644073816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.89,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.19,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1767076083451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.87,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1767162522356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 308.14,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1767248909814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.04,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1767421623796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.35,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1767767353879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.93,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1768027286379,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.26,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1768285750858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.19,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1768372342139,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.15,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1769063398430,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.02,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1769149755790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.01,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1769236027204,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.63,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1769322460632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.91,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1769495401621,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.61,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1769581864008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.23,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1769755500541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 304.39,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1770101174857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.22,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1770187585766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.11,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1770274370617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.66,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1770360546634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.19,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1770446338787,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 308.46,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1770793186913,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.39,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1770965742090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.34,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1771051286044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.2,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1771311215194,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 302.12,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1771484191529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 303.6,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1771655913381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1771916164788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.34,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1772002800664,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 307.37,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1772174882013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 304.1,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1772260419569,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 303.65,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1772434329577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 304.56,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.2,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1772606573642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 302.01,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1772693199304,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.94,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1772779392691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 303.72,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1772865334255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 301.86,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1773039479538,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 302.3,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.2,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1773211679193,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 303.79,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1773298171566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 305.56,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.21,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1773470573982,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 302.88,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          },
          {
            "name": "Test Duration - H5Bench Sync Metadata",
            "value": 0.2,
            "unit": "seconds",
            "extra": "Test Status: Passed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1773730831927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 304.94,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1773817155571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 304.17,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "e878e6c2eb20db31a8aa39276ddb7a1d9079d534",
          "message": "fix: add GitHub token authentication for gh-pages operations\n\n- Use GITHUB_TOKEN for cloning gh-pages branch in check and update steps\n- Resolves authentication error: \"could not read Username for 'https://github.com'\"\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:00:32Z",
          "url": "https://github.com/hyoklee/h5bench/commit/e878e6c2eb20db31a8aa39276ddb7a1d9079d534"
        },
        "date": 1773903345662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test Duration - H5Bench Sync",
            "value": 306.43,
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