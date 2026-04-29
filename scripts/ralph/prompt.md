# Ralph Agent Instructions

This is the **general** ralph workflow. Phase- or project-specific rules
(e.g. how to implement a "batch-NNN" story under the current plan) live in a
dedicated guideline file referenced from the active prd.yaml story. Do **not**
add phase-specific detail to this prompt.

## Your Task

1. Read `scripts/ralph/prd.yaml`
2. Read `scripts/ralph/progress.txt`
3. Check you're on the correct branch
4. Pick the highest priority story where `passes: false`
5. Implement that ONE story (see story-type rules below)
6. Run tests scoped to changed files via `npx vitest run <paths>`
7. Commit: `feat: [ID] - [Title]`
8. Update prd.yaml: `passes: true`
9. Append learnings to `scripts/ralph/progress.txt`

## Story-Type Rules

### Implement batch-NNN stories

Follow the phase-specific batch guideline file referenced in the story's
acceptance criteria (currently: `docs/plan-v3/claude.md`). Do not invent or
shortcut the per-problem flow defined there.

After all problems in the batch are processed, commit:
`feat [US-0XX] - Implement batch-NNN`

### Expand prd window stories

1. Run `python3 scripts/ralph/expand_prd.py`
2. Commit updated `prd.yaml` + `manifest.json`
3. Commit message: `feat [US-0XX] - Expand prd window`

---

## Quality Rules

- Never write expected outputs or test assertions from your own reasoning;
  ralph has no oracle except the scripts in `scripts/ralph/` and the
  solutions in `solutions-bank/`.
- A test file is only committed if it passes the validation defined in the
  active phase guideline.
- Problems that can't produce a valid test suite go to `needs-oracle.json` —
  never emit wrong tests.

---

## Progress Format

APPEND to `scripts/ralph/progress.txt`:

```
## [Date] - [Story ID]
- What was implemented
- Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered
---
```

---

## prd.yaml format

```yaml
branchName: feature/name
userStories:
  - id: US-001
    title: Example story
    acceptanceCriteria:
      - Criterion one
      - Criterion two
    priority: 1
    passes: false
    notes: ""
```

---

## Stop Condition

When the active story is "Expand prd window" and `expand_prd.py` outputs
`<promise>COMPLETE</promise>`, mark `passes: true`, commit, and reply:

<promise>COMPLETE</promise>
