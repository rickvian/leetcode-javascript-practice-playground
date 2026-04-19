# Ralph Agent Instructions

## Your Task

1. Read `scripts/ralph/prd.yaml`
2. Read `scripts/ralph/progress.txt`
   (check Codebase Patterns first)
3. Check you're on the correct branch
4. Pick highest priority story 
   where `passes: false`
5. Implement that ONE story
6. Run tests scoped to changed files via npx vitest run <paths>
7. Commit: `feat: [ID] - [Title]`
8. Update prd.yaml: `passes: true`
9. Append learnings to scripts/ralph/progress.txt

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

If ALL stories pass, reply:
<promise>COMPLETE</promise>

Otherwise end normally.