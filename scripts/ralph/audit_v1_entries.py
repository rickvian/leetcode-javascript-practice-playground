#!/usr/bin/env python3
"""
Classify and purge v1-generated playground entries.

Classification rule: if a test file imports from solutions-oracle-adapter/ -> v2 (keep)
                     otherwise -> v1 (purge candidate)

Safety: only delete pairs where BOTH stub and test exist. Skip orphans with a warning.
"""

import json
import os
import re
import sys

PLAYGROUND_DIR = "leetcode-playground"
TESTS_DIR = os.path.join(PLAYGROUND_DIR, "tests")
PURGE_CANDIDATES_FILE = "scripts/ralph/v1-purge-candidates.json"

ORACLE_ADAPTER_PATTERN = re.compile(r"solutions-oracle-adapter/")


def classify_test_file(test_path):
    """Return 'v2' if file imports from solutions-oracle-adapter/, else 'v1'."""
    try:
        with open(test_path, "r", encoding="utf-8") as f:
            content = f.read()
        if ORACLE_ADAPTER_PATTERN.search(content):
            return "v2"
        return "v1"
    except OSError:
        return "v1"


def main():
    test_files = sorted(
        f for f in os.listdir(TESTS_DIR) if f.endswith(".test.js")
    )

    purge_candidates = []
    kept = []
    skipped_orphans = []

    for test_file in test_files:
        base = test_file[: -len(".test.js")]  # strip .test.js
        stub_path = os.path.join(PLAYGROUND_DIR, f"{base}.js")
        test_path = os.path.join(TESTS_DIR, test_file)

        stub_exists = os.path.isfile(stub_path)
        classification = classify_test_file(test_path)

        if classification == "v2":
            kept.append(base)
            continue

        # v1 purge candidate — safety check: must have both stub and test
        if not stub_exists:
            skipped_orphans.append(
                {"base": base, "reason": "test exists but stub missing"}
            )
            print(f"  WARNING: orphan test (no stub) — skipping: {test_file}", file=sys.stderr)
            continue

        purge_candidates.append(
            {"base": base, "stub": stub_path, "test": test_path, "reason": "v1: no solutions-oracle-adapter import"}
        )

    # Also detect stubs that have no matching test (orphan stubs — never delete these)
    stub_files = [
        f[: -len(".js")]
        for f in os.listdir(PLAYGROUND_DIR)
        if f.endswith(".js") and re.match(r"^\d{4}-", f)
    ]
    purge_bases = {c["base"] for c in purge_candidates}
    kept_bases = set(kept)
    for stub_base in stub_files:
        test_path = os.path.join(TESTS_DIR, f"{stub_base}.test.js")
        if not os.path.isfile(test_path) and stub_base not in purge_bases and stub_base not in kept_bases:
            skipped_orphans.append(
                {"base": stub_base, "reason": "stub exists but test missing"}
            )
            print(f"  WARNING: orphan stub (no test) — skipping: {stub_base}.js", file=sys.stderr)

    # Write purge-candidates JSON
    os.makedirs(os.path.dirname(PURGE_CANDIDATES_FILE), exist_ok=True)
    with open(PURGE_CANDIDATES_FILE, "w", encoding="utf-8") as f:
        json.dump(purge_candidates, f, indent=2)

    # Delete purge candidates
    purged = 0
    for candidate in purge_candidates:
        try:
            os.remove(candidate["stub"])
            os.remove(candidate["test"])
            purged += 1
        except OSError as e:
            print(f"  ERROR deleting {candidate['base']}: {e}", file=sys.stderr)

    print(
        f"purged {purged} stub+test pairs; "
        f"kept {len(kept)} v2 entries; "
        f"skipped {len(skipped_orphans)} orphans"
    )


if __name__ == "__main__":
    main()
