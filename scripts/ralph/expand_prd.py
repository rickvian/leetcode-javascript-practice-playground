#!/usr/bin/env python3
"""
expand_prd.py — append the next 10 batch stories + one Expand story to prd.yaml.

Stop condition: if manifest.expandedUpTo == len(manifest.batches), print
<promise>COMPLETE</promise>, mark the Expand story passes:true, and exit.
"""
import json
import os
import sys

from ruamel.yaml import YAML

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PRD_PATH = os.path.join(SCRIPT_DIR, "prd.yaml")
MANIFEST_PATH = os.path.join(SCRIPT_DIR, "manifest.json")
WINDOW = 10  # batch stories to add per expansion

BATCH_STORY_TEMPLATE = """\
For each problem in scripts/ralph/batches/{batchId}.json:
- Run `python3 scripts/ralph/generate_tests.py --batch {batchId}` to emit stubs and test files — do NOT hand-author expected outputs, do NOT hand-author test cases
- The script handles idempotent resume (skips existing stub+test pairs automatically)
- Run npx vitest run scoped to newly generated test files
- Commit with message: feat [{storyId}] - Implement {batchId}\
"""

EXPAND_STORY_CRITERIA = [
    "Run `python3 scripts/ralph/expand_prd.py` to append the next batch window",
    "Commit the updated prd.yaml + manifest.json with message matching the story title",
    "If the script outputs <promise>COMPLETE</promise>, mark this story passes: true and stop",
]


def load_manifest():
    with open(MANIFEST_PATH) as f:
        return json.load(f)


def save_manifest(data):
    tmp = MANIFEST_PATH + ".tmp"
    with open(tmp, "w") as f:
        json.dump(data, f, indent=2)
        f.write("\n")
    os.replace(tmp, MANIFEST_PATH)


def load_prd():
    yaml = YAML()
    yaml.preserve_quotes = True
    with open(PRD_PATH) as f:
        return yaml, yaml.load(f)


def save_prd(yaml, data):
    tmp = PRD_PATH + ".tmp"
    with open(tmp, "w") as f:
        yaml.dump(data, f)
    os.replace(tmp, PRD_PATH)


def max_priority(stories):
    return max((s.get("priority", 0) for s in stories), default=0)


def max_us_number(stories):
    nums = []
    for s in stories:
        sid = s.get("id", "")
        if sid.startswith("US-"):
            try:
                nums.append(int(sid[3:]))
            except ValueError:
                pass
    return max(nums, default=0)


def find_self_story(stories, us_id):
    for s in stories:
        if s.get("id") == us_id:
            return s
    return None


def main():
    manifest = load_manifest()
    yaml, prd = load_prd()

    batches = manifest.get("batches", [])
    expanded_up_to = manifest.get("expandedUpTo", 0)
    total_batches = len(batches)

    stories = prd.get("userStories", [])

    # Detect if this invocation is itself a story being implemented, so we can
    # mark it passes:true on COMPLETE.
    # We find the Expand story that is currently passes:false (if any).
    active_expand_story = None
    for s in stories:
        title = s.get("title", "")
        if title == "Expand prd window" and not s.get("passes", True):
            active_expand_story = s
            break

    if expanded_up_to >= total_batches:
        # All batches already expanded — signal completion
        if active_expand_story is not None:
            active_expand_story["passes"] = True
            save_prd(yaml, prd)
        print("<promise>COMPLETE</promise>")
        return

    # Compute the slice of batches to add
    start = expanded_up_to         # 0-indexed
    end = min(start + WINDOW, total_batches)
    new_batches = batches[start:end]

    next_us = max_us_number(stories) + 1
    next_priority = max_priority(stories) + 1

    for batch_entry in new_batches:
        batch_id = batch_entry["batchId"]
        story_id = f"US-{next_us:03d}"
        criteria_text = BATCH_STORY_TEMPLATE.format(
            batchId=batch_id,
            storyId=story_id,
        )
        story = {
            "id": story_id,
            "title": f"Implement {batch_id}",
            "acceptanceCriteria": [criteria_text],
            "priority": next_priority,
            "passes": False,
            "notes": (
                "Stubs intentionally fail assertions — red test output is the expected state "
                "and does NOT block the commit. Do not run the full suite; scope to new files only."
            ),
        }
        stories.append(story)
        next_us += 1
        next_priority += 1

    # Append the next Expand story
    expand_id = f"US-{next_us:03d}"
    expand_story = {
        "id": expand_id,
        "title": "Expand prd window",
        "acceptanceCriteria": EXPAND_STORY_CRITERIA,
        "priority": next_priority,
        "passes": False,
        "notes": (
            "Append the next 10 batch stories + another Expand story. "
            "Emits <promise>COMPLETE</promise> when all batches are seeded."
        ),
    }
    stories.append(expand_story)

    # Mark the active expand story as passing (it did its job)
    if active_expand_story is not None:
        active_expand_story["passes"] = True

    # Update manifest
    manifest["expandedUpTo"] = end
    save_manifest(manifest)
    save_prd(yaml, prd)

    added_count = len(new_batches) + 1
    print(
        f"Seeded {len(new_batches)} batch stories ({batches[start]['batchId']} "
        f"through {batches[end - 1]['batchId']}) + 1 Expand story. "
        f"expandedUpTo: {start} → {end} of {total_batches}."
    )


if __name__ == "__main__":
    main()
