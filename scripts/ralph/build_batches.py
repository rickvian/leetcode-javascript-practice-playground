"""Generate batch manifest + per-batch JSON files for the 3000-scenario target.

Reads the full LeetCode problem dump, subtracts problems already present in
`leetcode-playground/` (matched by 4-digit ID prefix), caps the remaining pool
so `existing + new ~= 3000`, tags class-heavy problems, and packs the
selection into 20-problem batches with at most 2 class-heavy problems each.

Also checks solutions-bank/ for each problem and tags oracleTier ("bank" or
"missing") plus oracleFnName (the extracted function name, or None).

Run with:
    python3 scripts/ralph/build_batches.py
"""

from __future__ import annotations

import json
import re
from collections import deque
from pathlib import Path
from typing import Iterable

REPO_ROOT = Path(__file__).resolve().parents[2]
SOURCE_JSON = (
    REPO_ROOT
    / "fetch-scrap-leetcode-problem"
    / "responseArchive"
    / "full_leetcode_problems_response.json"
)
PLAYGROUND_DIR = REPO_ROOT / "leetcode-playground"
SOLUTIONS_BANK_DIR = REPO_ROOT / "solutions-bank"
OUTPUT_DIR = REPO_ROOT / "scripts" / "ralph" / "batches"
MANIFEST_PATH = REPO_ROOT / "scripts" / "ralph" / "manifest.json"

ORACLE_FN_RE = re.compile(r"^var\s+(\w+)\s*=\s*function", re.MULTILINE)

TARGET_TOTAL = 3000
TARGET_TOLERANCE = 20
BATCH_SIZE = 20
MAX_CLASS_HEAVY_PER_BATCH = 2

CLASS_HEAVY_KEYWORDS = (
    "cache",
    "stack",
    "queue",
    "heap",
    "trie",
    "iterator",
    "serialize",
    "randomized",
    "median-finder",
    "lfu",
    "lru",
    "union-find",
)

ID_PREFIX_RE = re.compile(r"^(\d{4})-")


def load_existing_ids(playground_dir: Path) -> set[int]:
    existing: set[int] = set()
    for path in playground_dir.glob("*.js"):
        m = ID_PREFIX_RE.match(path.name)
        if m:
            existing.add(int(m.group(1)))
    return existing


def load_questions(source: Path) -> list[dict]:
    with source.open("r", encoding="utf-8") as f:
        payload = json.load(f)
    return payload["questions"]


def is_class_heavy(title: str, slug: str) -> bool:
    slug_lower = slug.lower()
    title_lower = title.lower()
    if slug_lower.startswith("design-"):
        return True
    for kw in CLASS_HEAVY_KEYWORDS:
        if kw in slug_lower or kw in title_lower:
            return True
    return False


def format_tags(topic_tags: Iterable[dict]) -> list[str]:
    return [t["slug"] for t in topic_tags if "slug" in t]


def resolve_oracle(problem_id: str, slug: str) -> tuple[str, str | None]:
    """Return (oracleTier, oracleFnName) for a problem.

    oracleTier is "bank" when the file exists and the fn regex matches,
    else "missing".
    """
    bank_path = SOLUTIONS_BANK_DIR / f"{problem_id}-{slug}.js"
    if not bank_path.exists():
        return "missing", None
    source = bank_path.read_text(encoding="utf-8")
    m = ORACLE_FN_RE.search(source)
    if not m:
        return "missing", None
    return "bank", m.group(1)


def build_problem_pool(
    questions: list[dict],
    existing_ids: set[int],
) -> list[dict]:
    pool: list[dict] = []
    for q in questions:
        try:
            fid = int(q["questionFrontendId"])
        except (KeyError, ValueError, TypeError):
            continue
        if fid in existing_ids:
            continue
        slug = q["titleSlug"]
        title = q["title"]
        pid = f"{fid:04d}"
        oracle_tier, oracle_fn_name = resolve_oracle(pid, slug)
        pool.append(
            {
                "id": pid,
                "frontendId": fid,
                "slug": slug,
                "title": title,
                "difficulty": q.get("difficulty", ""),
                "tags": format_tags(q.get("topicTags", [])),
                "classHeavy": is_class_heavy(title, slug),
                "oracleTier": oracle_tier,
                "oracleFnName": oracle_fn_name,
            }
        )
    pool.sort(key=lambda p: p["frontendId"])
    return pool


def cap_selection(pool: list[dict], existing_count: int) -> list[dict]:
    target_new = TARGET_TOTAL - existing_count
    # Allow total to land within TARGET_TOTAL +/- TARGET_TOLERANCE.
    upper_new = target_new + TARGET_TOLERANCE
    cap = min(len(pool), max(0, upper_new))
    # Prefer the exact target when the pool is large enough.
    if len(pool) >= target_new:
        cap = target_new
    return pool[:cap]


def pack_batches(pool: list[dict]) -> list[list[dict]]:
    batches: list[list[dict]] = []
    overflow: deque[dict] = deque()
    i = 0
    n = len(pool)

    while i < n or overflow:
        batch: list[dict] = []
        heavy_count = 0

        # Drain overflow first (FIFO) while it still fits.
        while overflow and len(batch) < BATCH_SIZE and heavy_count < MAX_CLASS_HEAVY_PER_BATCH:
            batch.append(overflow.popleft())
            heavy_count += 1

        # Fill from the main pool.
        while i < n and len(batch) < BATCH_SIZE:
            p = pool[i]
            if p["classHeavy"]:
                if heavy_count < MAX_CLASS_HEAVY_PER_BATCH:
                    batch.append(p)
                    heavy_count += 1
                else:
                    overflow.append(p)
                i += 1
            else:
                batch.append(p)
                i += 1

        if not batch:
            break
        batches.append(batch)

    return batches


def strip_pool_fields(problems: list[dict]) -> list[dict]:
    return [
        {
            "id": p["id"],
            "slug": p["slug"],
            "title": p["title"],
            "difficulty": p["difficulty"],
            "tags": p["tags"],
            "classHeavy": p["classHeavy"],
            "oracleTier": p["oracleTier"],
            "oracleFnName": p["oracleFnName"],
        }
        for p in problems
    ]


def write_batches(batches: list[list[dict]]) -> list[dict]:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    # Remove stale batch files so the script stays idempotent when the batch
    # count shrinks between runs.
    for stale in OUTPUT_DIR.glob("batch-*.json"):
        stale.unlink()

    manifest_entries: list[dict] = []
    for idx, batch in enumerate(batches, start=1):
        batch_id = f"batch-{idx:03d}"
        batch_path = OUTPUT_DIR / f"{batch_id}.json"
        stripped = strip_pool_fields(batch)
        payload = {
            "batchId": batch_id,
            "problems": stripped,
        }
        with batch_path.open("w", encoding="utf-8") as f:
            json.dump(payload, f, indent=2)
            f.write("\n")
        bank_count = sum(1 for p in stripped if p["oracleTier"] == "bank")
        missing_count = sum(1 for p in stripped if p["oracleTier"] == "missing")
        manifest_entries.append(
            {
                "batchId": batch_id,
                "file": f"batches/{batch_id}.json",
                "count": len(batch),
                "classHeavyCount": sum(1 for p in batch if p["classHeavy"]),
                "bankCount": bank_count,
                "missingCount": missing_count,
            }
        )
    return manifest_entries


def write_manifest(manifest_entries: list[dict], existing_count: int) -> None:
    total_new = sum(e["count"] for e in manifest_entries)
    total_bank = sum(e["bankCount"] for e in manifest_entries)
    total_missing = sum(e["missingCount"] for e in manifest_entries)
    manifest = {
        "targetTotal": TARGET_TOTAL,
        "tolerance": TARGET_TOLERANCE,
        "existingCount": existing_count,
        "newCount": total_new,
        "grandTotal": existing_count + total_new,
        "bankCount": total_bank,
        "missingCount": total_missing,
        "batchSize": BATCH_SIZE,
        "maxClassHeavyPerBatch": MAX_CLASS_HEAVY_PER_BATCH,
        "batches": manifest_entries,
    }
    with MANIFEST_PATH.open("w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
        f.write("\n")


def main() -> None:
    existing_ids = load_existing_ids(PLAYGROUND_DIR)
    questions = load_questions(SOURCE_JSON)
    pool = build_problem_pool(questions, existing_ids)
    selection = cap_selection(pool, existing_count=len(existing_ids))
    batches = pack_batches(selection)
    manifest_entries = write_batches(batches)
    write_manifest(manifest_entries, existing_count=len(existing_ids))

    total_bank = sum(e["bankCount"] for e in manifest_entries)
    total_missing = sum(e["missingCount"] for e in manifest_entries)
    print(f"existing: {len(existing_ids)}")
    print(f"selected new: {len(selection)}")
    print(f"batches: {len(batches)}")
    print(f"grand total: {len(existing_ids) + len(selection)}")
    print(f"oracle bank: {total_bank}")
    print(f"oracle missing: {total_missing}")


if __name__ == "__main__":
    main()
