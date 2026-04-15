#!/usr/bin/env python3
"""
Validate that every entry in every YAML category file has matching .js and .test.js on disk.

Usage:
    python scripts/validate_coverage.py

Exit code:
    0 — all files present
    1 — missing files detected
"""

import os
import re
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATEGORY_DIR = os.path.join(REPO_ROOT, "question_category")

missing = []
checked = 0


def parse_yaml_paths(yaml_path):
    """Extract solution/test path pairs from a YAML file without a full YAML parser."""
    solution = None
    with open(yaml_path) as f:
        for line in f:
            line = line.strip()
            if line.startswith("solution:"):
                solution = line.split("solution:", 1)[1].strip()
            elif line.startswith("test:") and solution:
                test = line.split("test:", 1)[1].strip()
                yield solution, test
                solution = None


def resolve(rel_path):
    # paths are like ./leetcode-playground/0001-two-sum.js — relative to repo root
    return os.path.join(REPO_ROOT, rel_path.lstrip("./"))


for dirpath, _, filenames in os.walk(CATEGORY_DIR):
    for fname in sorted(filenames):
        if not fname.endswith(".yaml"):
            continue
        yaml_path = os.path.join(dirpath, fname)
        for sol, test in parse_yaml_paths(yaml_path):
            checked += 1
            for path in [sol, test]:
                abs_path = resolve(path)
                if not os.path.exists(abs_path):
                    missing.append((yaml_path, path))

print(f"Checked {checked} entries across YAML files")

if missing:
    print(f"\nMissing files ({len(missing)}):")
    prev_yaml = None
    for yaml_path, path in missing:
        rel_yaml = os.path.relpath(yaml_path, REPO_ROOT)
        if rel_yaml != prev_yaml:
            print(f"\n  [{rel_yaml}]")
            prev_yaml = rel_yaml
        print(f"    {path}")
    sys.exit(1)
else:
    print("All files present. Coverage is complete.")
