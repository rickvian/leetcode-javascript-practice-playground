#!/usr/bin/env python3
"""
Generate blank JS stub and test skeleton for missing LeetCode problems.

Usage:
    # All free problems:
    python scripts/generate_stubs.py

    # Specific problem IDs:
    python scripts/generate_stubs.py --ids 4 6 7 8

    # Problems from a formatted txt list (e.g. processedList/leetcode_top_75_formatted.txt):
    python scripts/generate_stubs.py --list path/to/list.txt

    # Dry run (print what would be created, write nothing):
    python scripts/generate_stubs.py --dry-run

Skips:
    - paid-only problems
    - problems where the .js file already exists
"""

import argparse
import json
import os
import re

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(REPO_ROOT, "fetch-scrap-leetcode-problem", "responseArchive", "full_leetcode_problems_response.json")
PLAYGROUND_DIR = os.path.join(REPO_ROOT, "leetcode-playground")
TESTS_DIR = os.path.join(PLAYGROUND_DIR, "tests")


# ── helpers ──────────────────────────────────────────────────────────────────

def pad_number(n):
    return str(int(n)).zfill(4)


def slug_to_camel(slug):
    """'two-sum' -> 'twoSum', 'lru-cache' -> 'lruCache'"""
    parts = slug.split("-")
    return parts[0] + "".join(p.capitalize() for p in parts[1:])


def stub_path(num, slug):
    return os.path.join(PLAYGROUND_DIR, f"{num}-{slug}.js")


def test_path(num, slug):
    return os.path.join(TESTS_DIR, f"{num}-{slug}.test.js")


def make_stub(problem):
    num = pad_number(problem["questionFrontendId"])
    slug = problem["titleSlug"]
    title = problem["title"]
    fn = slug_to_camel(slug)
    url = f"https://leetcode.com/problems/{slug}/description/"
    return f"""/**
 * {title}
 *
 * {url}
 *
 * @param {{*}} param
 * @return {{*}}
 */
var {fn} = function(param) {{
    // implement
}};

export {{ {fn} }};
"""


def make_test(problem):
    num = pad_number(problem["questionFrontendId"])
    slug = problem["titleSlug"]
    fn = slug_to_camel(slug)
    filename = f"{num}-{slug}"
    return f"""import {{ {fn} }} from '../{filename}.js';

describe('{filename}', () => {{
    it('should handle basic case', () => {{
        // expect({fn}(...)).toEqual(...);
    }});

    it('should handle empty / minimum input', () => {{
        // expect({fn}(...)).toEqual(...);
    }});

    it('should handle edge case', () => {{
        // expect({fn}(...)).toEqual(...);
    }});
}});
"""


def parse_txt_list(path):
    ids = []
    with open(path) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("//") or line.startswith("#"):
                continue
            m = re.match(r"^(\d+)", line)
            if m:
                ids.append(int(m.group(1)))
    return ids


# ── main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Generate LeetCode JS stubs and test skeletons")
    parser.add_argument("--ids", nargs="+", type=int, help="Specific problem IDs to generate")
    parser.add_argument("--list", type=str, help="Path to formatted .txt list of problem IDs")
    parser.add_argument("--dry-run", action="store_true", help="Print what would be created without writing files")
    args = parser.parse_args()

    print("Loading JSON...")
    with open(JSON_PATH) as f:
        data = json.load(f)
    all_problems = data["questions"]
    by_id = {int(p["questionFrontendId"]): p for p in all_problems}
    print(f"  {len(all_problems)} total problems loaded")

    # determine target set
    if args.ids:
        target_ids = args.ids
        target_problems = [by_id[i] for i in target_ids if i in by_id]
        missing_ids = [i for i in target_ids if i not in by_id]
        if missing_ids:
            print(f"  [warn] IDs not found in JSON: {missing_ids}")
    elif args.list:
        target_ids = parse_txt_list(args.list)
        target_problems = [by_id[i] for i in target_ids if i in by_id]
        missing_ids = [i for i in target_ids if i not in by_id]
        if missing_ids:
            print(f"  [warn] IDs not found in JSON: {missing_ids}")
    else:
        # all free problems
        target_problems = [p for p in all_problems if not p.get("paidOnly")]
        print(f"  {len(target_problems)} free problems targeted")

    # filter paid-only
    target_problems = [p for p in target_problems if not p.get("paidOnly")]

    # sort by problem number
    target_problems.sort(key=lambda p: int(p["questionFrontendId"]))

    created = 0
    skipped = 0
    errors = []

    os.makedirs(TESTS_DIR, exist_ok=True)

    for problem in target_problems:
        num = pad_number(problem["questionFrontendId"])
        slug = problem["titleSlug"]
        s_path = stub_path(num, slug)
        t_path = test_path(num, slug)

        stub_exists = os.path.exists(s_path)
        test_exists = os.path.exists(t_path)

        if stub_exists and test_exists:
            skipped += 1
            continue

        if args.dry_run:
            if not stub_exists:
                print(f"  [dry-run] would create {os.path.relpath(s_path, REPO_ROOT)}")
            if not test_exists:
                print(f"  [dry-run] would create {os.path.relpath(t_path, REPO_ROOT)}")
            created += 1
            continue

        try:
            if not stub_exists:
                with open(s_path, "w") as f:
                    f.write(make_stub(problem))
            if not test_exists:
                with open(t_path, "w") as f:
                    f.write(make_test(problem))
            created += 1
        except Exception as e:
            errors.append((num, slug, str(e)))

    print(f"\nResults:")
    print(f"  created : {created}")
    print(f"  skipped : {skipped} (already exist)")
    if errors:
        print(f"  errors  : {len(errors)}")
        for num, slug, msg in errors:
            print(f"    {num}-{slug}: {msg}")


if __name__ == "__main__":
    main()
