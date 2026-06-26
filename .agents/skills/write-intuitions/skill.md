# Write Intuitions

Add step-by-step intuition comments directly inline in the current file's implementation.

## What to write

For each logical phase of the algorithm, add a comment block above it that explains:

1. **What** is happening at this step in plain English
2. **Why** — what problem it solves or what insight drives it
3. A concrete **example** showing what the data looks like at this point (e.g. input → output of this step)

## Format

Use `// Step N: ...` labels only when steps are long. Example:

```javascript
// Step 1: count how many times each value appears across all lists
// e.g. [1->4->5], [1->3->4]  =>  Map { 1:2, 4:2, 5:1 }
```

## Rules

- Comments can go above the code or inline on the same line — whichever fits without making the line too long
- Keep each comment to 1-2 lines max — no paragraphs
- Use concrete small examples, not abstract descriptions
- Do not restate what the code literally does — explain the _insight_ or _intent_
- Do not remove or alter existing `@complexity` or other JSDoc blocks
