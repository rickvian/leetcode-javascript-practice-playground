# Plan v3: Batch Test Generation via Ralph + Oracle

## Problem

I have a list of LeetCode problems scraped into `solutions-bank/`. Each
file has a JSDoc (description, types, examples) and a reference
implementation. I want a stub + test file for each one in
`leetcode-playground/`.

v2 tried to do this with a Python script that picked inputs from
type-signature templates. It produced wrong tests: every `string → string`
problem got the same generic inputs, because the script doesn't understand
what the function actually does.

## Goal

Generate domain-correct test files for every problem in `solutions-bank/`,
with the work driven by a prd.yaml so ralph can run the whole queue in a
loop and resume cleanly between runs.

Specifically:
- **Inputs**: chosen by ralph after reading the oracle file, not by a script
- **Expected outputs**: produced by running the oracle (already works in v2)
- **Sequencing**: one prd.yaml story per batch, expanded in chunks

## Plan

1. **Batch the problem list.** Split the `solutions-bank/` filenames into
   JSON batches under `scripts/ralph/batches/batch-NNN.json` (one batch per
   ralph run).

2. **Generate a prd.yaml of batch stories.** `expand_prd.py` appends 10
   batch stories at a time, plus 1 expand story that adds the next 10.
   Stops when every batch has a story.

3. **Each batch story tells ralph to:**
   - Read each problem's `solutions-bank/` file
   - Pick 5–7 inputs based on what the function actually does
   - Run `oracle_run.mjs` for the expected outputs
   - Emit stub + test file, validate against the oracle, retry once on fail
   - Skip and log to `needs-oracle.json` if it still fails
   - Commit the batch

4. **Run the ralph loop** over the prd.yaml until every story is done.

The per-problem rules ralph follows live in [`claude.md`](./claude.md).

## What's already in place

- `oracle_run.mjs` — runs an oracle function on given inputs, emits JSON
- `run_test.mjs` — runs a test file, reports pass/fail
- `expand_prd.py` — generates the batch stories

## What's left

- Point `BATCH_STORY_TEMPLATE` in `expand_prd.py` at `claude.md`
- Kick off the ralph loop
