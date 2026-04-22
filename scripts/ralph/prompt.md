# Ralph Agent Instructions

## Your Task

1. Read `scripts/ralph/prd.yaml`
2. Read `scripts/ralph/progress.txt`
   (check Codebase Patterns first)
3. Check you're on the correct branch
4. Pick highest priority story 
   where `passes: false`
5. Implement that ONE story (see story-type rules below)
6. Run tests scoped to changed files via npx vitest run <paths>
7. Commit: `feat: [ID] - [Title]`
8. Update prd.yaml: `passes: true`
9. Append learnings to scripts/ralph/progress.txt

## Story-Type Rules

### Implement batch-NNN stories

For any story titled "Implement batch-NNN":

1. Run `python3 scripts/ralph/generate_tests.py --batch batch-NNN`
2. Do NOT hand-author expected outputs
3. Do NOT hand-author test cases
4. The script emits all stubs and test files automatically from oracle outputs
5. Run `npx vitest run` scoped to the newly generated test files
6. Commit with message: `feat [US-0XX] - Implement batch-NNN`

### Expand prd window stories

For any story titled "Expand prd window":

1. Run `python3 scripts/ralph/expand_prd.py`
2. Commit the updated `prd.yaml` + `manifest.json` together
3. Commit with message: `feat [US-0XX] - Expand prd window`

## Explicit Ban

**Never write expected outputs or test assertions from your own reasoning.**
Ralph has no oracle except the scripts in `scripts/ralph/` and the solutions in `solutions-bank/`.
All expected values MUST come from running oracle scripts — never from model inference.

## Progress Format

APPEND to scripts/ralph/progress.txt:

## [Date] - [Story ID]
- What was implemented
- Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered
---

## prd.yaml format

```yaml
branchName: ralph/feature
userStories:
  - id: US-001
    title: Add login form
    acceptanceCriteria:
      - Email/password fields
      - Validates email format
      - typecheck passes
    priority: 1
    passes: false
    notes: ""
```

## Codebase Patterns

Add reusable patterns to the TOP
of progress.txt:

## Codebase Patterns
- Migrations: Use IF NOT EXISTS
- React: useRef<Timeout | null>(null)

## Stop Condition

When the active story is an "Expand prd window" story and
`python3 scripts/ralph/expand_prd.py` outputs `<promise>COMPLETE</promise>`,
mark that story `passes: true`, commit, and reply:

<promise>COMPLETE</promise>

Otherwise end normally.
