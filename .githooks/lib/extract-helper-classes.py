#!/usr/bin/env python3
"""
extract-helper-classes.py — Print helper data-structure class definitions from
a playground stub that are NOT already defined in the reference solution.

Usage:
    extract-helper-classes.py <playground_file> <ref_file>

Output:
    Source of each eligible class, separated by newlines, on stdout.

Why this script exists
----------------------
Reference solutions copied from elsewhere (e.g. Josh's vendored library) assume
helper classes like ListNode and TreeNode already exist in scope (the LeetCode
editor provides them globally). When we inject just the ref solution + an export
line into a vitest-runnable file, those helper classes are undefined unless we
carry their definitions over from the playground stub.

Why an allowlist (not "extract every class")
--------------------------------------------
Problem-solution classes (LRUCache, MinStack, BSTIterator, ...) live in the stub
as the thing the user must implement. Pulling them in alongside the ref solution
would duplicate the class declaration and break the import. Only data-structure
helpers used as input/output by tree, linked-list, graph, and quad-tree problems
are eligible.

Algorithm
---------
1. Find every top-level `class Foo {` in the stub.
2. Skip if Foo is not in HELPER_CLASSES (allowlist).
3. Skip if the ref already defines Foo (avoid duplicate declarations).
4. Walk forward from the class header, brace-balanced, to find the matching `}`.
   Brace counting (not regex) handles nested braces inside method bodies.
5. Print the extracted source.
"""

import re
import sys

# Allowlist: only these helper data-structure class names are eligible for
# extraction. Problem-solution classes (LRUCache, MinStack, BSTIterator, ...)
# must NOT be extracted — the ref solution defines them itself.
HELPER_CLASSES = {"ListNode", "TreeNode", "Node", "RandomNode"}


def already_defined_in_ref(class_name: str, ref_source: str) -> bool:
    """True if `ref_source` already declares `class_name` as `class X` or `var X = ...`."""
    return bool(
        re.search(r"\b" + class_name + r"\s*=", ref_source)
        or re.search(r"^class " + class_name + r"\b", ref_source, re.MULTILINE)
    )


def extract_class_body(source: str, start: int) -> str:
    """Return the full `class Foo { ... }` source starting at `source[start]`,
    using brace counting to find the matching closing `}`."""
    depth = 0
    i = start
    while i < len(source):
        ch = source[i]
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return source[start : i + 1]
        i += 1
    # Malformed input (unbalanced braces) — return what we have so the caller
    # can still inspect/diagnose.
    return source[start:]


def extract_eligible_classes(playground_source: str, ref_source: str) -> list[str]:
    out = []
    for match in re.finditer(r"^(class (\w+)[^{]*\{)", playground_source, re.MULTILINE):
        class_name = match.group(2)
        if class_name not in HELPER_CLASSES:
            continue
        if already_defined_in_ref(class_name, ref_source):
            continue
        out.append(extract_class_body(playground_source, match.start()))
    return out


def main() -> int:
    if len(sys.argv) != 3:
        print(
            "usage: extract-helper-classes.py <playground_file> <ref_file>",
            file=sys.stderr,
        )
        return 2

    playground_path, ref_path = sys.argv[1], sys.argv[2]
    with open(playground_path) as f:
        playground = f.read()
    with open(ref_path) as f:
        ref = f.read()

    print("\n".join(extract_eligible_classes(playground, ref)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
