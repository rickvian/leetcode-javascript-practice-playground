#!/usr/bin/env python3
"""
Generate question category YAML files from LeetCode problem data.

Usage:
    python scripts/generate_category_yamls.py

Outputs:
    - question_category/leetcode_top_75/reference_leetcode_top_75.yaml
    - question_category/by_topic/<topic>.yaml  (one per topic with >= MIN_TOPIC_COUNT free problems)

Skips:
    - blind_75 (already maintained manually)
    - paid-only problems
"""

import json
import os
import re

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(REPO_ROOT, "fetch-scrap-leetcode-problem", "responseArchive", "full_leetcode_problems_response.json")
PROCESSED_LIST_DIR = os.path.join(REPO_ROOT, "fetch-scrap-leetcode-problem", "processedList")
CATEGORY_DIR = os.path.join(REPO_ROOT, "question_category")
MIN_TOPIC_COUNT = 10


# ── helpers ──────────────────────────────────────────────────────────────────

def slug_to_topic_key(slug):
    """'Heap (Priority Queue)' -> 'heap_priority_queue'"""
    key = slug.lower()
    key = re.sub(r"[^a-z0-9]+", "_", key)
    return key.strip("_")


def pad_number(n):
    return str(int(n)).zfill(4)


def build_entry(seq_id, problem, *, include_paths=True):
    num = pad_number(problem["questionFrontendId"])
    name = problem["titleSlug"]
    diff = problem["difficulty"].lower()
    url = f"https://leetcode.com/problems/{name}/"
    entry = f"""  - id: {seq_id}
    number: "{num}"
    name: {name}
    difficulty: {diff}
"""
    if include_paths:
        entry += f"""    solution: ./leetcode-playground/{num}-{name}.js
    test: ./leetcode-playground/tests/{num}-{name}.test.js
"""
    entry += f"""    leetcode_url: {url}
    notes: ""
"""
    return entry


def write_yaml(path, header_comment, sections):
    """
    sections: list of (section_key, [problem, ...]) tuples
    """
    os.makedirs(os.path.dirname(path), exist_ok=True)
    lines = [header_comment.rstrip(), ""]
    seq = 1
    for section_key, problems in sections:
        lines.append(f"{section_key}:")
        for p in problems:
            lines.append(build_entry(seq, p).rstrip())
            lines.append("")
            seq += 1
    with open(path, "w") as f:
        f.write("\n".join(lines) + "\n")
    return seq - 1


def load_json():
    with open(JSON_PATH) as f:
        data = json.load(f)
    problems = data["questions"]
    by_id = {int(p["questionFrontendId"]): p for p in problems}
    return problems, by_id


def parse_txt_list(path):
    """Parse lines like '0011 - container with most water' -> list of int IDs."""
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


# ── generators ───────────────────────────────────────────────────────────────

def generate_leetcode_top_75(by_id):
    txt_path = os.path.join(PROCESSED_LIST_DIR, "leetcode_top_75_formatted.txt")
    ids = parse_txt_list(txt_path)

    out_dir = os.path.join(CATEGORY_DIR, "leetcode_top_75")
    out_path = os.path.join(out_dir, "reference_leetcode_top_75.yaml")

    problems = [by_id[i] for i in ids if i in by_id]
    missing = [i for i in ids if i not in by_id]
    if missing:
        print(f"  [warn] leetcode_top_75: {len(missing)} IDs not found in JSON: {missing}")

    count = write_yaml(
        out_path,
        "# LeetCode Top 75 Reference\n# Ctrl+Click any solution/test path in VSCode to open the file directly.\n# Source: https://leetcode.com/studyplan/leetcode-75/",
        [("leetcode_top_75", problems)],
    )
    print(f"  wrote {out_path}  ({count} problems)")


def generate_by_topic(problems):
    free = [p for p in problems if not p.get("paidOnly")]
    # group by every tag the problem has (a problem can appear in multiple topic files)
    from collections import defaultdict
    topic_map = defaultdict(list)
    for p in free:
        seen = set()
        for tag in p.get("topicTags", []):
            key = slug_to_topic_key(tag["name"])
            if key not in seen:
                topic_map[key].append(p)
                seen.add(key)

    out_dir = os.path.join(CATEGORY_DIR, "by_topic")
    os.makedirs(out_dir, exist_ok=True)

    written = 0
    skipped = 0
    for topic_key, topic_problems in sorted(topic_map.items()):
        if len(topic_problems) < MIN_TOPIC_COUNT:
            skipped += 1
            continue
        # sort by problem number
        topic_problems.sort(key=lambda p: int(p["questionFrontendId"]))
        out_path = os.path.join(out_dir, f"{topic_key}.yaml")
        count = write_yaml(
            out_path,
            f"# Topic: {topic_key.replace('_', ' ').title()}\n# Auto-generated from LeetCode topic tags. Free problems only.",
            [(topic_key, topic_problems)],
        )
        print(f"  wrote {out_path}  ({count} problems)")
        written += 1

    print(f"  by_topic: {written} topic files written, {skipped} skipped (< {MIN_TOPIC_COUNT} problems)")


# ── main ─────────────────────────────────────────────────────────────────────

def main():
    print("Loading JSON...")
    problems, by_id = load_json()
    print(f"  {len(problems)} total problems loaded")

    print("\nGenerating leetcode_top_75...")
    generate_leetcode_top_75(by_id)

    print("\nGenerating by_topic...")
    generate_by_topic(problems)

    print("\nDone.")


if __name__ == "__main__":
    main()
