#!/usr/bin/env python3
"""
Parse h5bench test results and convert to github-action-benchmark JSON format.
"""

import json
import re
import sys
from typing import List, Dict, Any


def parse_test_results(file_path: str) -> List[Dict[str, Any]]:
    """Parse ctest output and extract benchmark data."""
    benchmarks = []

    try:
        with open(file_path, 'r') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File {file_path} not found")
        return benchmarks

    # Extract test execution times
    # Pattern to match: "Start 1: test-name" followed by "1/5 Test #1: test-name ................   Passed    X.XX sec"
    test_pattern = r'(\d+/\d+\s+Test\s+#\d+:\s+([^\s]+)\s+\.+\s+(Passed|Failed)\s+([0-9.]+)\s+sec)'

    for match in re.finditer(test_pattern, content):
        full_match, test_name, status, duration = match.groups()

        if status == "Passed":
            # Convert test name to more readable format
            display_name = test_name.replace('-', ' ').replace('_', ' ').title()

            benchmarks.append({
                "name": f"Test Duration - {display_name}",
                "unit": "seconds",
                "value": float(duration),
                "extra": f"Test Status: {status}"
            })

    # Extract any performance metrics from test output if available
    # Look for patterns like "Performance: X.XX MB/s" or "Throughput: X.XX ops/sec"
    perf_patterns = [
        (r'Performance:\s+([0-9.]+)\s+MB/s', 'MB/s', 'Performance'),
        (r'Throughput:\s+([0-9.]+)\s+ops/sec', 'ops/sec', 'Throughput'),
        (r'Bandwidth:\s+([0-9.]+)\s+GB/s', 'GB/s', 'Bandwidth'),
        (r'IOPS:\s+([0-9.]+)', 'IOPS', 'IO Operations Per Second'),
    ]

    for pattern, unit, metric_name in perf_patterns:
        for match in re.finditer(pattern, content):
            value = float(match.group(1))
            benchmarks.append({
                "name": metric_name,
                "unit": unit,
                "value": value
            })

    # Skip adding test count and pass rate metrics to focus on performance data only
    # These metrics don't provide meaningful performance insights for benchmarking

    return benchmarks


def main():
    if len(sys.argv) != 3:
        print("Usage: python parse_test_results.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    benchmarks = parse_test_results(input_file)

    if not benchmarks:
        print("Warning: No benchmark data extracted from test results")
        # Create a minimal benchmark entry to avoid empty output
        benchmarks = [{
            "name": "Test Execution",
            "unit": "status",
            "value": 1,
            "extra": "No specific performance metrics found"
        }]

    with open(output_file, 'w') as f:
        json.dump(benchmarks, f, indent=2)

    print(f"Generated benchmark data with {len(benchmarks)} entries")
    for benchmark in benchmarks:
        print(f"  - {benchmark['name']}: {benchmark['value']} {benchmark['unit']}")


if __name__ == "__main__":
    main()