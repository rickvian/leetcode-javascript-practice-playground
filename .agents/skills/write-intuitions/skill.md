# Write Intuitions

Add step-by-step intuition comments directly inline in the current file's implementation.

## Target file

Resolve in this priority order — stop at the first match. Check **the current message first**, then earlier conversation history:

1. **IDE open file**: The current user message or any prior message contains an `<ide_opened_file>` tag. Extract the path from inside the tag and use it directly — do NOT ask the user. Example tag: `<ide_opened_file>The user opened the file /abs/path/to/file.js in the IDE...</ide_opened_file>` → path is `/abs/path/to/file.js`.
2. **User-selected code**: If `<ide_selection>` is present in the current or prior messages, derive the file path from it.
3. **Explicitly named file**: A file path the user typed in this message or earlier in the conversation.
4. **Only if none of the above**: Ask the user which file to target.

Once resolved, read the file before writing any comments.

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
