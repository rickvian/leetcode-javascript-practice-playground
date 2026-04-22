#!/usr/bin/env python3
"""
generate_tests.py - Generate stub + test files for a batch of LeetCode problems.

For each problem in the batch:
  1. Skip if both stub and test already exist (idempotent resume).
  2. If oracleTier == "missing": log to needs-oracle.json and skip.
  3. Determine input category and assertion template from problem metadata.
  4. Build an adversarial input suite keyed by topic tag / param types.
  5. Run oracle_run.mjs to capture expected outputs.
  6. Emit a blank stub (JSDoc + // implement + export).
  7. Emit a test file with hardcoded expected values; no oracle import.
  8. Validate by temporarily swapping the stub import for the solutions-bank
     import and running run_test.mjs. Retry up to 2x on failure.
     Restore the stub import before the final write.

Usage:
  python3 scripts/ralph/generate_tests.py --batch batch-001
"""

import argparse
import json
import os
import re
import subprocess
import sys
import tempfile
from pathlib import Path

HERE         = Path(__file__).parent
PROJECT_ROOT = HERE.parent.parent
SOLUTIONS_BANK  = PROJECT_ROOT / 'solutions-bank'
PLAYGROUND      = PROJECT_ROOT / 'leetcode-playground'
TESTS_DIR       = PLAYGROUND / 'tests'
BATCHES_DIR     = HERE / 'batches'
NEEDS_ORACLE    = HERE / 'needs-oracle.json'
ORACLE_RUN      = HERE / 'oracle_run.mjs'
RUN_TEST        = HERE / 'run_test.mjs'

# ─────────────────────────────────────────────
# Helpers: needs-oracle.json
# ─────────────────────────────────────────────

def load_needs_oracle():
    return json.loads(NEEDS_ORACLE.read_text()) if NEEDS_ORACLE.exists() else []

def append_needs_oracle(entry):
    data = load_needs_oracle()
    data = [d for d in data if not (d.get('id') == entry['id'] and d.get('slug') == entry['slug'])]
    data.append(entry)
    NEEDS_ORACLE.write_text(json.dumps(data, indent=2))

# ─────────────────────────────────────────────
# Parse oracle JSDoc for param/return types
# ─────────────────────────────────────────────

PARAM_RE  = re.compile(r'@param\s+\{([^}]+)\}\s+(\w+)')
RETURN_RE = re.compile(r'@return\s+\{([^}]+)\}')
PROTO_RE  = re.compile(r'(\w+)\.prototype\.(\w+)\s*=\s*function\s*\(([^)]*)\)')
DESC_RE   = re.compile(r'/\*\*.*?\*/', re.DOTALL)

def parse_oracle(source):
    # Deduplicate params by name (some oracle files have multiple function defs)
    seen   = set()
    params = []
    for m in PARAM_RE.finditer(source):
        ptype, pname = m.group(1).strip(), m.group(2).strip()
        if pname not in seen:
            seen.add(pname)
            params.append((ptype, pname))
    rm          = RETURN_RE.search(source)
    return_type = rm.group(1).strip() if rm else 'void'
    return params, return_type

def parse_class_methods(source, class_name):
    return [(m.group(2), [p.strip() for p in m.group(3).split(',') if p.strip()])
            for m in PROTO_RE.finditer(source) if m.group(1) == class_name]

def extract_description(source):
    """Pull 1-2 sentence description from the oracle JSDoc block."""
    m = DESC_RE.search(source)
    if not m:
        return ''
    block = m.group(0)
    lines = [l.lstrip(' *').strip() for l in block.split('\n')]
    desc_lines = [l for l in lines if l and not l.startswith('@') and not l.startswith('*/') and not l.startswith('/**') and not l.startswith('Definition')]
    sentences = ' '.join(desc_lines)
    # Truncate to ~2 sentences
    parts = re.split(r'(?<=[.!?])\s+', sentences)
    return ' '.join(parts[:2]).strip()

# ─────────────────────────────────────────────
# Input category & assertion template detection
# ─────────────────────────────────────────────

def get_input_category(problem, param_types):
    slug       = problem.get('slug', '')
    tags       = [t.lower() for t in problem.get('tags', [])]
    class_heavy = problem.get('classHeavy', False)

    # classHeavy tag fires on slug keywords like 'queue'; override for plain functions
    # reverse-string-ii / reverse-words-in-a-string-iii are plain functions, not in-place
    # employee-importance: GetImportance is PascalCase but is a plain function
    PLAIN_FN_SLUGS = ('queue-reconstruction-by-height',
                      'reverse-string-ii', 'reverse-words-in-a-string-iii',
                      'employee-importance')
    if slug in PLAIN_FN_SLUGS:
        class_heavy = False

    fn_name = problem.get('oracleFnName', '')
    if class_heavy or (slug not in PLAIN_FN_SLUGS and fn_name and fn_name[0].isupper()):
        return 'design-class'

    for ptype, _ in param_types:
        if 'ListNode' in ptype:
            return 'pointer-linked-list'

    for ptype, _ in param_types:
        if 'TreeNode' in ptype:
            return 'pointer-tree'

    for ptype, _ in param_types:
        if 'GraphNode' in ptype or (ptype.strip() == 'Node' and
                                    ('graph' in tags or 'graph' in slug)):
            return 'pointer-graph'

    for ptype, _ in param_types:
        if '_Node' in ptype:
            return 'pointer-nary-tree'

    if slug not in PLAIN_FN_SLUGS and any(kw in slug for kw in (
            'remove-element', 'rotate', 'remove-duplicates',
            'move-zeroes', 'next-permutation', 'sort-colors',
            'sort-list-in-place', 'merge-sorted-array',
            'reverse-words-in-a-string-ii', 'wiggle-sort',
            'walls-and-gates', 'game-of-life',
            'reverse-string')):
        return 'in-place-mutation'

    return 'plain-json'

def get_assertion_template(problem, param_types, return_type):
    slug = problem.get('slug', '')
    tags = [t.lower() for t in problem.get('tags', [])]
    fn_name_ac = problem.get('oracleFnName', '')
    PLAIN_FN_SLUGS = ('queue-reconstruction-by-height',
                      'reverse-string-ii', 'reverse-words-in-a-string-iii',
                      'employee-importance')
    is_class_heavy = problem.get('classHeavy') and slug not in PLAIN_FN_SLUGS
    if is_class_heavy or (slug not in PLAIN_FN_SLUGS and fn_name_ac and fn_name_ac[0].isupper()):
        return 'design-class-sequence'
    if 'two-sum' in slug and return_type != 'boolean':
        return 'any-valid-pair-summing'
    if any(kw in slug for kw in ('permutation', 'anagram', 'letter-combinations')):
        return 'permutation-invariant'
    if any(kw in slug for kw in ('combination', 'subset', 'generate-parentheses')):
        return 'sorted-output-invariant'
    if any(kw in slug for kw in ('find-duplicate', 'first-unique-character')):
        return 'any-valid-index-of'
    return 'exact-equal'

# ─────────────────────────────────────────────
# Input catalog builders
# ─────────────────────────────────────────────

def build_inputs(problem, param_types, return_type, input_category, class_methods=None):
    if input_category == 'design-class':
        return _build_design_inputs(problem, class_methods or [])
    if input_category == 'pointer-linked-list':
        return _build_linked_list_inputs(problem, param_types)
    if input_category == 'pointer-tree':
        return _build_tree_inputs(problem, param_types)
    if input_category == 'pointer-graph':
        return _build_graph_inputs()
    if input_category == 'pointer-nary-tree':
        return _build_nary_tree_inputs(problem, param_types)
    if input_category == 'in-place-mutation':
        return _build_in_place_inputs(problem, param_types)
    return _build_plain_json_inputs(problem, param_types, return_type)

def _build_plain_json_inputs(problem, param_types, return_type):
    slug  = problem.get('slug', '')

    # ── pre-early-return slug overrides (for oracles missing @param JSDoc) ──
    if 'the-maze-iii' in slug:
        # (maze: number[][], ball: number[], hole: number[])
        return [
            [[[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], [4,3], [0,1]],
            [[[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], [4,3], [3,0]],
            [[[0,0,0],[0,0,0],[0,0,0]], [0,0], [2,2]],
            [[[0,0],[0,0]], [0,0], [1,1]],
        ]

    if not param_types:
        return []
    types = [pt.strip() for pt, _ in param_types]
    first = types[0] if types else ''

    # ── slug-specific overrides ──
    if 'queue-reconstruction-by-height' in slug:
        return [
            [[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]],
            [[[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]],
            [[[2,4],[3,4],[9,0],[0,6],[7,1],[6,0],[7,3],[2,5],[1,1],[3,0]]],
            [[[1,0]]],
            [[[1,0],[1,1]]],
        ]

    if 'fizz-buzz' in slug:
        return [[1], [3], [5], [15], [10], [20]]

    if 'longest-word-in-dictionary-through-deleting' in slug:
        # (string s, string[] dictionary) — needs domain-specific inputs
        return [
            ["abpcplea", ["ale", "apple", "monkey", "plea"]],
            ["abpcplea", ["a", "b", "c"]],
            ["a", ["b", "a"]],
            ["", ["a", "b"]],
            ["abc", ["ab", "abc", "a"]],
            ["aewfafwafjlwajflwajflwafj", ["apple", "ewaf", "awef", "awefe"]],
        ]

    if 'beautiful-arrangement' in slug:
        # backtracking; large n causes timeout — use small n only
        return [[1], [2], [3], [4], [5], [10]]

    if 'minesweeper' in slug:
        # (char[][] board, number[] click) — board uses 'M'/'E'/'B' chars
        return [
            [[["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], [3, 0]],
            [[["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]], [1, 2]],
            [[["M"]], [0, 0]],
            [[["E"]], [0, 0]],
            [[["E","E"],["E","M"]], [0, 0]],
        ]

    if 'minimum-time-difference' in slug:
        # (string[] timePoints) — expects "HH:MM" formatted strings
        return [
            [["23:59", "00:00"]],
            [["00:00", "23:59", "00:00"]],
            [["12:00", "00:00"]],
            [["01:00", "00:00", "12:00"]],
            [["00:00", "04:00", "22:00"]],
            [["00:00"]],
        ]

    if 'minimum-unique-word-abbreviation' in slug:
        return [
            ["apple", ["blade"]],
            ["apple", ["apple"]],
            ["apple", []],
            ["a", ["a"]],
            ["abcdef", ["abcdef", "abcfeg"]],
        ]

    if 'reverse-string-ii' in slug:
        # reverseStr(s, k) — reverse first k chars every 2k window
        return [
            ["abcdefg", 2],
            ["abcd", 2],
            ["", 1],
            ["a", 1],
            ["abcde", 3],
            ["abcdefghij", 5],
        ]

    if 'reverse-words-in-a-string-iii' in slug:
        # multi-word sentences for "reverse each word" function
        return [
            ["Let's take LeetCode contest"],
            ["God Ding"],
            ["hello world"],
            ["a"],
            [""],
            ["  leading spaces"],
        ]

    if 'different-ways-to-add-parentheses' in slug:
        return [["2-1-1"], ["2*3-4*5"], ["1"], ["1+2"], ["1*2*3"]]

    if 'strobogrammatic-number-ii' in slug:
        return [[1], [2], [3], [4]]

    if 'meeting-rooms-ii' in slug:
        return [
            [[[0, 30], [5, 10], [15, 20]]],
            [[[7, 10], [2, 4]]],
            [[[1, 2], [2, 3], [3, 4]]],
            [[]],
        ]

    if 'shortest-word-distance' in slug and 'ii' not in slug:
        return [
            [["practice", "makes", "perfect", "coding", "makes"],
             "coding", "practice"],
            [["practice", "makes", "perfect", "coding", "makes"],
             "makes", "coding"],
            [["a", "b"], "a", "b"],
        ]

    if 'shortest-word-distance-iii' in slug:
        return [
            [["practice", "makes", "perfect", "coding", "makes"],
             "makes", "makes"],
            [["practice", "makes", "perfect", "coding", "makes"],
             "coding", "practice"],
        ]

    if 'magical-string' in slug:
        return [[1], [3], [5], [6], [8], [10], [20]]

    if 'construct-the-rectangle' in slug:
        # area must be a positive integer; oracle returns NaN for ≤0
        return [[4], [6], [12], [24], [25], [100]]

    if 'next-greater-element-i' in slug:
        # nums1 must be a strict subset of nums2 (per problem constraints)
        return [
            [[4, 1, 2], [1, 3, 4, 2]],
            [[2, 4], [1, 2, 3, 4]],
            [[1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]],
            [[1], [1, 3, 5]],
            [[1], [1]],
            [[], [1, 2, 3]],
        ]

    if 'the-maze-iii' in slug:
        # (maze: number[][], ball: number[], hole: number[])
        return [
            [[[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], [4,3], [0,1]],
            [[[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], [4,3], [3,0]],
            [[[0,0,0],[0,0,0],[0,0,0]], [0,0], [2,2]],
            [[[0,0],[0,0]], [0,0], [1,1]],
        ]

    if 'the-maze' in slug:
        # (maze: number[][], start: number[], destination: number[])
        return [
            [[[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0,4], [4,4]],
            [[[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0,4], [3,2]],
            [[[0,0,0],[0,0,0],[0,0,0]], [0,0], [2,2]],
            [[[0,0],[0,0]], [0,0], [1,1]],
        ]

    if 'happy-number' in slug:
        return [[1], [2], [7], [19], [20], [11], [4]]

    if '01-matrix' in slug:
        # matrix must contain at least one 0; all-nonzero matrices produce Infinity
        return [
            [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]],
            [[[0, 0, 0], [0, 1, 0], [1, 1, 1]]],
            [[[0]]],
            [[[1, 0], [0, 1]]],
            [[[0, 1, 0, 1, 1]]],
            [[[1, 1], [1, 0]]],
        ]

    if 'output-contest-matches' in slug:
        # n must be a power of 2 (contest bracket structure)
        return [[2], [4], [8], [16]]

    if 'student-attendance-record-ii' in slug:
        # n=1534236469 causes OOM; use small n only
        return [[0], [1], [2], [3], [5], [10]]

    if 'fibonacci-number' in slug:
        # fib(1534236469) iterates ~1.5B times → timeout; use small n only
        return [[0], [1], [2], [5], [10], [20], [30]]

    if '4-keys-keyboard' in slug:
        # maxA(n): dp allocates n+1 array → OOM for large n
        return [[1], [2], [3], [6], [7], [10]]

    if 'replace-words' in slug:
        # (dict: string[], sentence: string) — dict has root words to replace successors
        return [
            [["cat", "bat", "rat"], "the cattle was rattled by the battery"],
            [["a", "aa", "aaa", "aaaa"], "a aa aaa aaaa"],
            [["cat"], "catt catss cats"],
            [["c"], "cat"],
            [[], "hello world"],
            [["hello"], "hello world"],
        ]

    if 'count-primes' in slug:
        return [[0], [1], [2], [10], [100], [1000]]

    if 'ugly-number-ii' in slug or 'perfect-squares' in slug:
        return [[1], [2], [3], [4], [10], [12]]

    if 'kth-largest' in slug:
        return [
            [[3, 2, 1, 5, 6, 4], 2],
            [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4],
            [[1], 1],
            [[1, 2], 1],
            [[1, 2], 2],
            [[5, 3, 1, 2, 4], 3],
        ]

    if 'word-search-ii' in slug:
        return [
            [[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
             ["oath","pea","eat","rain"]],
            [[["a","b"],["c","d"]], ["abdc","abcd"]],
        ]

    if 'minimum-height-trees' in slug:
        return [
            [4, [[1, 0], [1, 2], [1, 3]]],
            [6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]],
            [1, []],
            [2, [[0, 1]]],
            [3, [[1, 0], [1, 2]]],
        ]

    if 'create-maximum-number' in slug:
        return [
            [[3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5],
            [[6, 7], [6, 0, 4], 5],
            [[3, 9], [8, 9], 3],
            [[2, 1], [9, 3, 1, 8, 2, 8, 8], 3],
            [[], [1, 2, 3], 2],
            [[1], [], 1],
        ]

    if 'counting-bits' in slug:
        return [[0], [1], [2], [5], [10], [16]]

    if 'sort-transformed-array' in slug:
        return [
            [[-4, -2, 2, 4], 1, 3, 5],
            [[-4, -2, 2, 4], -1, 3, 5],
            [[0], 1, 0, 0],
            [[-1, 0, 1], 2, -3, 2],
            [[-3, -2, -1, 0, 1], 0, 1, -1],
        ]

    if 'range-addition-ii' in slug:
        # (m: number, n: number, ops: number[][]) — count max elements after ops
        return [
            [3, 3, [[2, 2], [3, 3]]],
            [3, 3, []],
            [2, 2, [[1, 1], [2, 2], [1, 2]]],
            [1, 1, [[1, 1]]],
            [5, 4, [[2, 3], [3, 2], [4, 1]]],
        ]

    if 'range-addition' in slug:
        return [
            [5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]],
            [3, [[0, 2, 1]]],
            [1, []],
            [4, [[0, 3, 5], [1, 2, -1]]],
        ]

    if 'find-k-pairs-with-smallest-sums' in slug:
        return [
            [[1, 7, 11], [2, 4, 6], 3],
            [[1, 1, 2], [1, 2, 3], 2],
            [[1, 2], [3], 3],
            [[1, 2, 3], [4, 5, 6], 1],
            [[1], [1, 2], 2],
        ]

    if 'guess-number-higher-or-lower-ii' in slug:
        return [[1], [2], [3], [4], [5], [10]]

    if 'water-and-jug' in slug:
        return [[3, 5, 4], [2, 6, 5], [1, 2, 3], [3, 5, 3], [0, 0, 0], [2, 4, 3]]

    if 'lexicographical-numbers' in slug:
        return [[1], [2], [10], [13], [100], [20]]

    if 'kill-process' in slug:
        # (pid: number[], ppid: number[], kill: number)
        return [
            [[1, 3, 10, 5], [3, 0, 5, 3], 5],
            [[1, 2, 3], [0, 1, 2], 1],
            [[1, 2, 3], [0, 1, 2], 2],
            [[1], [0], 1],
            [[1, 2, 3, 4], [0, 1, 1, 2], 3],
        ]

    if 'fraction-addition-and-subtraction' in slug:
        return [
            ["-1/2+1/2"],
            ["-1/2+1/2+(-1/3)"],
            ["1/3-1/2"],
            ["5/3+1/3"],
            ["1/4+2/4"],
            ["1/2-1/4"],
        ]

    if 'valid-square' in slug:
        # 4 points each as [x, y]
        return [
            [[0,0], [1,1], [1,0], [0,1]],
            [[0,0], [1,1], [1,0], [0,12]],
            [[1,0], [-1,0], [0,1], [0,-1]],
            [[0,0], [0,0], [0,0], [0,0]],
            [[1,0], [0,1], [-1,0], [0,-1]],
            [[0,0], [2,0], [2,2], [0,2]],
        ]

    if 'minimum-index-sum-of-two-lists' in slug:
        # Two lists with overlapping restaurants; find min index sum common ones
        return [
            [["Shogun","Tapioca Express","Burger King","KFC"],
             ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]],
            [["Shogun","Tapioca Express","Burger King","KFC"],
             ["KFC","Shogun","Burger King"]],
            [["happy","sad","good"], ["sad","happy","good"]],
            [["a"], ["a"]],
            [["a","b","c"], ["c","b","a"]],
        ]

    if 'redundant-connection' in slug and '-ii' not in slug:
        # edges: number[][], each [ai, bi] 1-indexed; must form a tree + exactly 1 redundant edge
        return [
            [[[1, 2], [1, 3], [2, 3]]],
            [[[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]],
            [[[1, 2], [2, 3], [1, 3]]],
            [[[1, 2], [1, 3], [2, 4], [3, 4], [4, 5]]],
            [[[1, 2], [2, 3], [3, 1]]],
        ]

    if 'knight-probability-in-chessboard' in slug:
        # (n: number, k: number, row: number, column: number)
        return [
            [3, 2, 0, 0],
            [3, 0, 0, 0],
            [8, 1, 0, 0],
            [5, 3, 2, 2],
            [3, 1, 0, 0],
            [1, 0, 0, 0],
        ]

    if 'employee-importance' in slug:
        # (employees: {id, importance, subordinates}[], id: number)
        return [
            [[{"id": 1, "importance": 5, "subordinates": [2, 3]},
              {"id": 2, "importance": 3, "subordinates": []},
              {"id": 3, "importance": 3, "subordinates": []}], 1],
            [[{"id": 1, "importance": 5, "subordinates": [2, 3]},
              {"id": 2, "importance": 3, "subordinates": []},
              {"id": 3, "importance": 3, "subordinates": []}], 2],
            [[{"id": 1, "importance": 2, "subordinates": [2]},
              {"id": 2, "importance": 3, "subordinates": []}], 1],
            [[{"id": 1, "importance": 5, "subordinates": []}], 1],
            [[{"id": 2, "importance": 11, "subordinates": [5]},
              {"id": 5, "importance": -3, "subordinates": []}], 5],
        ]

    if 'falling-squares' in slug:
        # positions: number[][], each [left, sideLength] — 2-element arrays
        return [
            [[[1, 2], [2, 3], [6, 1]]],
            [[[100, 100], [200, 100]]],
            [[[1, 5], [2, 2], [7, 5]]],
            [[[1, 1]]],
            [[[1, 2], [3, 1]]],
            [[[2, 3], [2, 3], [2, 3]]],
        ]

    if 'evaluate-division' in slug:
        return [
            [[["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]],
            [[["a","b"]], [0.5], [["a","b"],["b","a"],["a","c"],["x","y"]]],
        ]

    if 'task-scheduler' in slug:
        # (tasks: character[], n: number) — tasks are uppercase letters, n is cooldown
        return [
            [["A","A","A","B","B","B"], 2],
            [["A","A","A","B","B","B"], 0],
            [["A","A","A","A","A","A","B","C","D","E","F","G"], 2],
            [["A","A","A","B","B","B","C","C","C"], 3],
            [["A"], 0],
            [["A","A","B","B"], 2],
        ]

    if 'exclusive-time-of-functions' in slug:
        # (n: number, logs: string[]) — logs formatted as "fnId:start|end:timestamp"
        return [
            [2, ["0:start:0","1:start:2","1:end:5","0:end:6"]],
            [1, ["0:start:0","0:start:2","0:end:5","0:end:7"]],
            [2, ["0:start:0","0:end:0","1:start:1","1:end:1"]],
            [1, ["0:start:0","0:end:0"]],
            [2, ["0:start:0","1:start:2","1:end:3","0:end:4"]],
        ]

    if 'shopping-offers' in slug:
        # (price: number[], special: number[][], needs: number[])
        return [
            [[2,5], [[3,0,5],[1,2,10]], [3,2]],
            [[2,3,4], [[1,1,0,4],[2,2,1,9]], [1,2,1]],
            [[2,5], [], [3,2]],
            [[1,1], [[1,1,1]], [2,2]],
            [[2,5], [[3,0,5],[1,2,10]], [0,0]],
        ]

    if 'solve-the-equation' in slug:
        # (equation: string) — format "lhs=rhs", x+constant terms
        return [
            ["x+5-3+x=6+x-2"],
            ["x=x"],
            ["2x=x"],
            ["0x=0"],
            ["x+1=2"],
            ["2x+1=3"],
        ]

    if 'maximum-average-subarray-i' in slug:
        # (nums: number[], k: number) — k must be ≥1 and ≤len(nums)
        return [
            [[1,12,-5,-6,50,3], 4],
            [[5], 1],
            [[1,2,3,4,5], 2],
            [[0,4,0,3,2], 1],
            [[-1,-2,-3,-4,-5], 3],
            [[1,1,1,1,1,1], 3],
        ]

    if any(kw in slug for kw in ('course-schedule', 'graph-valid-tree',
                                   'connected-components')):
        return [
            [2, [[1, 0]]],
            [2, [[1, 0], [0, 1]]],
            [3, [[1, 0], [2, 1]]],
            [1, []],
            [4, [[1, 0], [2, 0], [3, 1], [3, 2]]],
        ]

    if 'number-of-islands-ii' in slug:
        return [
            [3, 3, [[0, 0], [0, 1], [1, 2], [2, 1]]],
            [1, 1, [[0, 0]]],
            [2, 2, [[0, 0], [1, 1], [0, 1]]],
        ]

    if 'smallest-rectangle' in slug:
        return [
            [[["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], 0, 2],
            [[["1"]], 0, 0],
        ]

    if 'sparse-matrix' in slug:
        return [
            [[[1, 0, 0], [-1, 0, 3]], [[7, 0, 0], [0, 0, 0], [0, 0, 1]]],
            [[[0]], [[0]]],
            [[[1, 2], [3, 4]], [[5, 6], [7, 8]]],
        ]

    if 'skyline' in slug:
        return [
            [[[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]],
            [[[0, 2, 3], [2, 5, 3]]],
            [[[1, 5, 3]]],
            [[]],
            [[[1, 2, 1], [3, 4, 2], [5, 6, 3]]],
        ]

    if 'sequence-reconstruction' in slug:
        return [
            [[1,2,3], [[1,2],[1,3],[2,3]]],
            [[4,1,5,2,6,3], [[5,2,6,3],[4,1,5,2]]],
            [[1], [[1],[1]]],
            [[1,2,3], [[1,2],[1,3]]],
            [[1,2], [[1,2]]],
            [[1,2,3,4,5], [[1,2],[2,3],[3,4],[4,5]]],
        ]

    if '4sum-ii' in slug:
        return [
            [[1,2], [-2,-1], [-1,2], [0,2]],
            [[0], [0], [0], [0]],
            [[], [], [], []],
            [[1,-1], [-1,1], [0,0], [0,0]],
            [[-1,-1], [1,1], [0,0], [0,0]],
            [[1,2,3], [-1,-2,-3], [0,1,2], [-2,-1,0]],
        ]

    if 'can-i-win' in slug:
        # maxChoosableInteger must be small (large values → 2^n bitmask states → OOM/timeout)
        return [[10, 11], [10, 0], [2, 3], [5, 10], [1, 1], [3, 5]]

    if 'count-the-repetitions' in slug:
        # (s1, n1, s2, n2) — string, number, string, number
        return [
            ["acb", 4, "ab", 2],
            ["a", 1, "b", 1],
            ["abc", 3, "abc", 1],
            ["aaa", 3, "aa", 1],
            ["a", 2, "a", 2],
        ]

    if 'ones-and-zeroes' in slug:
        # (strs: string[], m: number, n: number)
        return [
            [["10","0001","111001","1","0"], 5, 3],
            [["10","0","1"], 1, 1],
            [[], 3, 3],
            [["0","1","10"], 2, 2],
            [["111","100","0"], 3, 3],
        ]

    if 'maximal-square' in slug:
        return [
            [[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]],
            [[["0"]]],
            [[["1"]]],
            [[["0","1"],["1","0"]]],
            [[["1","1","1"],["1","1","1"],["1","1","1"]]],
        ]

    if 'rectangle-area' in slug:
        return [
            [-3, 0, 3, 4, 0, -1, 9, 2],
            [-2, -2, 2, 2, -2, -2, 2, 2],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [-1000000000, -1000000000, 0, 0, 0, 0, 1000000000, 1000000000],
        ]

    if 'generate-parentheses' in slug:
        return [[1], [2], [3], [4], [0]]

    if 'count-and-say' in slug:
        return [[1], [2], [3], [4], [5], [6]]

    if 'add-binary' in slug:
        return [
            ["11", "1"],
            ["1010", "1011"],
            ["0", "0"],
            ["1", "1"],
            ["1111", "1111"],
            ["0", "1"],
        ]

    if 'combinations' in slug and 'combination-sum' not in slug:
        return [[4, 2], [1, 1], [5, 3], [3, 1], [2, 2], [0, 0]]

    if 'n-queens' in slug:
        return [[1], [4], [5], [6]]

    if 'unique-binary-search-trees-ii' in slug:
        return [[1], [2], [3], [4]]

    if 'pascals-triangle' in slug:
        return [[1], [2], [3], [4], [5], [0]]

    if 'spiral-matrix-ii' in slug:
        return [[1], [2], [3], [4], [5]]

    if 'multiply-strings' in slug:
        return [
            ["2", "3"],
            ["123", "456"],
            ["0", "0"],
            ["999", "999"],
            ["0", "1"],
            ["1", "1"],
        ]

    if 'insert-interval' in slug:
        return [
            [[[1, 3], [6, 9]], [2, 5]],
            [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]],
            [[], [5, 7]],
            [[[1, 5]], [2, 3]],
            [[[1, 5]], [6, 8]],
        ]

    if 'roman' in slug:
        romans = ["III", "LVIII", "MCMXCIV", "IV", "IX", "I", "XLII"]
        if 'integer-to-roman' in slug:
            return [[3], [58], [1994], [4], [9], [1], [42]]
        # roman-to-integer
        return [[r] for r in romans]

    if 'longest-common-prefix' in slug or 'common-prefix' in slug:
        return [
            [["flower", "flow", "flight"]],
            [["dog", "racecar", "car"]],
            [["a"]],
            [[""]],
            [[]],
            [["ab", "a"]],
        ]

    # ── (number, number[]) – e.g. best-time-to-buy-and-sell-stock-iv (k, prices) ──
    if (len(types) == 2
            and types[0] in ('number', 'integer', 'int')
            and types[1] == 'number[]'):
        return [
            [2, [3, 2, 6, 5, 0, 3]],
            [2, [2, 1]],
            [0, [3, 2, 6]],
            [1, [1, 2, 3]],
            [3, [1, 2, 3, 4, 5]],
            [1, [7, 6, 4, 3, 1]],
        ]

    # ── (number[], number) – two-sum / target-based ──
    # Use exact suffix match to distinguish number[] from number
    if (len(types) == 2
            and types[0] == 'number[]'
            and types[1] in ('number', 'integer', 'int')):
        return [
            [[2, 7, 11, 15], 9],
            [[3, 2, 4], 6],
            [[3, 3], 6],
            [[-1, -2, -3, -4, -5], -8],
            [[1, 2], 3],
            [[0, 4, 3, 0], 0],
        ]

    # ── two number arrays ──
    if len(types) == 2 and types[0] == 'number[]' and types[1] == 'number[]':
        return [
            [[1, 2, 3], [4, 5, 6]],
            [[1], [1]],
            [[1, 3], [2]],
            [[1, 2], [3, 4]],
        ]

    # ── string[] (array of strings) ──
    if first == 'string[]':
        if len(types) == 1:
            return [
                [["flower", "flow", "flight"]],
                [["a", "b", "c"]],
                [[]],
                [[""]],
                [["ab", "a", "abc"]],
            ]

    # ── single plain string ──
    if first == 'string' and len(types) == 1:
        return [["abcabcbb"], ["bbbbb"], ["pwwkew"], [""], [" "], ["a"], ["aaaaaa"]]

    if first == 'string' and len(types) == 2 and types[1] == 'string':
        return [["ADOBECODEBANC", "ABC"], ["a", "a"], ["a", "aa"], ["", "A"]]

    if first == 'string' and len(types) == 3 and types[1] == 'string' and types[2] == 'string':
        return [
            ["aabcc", "dbbca", "aadbbcbcac"],
            ["aabcc", "dbbca", "aadbbbaccc"],
            ["", "", ""],
            ["a", "", "a"],
            ["", "a", "a"],
            ["abc", "def", "adbcef"],
        ]

    if first == 'string' and len(types) == 2 and types[1] in ('number', 'integer'):
        return [["abcdef", 2], ["", 1], ["a", 1], ["abba", 3], ["  hello  ", 2]]

    # ── single integer ──
    if len(types) == 1 and first in ('number', 'integer', 'int'):
        return [[121], [-121], [10], [0], [-1], [1534236469]]

    # ── single number array ──
    if len(types) == 1 and first == 'number[]':
        return [[[1, 2, 3, 4, 5]], [[]], [[1]], [[1, 1]], [[3, 1, 4, 1, 5]], [[-1, 0, 1]]]

    # ── two integers ──
    if len(types) == 2 and all(t in ('number', 'integer', 'int') for t in types[:2]):
        return [[1, 1], [0, 0], [3, 7], [100, 1000]]

    # ── two plain strings ──
    if len(types) == 2 and types[0] == 'string' and types[1] == 'string':
        return [["horse", "ros"], ["intention", "execution"], ["", ""], ["a", ""]]

    # ── string + number (indexed access) ──
    if first == 'string' and len(types) > 1 and types[1] in ('number', 'integer'):
        return [["abcdef", 2], ["", 1], ["a", 1], ["abba", 3]]

    # ── flood-fill: (number[][], number, number, number) = image + sr + sc + newColor ──
    if 'flood-fill' in slug:
        return [
            [[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2],
            [[[0,0,0],[0,0,0],[0,0,0]], 0, 0, 2],
            [[[1]], 0, 0, 5],
            [[[1,1,1],[1,1,1],[1,1,1]], 1, 1, 2],
            [[[0,0,0],[0,1,0],[0,0,0]], 1, 1, 1],
        ]

    # ── sentence-similarity / sentence-similarity-ii: (string[], string[], string[][]) ──
    if 'sentence-similarity' in slug:
        return [
            [["great","acting","skill"], ["fine","drama","talent"], [["great","fine"],["drama","acting"],["skill","talent"]]],
            [["I","love","leetcode"], ["I","love","leetcode"], []],
            [["a"], ["b"], [["a","b"]]],
            [[], [], []],
            [["hello"], ["world"], []],
            [["x","y"], ["x","z"], [["y","z"]]],
        ]

    # ── (number[][], number) ──
    if len(types) == 2 and types[0] in ('number[][]', 'integer[][]'):
        return [[[[1, 2, 3], [4, 5, 6]], 2], [[[1, 2], [3, 4]], 5], [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15]]

    # ── number[][] ──
    if len(types) == 1 and first in ('number[][]', 'integer[][]'):
        return [[[[1, 2], [3, 4]]], [[[1]]], [[[]]], [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]]]

    # fallback: try single number array
    return [[[1, 2, 3]], [[]], [[0]], [[-1, 0, 1]]]

def _build_linked_list_inputs(problem, param_types):
    slug          = problem.get('slug', '')
    # ListNode[] means an array of linked list heads (e.g. merge-k-sorted-lists)
    list_of_lists = any(pt.strip() == 'ListNode[]' for pt, _ in param_types)
    list_ct       = sum(1 for pt, _ in param_types if 'ListNode' in pt)
    non_list      = [(pt, pn) for pt, pn in param_types if 'ListNode' not in pt]

    if list_of_lists:
        # Each input arg is an array-of-arrays; oracle_run maps each sub-array → arrayToList
        bases = [
            [[[1, 4, 5], [1, 3, 4], [2, 6]]],
            [[[], [], []]],
            [[[1], [2], [3]]],
            [[[1, 2], [3, 4], [5]]],
            [[[-1, 0], [1, 2]]],
            [[[]]],
        ]
    elif list_ct >= 2:
        bases = [
            [[2, 4, 3], [5, 6, 4]],
            [[0], [0]],
            [[9, 9, 9], [1]],
            [[1, 2, 3], [4, 5, 6]],
            [[], [1, 2]],
            [[1], [9, 9]],
        ]
    else:
        bases = [
            [[1, 2, 3, 4, 5]],
            [[1]],
            [[]],
            [[1, 1, 2]],
            [[1, 2]],
            [[1, 1, 1, 1]],
        ]

    if non_list:
        extras = _default_extra_args(slug, non_list)
        return [b + extras for b in bases]
    return bases

def _default_extra_args(slug, non_list_params):
    extras = []
    for pt, pn in non_list_params:
        if 'number' in pt and '[]' not in pt:
            extras.append(2 if pn in ('n', 'k', 'val', 'x') else 1)
        else:
            extras.append(0)
    return extras

def _build_tree_inputs(problem, param_types):
    slug     = problem.get('slug', '')
    tree_ct  = sum(1 for pt, _ in param_types if 'TreeNode' in pt)
    non_tree = [(pt, pn) for pt, pn in param_types if 'TreeNode' not in pt]

    if tree_ct >= 2:
        bases = [
            [[1, 2, 3], [1, 2, 3]],
            [[1], [1]],
            [[], []],
            [[1, 2], [1, None, 2]],
        ]
    else:
        bases = [
            [[3, 9, 20, None, None, 15, 7]],
            [[1]],
            [[]],
            [[1, 2, 3, 4, 5]],
            [[1, None, 2, 3]],
            [[1, 2]],
        ]

    if non_tree:
        extras = _default_extra_args(slug, non_tree)
        return [b + extras for b in bases]
    return bases

def _build_graph_inputs():
    return [
        [[[2, 4], [1, 3], [2, 4], [1, 3]]],
        [[[]]],
        [[[2], [1]]],
        [[[2, 3], [1, 3], [1, 2]]],
    ]

def _build_nary_tree_inputs(problem, param_types):
    # N-ary tree: level-order with null separators between children groups
    # [root, null, child1, child2, ..., null, grandchild1, ...]
    bases = [
        [[1, None, 3, 2, 4, None, 5, 6]],   # root with 3 children; 2 grandchildren
        [[1, None, 3, 2]],                   # root with 2 children
        [[1]],                               # single node
        [[]],                                # null root
        [[1, None, 2]],                      # single child
        [[1, None, 1, 1, 1]],               # repetitive values
    ]
    non_nary = [(pt, pn) for pt, pn in param_types if '_Node' not in pt]
    if non_nary:
        extras = _default_extra_args(problem.get('slug', ''), non_nary)
        return [b + extras for b in bases]
    return bases

def _build_in_place_inputs(problem, param_types):
    slug = problem.get('slug', '')
    if 'remove-element' in slug:
        return [
            [[3, 2, 2, 3], 3],
            [[0, 1, 2, 2, 3, 0, 4, 2], 2],
            [[], 3],
            [[1], 1],
            [[1], 2],
            [[1, 1, 1], 1],
        ]
    if 'remove-duplicates' in slug:
        return [
            [[1, 1, 2]],
            [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]],
            [[]],
            [[1]],
            [[1, 1, 1, 1]],
        ]
    if 'rotate' in slug:
        return [
            [[1, 2, 3, 4, 5, 6, 7], 3],
            [[-1, -100, 3, 99], 2],
            [[1], 0],
            [[1, 2], 3],
        ]
    if 'move-zeroes' in slug:
        return [
            [[0, 1, 0, 3, 12]],
            [[0]],
            [[1]],
            [[0, 0, 1]],
        ]
    if 'next-permutation' in slug:
        return [
            [[1, 2, 3]],
            [[3, 2, 1]],
            [[1, 1, 5]],
            [[1]],
            [[1, 2]],
            [[2, 3, 1]],
        ]
    if 'merge-sorted-array' in slug:
        return [
            [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
            [[1], 1, [], 0],
            [[0], 0, [1], 1],
            [[2, 0], 1, [1], 1],
            [[1, 2, 0, 0, 0], 2, [3, 4, 5], 3],
        ]
    if 'sort-colors' in slug:
        return [
            [[2, 0, 2, 1, 1, 0]],
            [[2, 0, 1]],
            [[0]],
            [[1]],
            [[2, 2, 2]],
        ]
    if 'reverse-words-in-a-string-ii' in slug:
        return [
            [["t", "h", "e", " ", "s", "k", "y"]],
            [["a", " ", "b"]],
            [["a"]],
            [["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]],
        ]
    if 'reverse-string' in slug:
        return [
            [["h", "e", "l", "l", "o"]],
            [["H", "a", "n", "n", "a", "h"]],
            [["a"]],
            [[]],
            [["a", "b"]],
        ]
    if 'wiggle-sort' in slug:
        return [
            [[3, 5, 2, 1, 6, 4]],
            [[1, 1, 2, 2, 3, 3]],
            [[1]],
            [[2, 1]],
            [[1, 2, 3, 4, 5]],
        ]
    INF = 2147483647
    if 'walls-and-gates' in slug:
        return [
            [[[INF, -1, 0, INF], [INF, INF, INF, -1], [INF, -1, INF, -1], [0, -1, INF, INF]]],
            [[[0, -1], [INF, INF]]],
            [[[INF]]],
            [[[0]]],
        ]
    if 'game-of-life' in slug:
        return [
            [[[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]],
            [[[1, 1], [1, 0]]],
            [[[0]]],
            [[[1]]],
        ]
    # generic fallback
    if len(param_types) >= 2:
        return [[[1, 2, 3, 4, 5], 2], [[1], 1], [[], 0]]
    return [[[1, 2, 3, 4, 5]], [[]], [[1]]]

def _build_design_inputs(problem, class_methods):
    fn_name = problem.get('oracleFnName', '')
    slug    = problem.get('slug', '')
    method_names = [m for m, _ in class_methods]

    # AutocompleteSystem (sentences[], times[], input(char))
    if 'autocomplete' in slug.lower() or ('input' in method_names and 'insert' in method_names and 'search' in method_names and 'sum' not in method_names and 'get' not in method_names):
        return [
            [[fn_name, ['i love you', 'island', 'iroman'], [5, 3, 2]],
             ['input', 'i'], ['input', ' '], ['input', '#'],
             ['input', 'i'], ['input', ' '], ['input', 'a']],
            [[fn_name, ['abc', 'abcd', 'ab'], [2, 1, 3]],
             ['input', 'a'], ['input', 'b'], ['input', 'c'], ['input', '#'],
             ['input', 'a'], ['input', 'b']],
            [[fn_name, [], []],
             ['input', 'a'], ['input', 'b'], ['input', '#'],
             ['input', 'a']],
        ]

    # FileSystem / design-in-memory-file-system
    if 'ls' in method_names and 'mkdir' in method_names:
        return [
            [[fn_name],
             ['mkdir', '/a/b/c'],
             ['ls', '/'],
             ['ls', '/a/b'],
             ['mkdir', '/a/b/d'],
             ['ls', '/a/b']],
            [[fn_name],
             ['addContentToFile', '/file.txt', 'hello'],
             ['readContentFromFile', '/file.txt'],
             ['addContentToFile', '/file.txt', ' world'],
             ['readContentFromFile', '/file.txt'],
             ['ls', '/']],
            [[fn_name],
             ['mkdir', '/a'],
             ['mkdir', '/a/b'],
             ['addContentToFile', '/a/b/c', 'content'],
             ['ls', '/a/b'],
             ['readContentFromFile', '/a/b/c']],
        ]

    # NumArray / range-sum-query
    if 'sumRange' in method_names:
        if 'update' in method_names:
            # Mutable version
            return [
                [[fn_name, [1, 3, 5, 7, 9, 11]],
                 ['sumRange', 0, 2], ['update', 1, 2], ['sumRange', 0, 2]],
                [[fn_name, [1, 2, 3, 4, 5]],
                 ['sumRange', 0, 4], ['update', 2, 10], ['sumRange', 0, 4]],
            ]
        else:
            # Immutable version
            return [
                [[fn_name, [-2, 0, 3, -5, 2, -1]],
                 ['sumRange', 0, 2], ['sumRange', 2, 5], ['sumRange', 0, 5]],
                [[fn_name, [1, 2, 3]], ['sumRange', 0, 0], ['sumRange', 1, 2]],
            ]

    # NumMatrix / range-sum-query-2d
    if 'sumRegion' in method_names:
        if 'update' in method_names:
            return [
                [[fn_name, [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]],
                 ['sumRegion', 2, 1, 4, 3], ['update', 3, 2, 2], ['sumRegion', 2, 1, 4, 3]],
            ]
        else:
            return [
                [[fn_name, [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]],
                 ['sumRegion', 2, 1, 4, 3], ['sumRegion', 1, 1, 2, 2], ['sumRegion', 1, 2, 2, 4]],
            ]

    # MedianFinder
    if 'addNum' in method_names and 'findMedian' in method_names:
        return [
            [[fn_name],
             ['addNum', 1], ['addNum', 2], ['findMedian'],
             ['addNum', 3], ['findMedian']],
            [[fn_name],
             ['addNum', 6], ['findMedian'],
             ['addNum', 10], ['findMedian'],
             ['addNum', 2], ['findMedian']],
            [[fn_name], ['addNum', 1], ['findMedian']],
        ]

    # ValidWordAbbr / unique-word-abbreviation
    if 'isUnique' in method_names:
        words = ["deer", "door", "cake", "card"]
        return [
            [[fn_name, words],
             ['isUnique', 'dear'],
             ['isUnique', 'cart'],
             ['isUnique', 'cane'],
             ['isUnique', 'make']],
            [[fn_name, []],
             ['isUnique', 'a'],
             ['isUnique', 'ab']],
        ]

    # MinStack (must have getMin)
    if 'getMin' in method_names:
        seqs = [
            [[fn_name], ['push', -2], ['push', 0], ['push', -3],
             ['getMin'], ['pop'], ['top'], ['getMin']],
            [[fn_name], ['push', 1], ['push', 2], ['top'], ['getMin'], ['pop']],
            [[fn_name], ['push', 0]],
        ]
        return seqs

    # MyStack (stack using queues): push, pop, top, empty
    if 'top' in method_names and 'empty' in method_names and 'push' in method_names:
        return [
            [[fn_name], ['push', 1], ['push', 2], ['top'], ['pop'], ['empty']],
            [[fn_name], ['push', 3], ['top'], ['pop'], ['empty']],
            [[fn_name], ['push', 1], ['push', 2], ['pop'], ['top']],
        ]

    # LogSystem (put + retrieve with timestamp strings)
    if 'put' in method_names and 'retrieve' in method_names:
        return [
            [[fn_name],
             ['put', 1, "2017:01:01:23:59:59"],
             ['put', 2, "2017:01:01:22:59:59"],
             ['put', 3, "2016:01:01:00:00:00"],
             ['retrieve', "2016:01:01:01:01:01", "2017:01:01:23:00:00", "Year"],
             ['retrieve', "2016:01:01:01:01:01", "2017:01:01:23:00:00", "Hour"],
             ['retrieve', "2017:01:01:00:00:00", "2017:01:01:23:59:00", "Second"]],
            [[fn_name],
             ['put', 1, "2017:01:01:00:00:00"],
             ['retrieve', "2017:01:01:00:00:00", "2017:01:01:00:00:00", "Second"],
             ['put', 2, "2017:01:01:00:00:01"],
             ['retrieve', "2017:01:01:00:00:00", "2017:01:01:00:00:01", "Minute"]],
            [[fn_name],
             ['put', 10, "2017:03:15:12:30:00"],
             ['retrieve', "2017:03:01:00:00:00", "2017:04:01:00:00:00", "Month"]],
        ]

    # LRU / cache-like
    if 'lru' in slug or 'cache' in slug or ('get' in method_names and 'put' in method_names):
        return [
            [[fn_name, 2], ['put', 1, 1], ['put', 2, 2],
             ['get', 1], ['put', 3, 3], ['get', 2],
             ['put', 4, 4], ['get', 1], ['get', 3], ['get', 4]],
            [[fn_name, 1], ['put', 2, 1], ['get', 2], ['put', 3, 2], ['get', 2], ['get', 3]],
        ]

    # MyQueue (queue using stacks): push, pop, peek, empty
    if 'peek' in method_names and 'empty' in method_names and 'push' in method_names:
        return [
            [[fn_name], ['push', 1], ['push', 2], ['peek'], ['pop'], ['empty']],
            [[fn_name], ['push', 3], ['peek'], ['pop'], ['empty']],
            [[fn_name], ['push', 1], ['push', 2], ['pop'], ['peek']],
        ]

    # Queue-like
    if any(m in method_names for m in ('enqueue', 'dequeue')):
        return [
            [[fn_name], ['push', 1], ['push', 2], ['push', 3], ['peek'], ['pop'], ['empty']],
            [[fn_name], ['push', 1], ['pop']],
        ]

    # WordDistance / shortest-word-distance-ii
    if 'shortest' in method_names:
        words = ["practice", "makes", "perfect", "coding", "makes"]
        return [
            [[fn_name, words],
             ['shortest', 'coding', 'practice'],
             ['shortest', 'makes', 'coding']],
            [[fn_name, ['a', 'b', 'c', 'a']],
             ['shortest', 'a', 'b'],
             ['shortest', 'a', 'c']],
        ]

    # Trie / word-dictionary style (insert/add + search + startsWith)
    if any(m in method_names for m in ('insert', 'addWord')) and 'search' in method_names:
        word_method = 'insert' if 'insert' in method_names else 'addWord'
        seqs = [
            [[fn_name],
             [word_method, 'apple'],
             ['search', 'apple'],
             ['search', 'app'],
             ['startsWith', 'app'] if 'startsWith' in method_names else ['search', 'apple'],
             [word_method, 'app'],
             ['search', 'app']],
            [[fn_name],
             [word_method, 'bad'],
             [word_method, 'dad'],
             [word_method, 'mad'],
             ['search', 'pad'],
             ['search', 'bad'],
             ['search', '.ad'] if 'startsWith' in method_names else ['search', 'bad']],
            [[fn_name],
             [word_method, 'a'],
             ['search', 'a'],
             ['search', 'b']],
        ]
        return seqs

    # ZigzagIterator (two-array constructor + next/hasNext)
    if 'zigzag' in slug.lower():
        return [
            [[fn_name, [1, 3, 5], [2, 4, 6]], ['hasNext'], ['next'], ['hasNext'], ['next'], ['hasNext'], ['next']],
            [[fn_name, [1], [2, 3]], ['next'], ['hasNext'], ['next'], ['next'], ['hasNext']],
            [[fn_name, [], [1, 2, 3]], ['next'], ['next'], ['next'], ['hasNext']],
        ]

    # BST Iterator (next / hasNext)
    if 'next' in method_names and 'hasNext' in method_names:
        return [
            [[fn_name, [4, 2, 7, 1, 3]], ['hasNext'], ['next'], ['hasNext'], ['next'], ['hasNext'], ['next']],
            [[fn_name, [3, 1, 2]], ['hasNext'], ['next'], ['next'], ['hasNext']],
            [[fn_name, [7]], ['hasNext'], ['next'], ['hasNext']],
        ]

    # Shuffle (reset + shuffle with array constructor)
    if 'shuffle' in method_names and 'reset' in method_names:
        return [
            [[fn_name, [1, 2, 3]], ['shuffle'], ['reset'], ['shuffle']],
            [[fn_name, [1, 2]], ['reset'], ['shuffle']],
        ]

    # Excel design (set + get + sum with char column args)
    if 'design-excel' in slug or ('set' in method_names and 'get' in method_names and 'sum' in method_names):
        return [
            [[fn_name, 3, 'C'],
             ['set', 1, 'A', 2], ['set', 2, 'B', 2],
             ['get', 1, 'A'],
             ['sum', 3, 'C', ['A1', 'A1:B2']],
             ['set', 2, 'B', 3],
             ['get', 3, 'C']],
            [[fn_name, 5, 'E'],
             ['set', 1, 'A', 5], ['set', 1, 'B', 4],
             ['get', 1, 'A'],
             ['sum', 2, 'A', ['A1']],
             ['get', 2, 'A']],
        ]

    # PhoneDirectory (get + check + release)
    if 'get' in method_names and 'check' in method_names and 'release' in method_names:
        return [
            [[fn_name, 3],
             ['get'], ['get'], ['check', 2], ['get'],
             ['release', 2], ['check', 2], ['get']],
        ]

    # LinkedListRandomNode / getRandom (ListNode constructor)
    if 'getRandom' in method_names and 'snake' not in slug.lower():
        return [
            [[fn_name, [1, 2, 3]], ['getRandom'], ['getRandom'], ['getRandom']],
            [[fn_name, [1]], ['getRandom']],
        ]

    # SnakeGame (width, height, food[][])
    if 'snake' in slug.lower() or 'move' in method_names:
        return [
            [[fn_name, 3, 2, [[1, 2], [0, 1]]],
             ['move', 'R'], ['move', 'D'], ['move', 'R'],
             ['move', 'U'], ['move', 'L'], ['move', 'U']],
        ]

    # MagicDictionary (buildDict(string[]) + search(string))
    if 'buildDict' in method_names:
        return [
            [[fn_name],
             ['buildDict', ['hello', 'leetcode']],
             ['search', 'hello'], ['search', 'hhllo'],
             ['search', 'hell'], ['search', 'leetcoded']],
            [[fn_name],
             ['buildDict', ['a', 'abc']],
             ['search', 'a'], ['search', 'b'],
             ['search', 'abc'], ['search', 'abd']],
            [[fn_name],
             ['buildDict', ['cat', 'car', 'bar']],
             ['search', 'cat'], ['search', 'bat'],
             ['search', 'cas']],
        ]

    # MapSum (insert(string, number) + sum(string prefix))
    if 'insert' in method_names and 'sum' in method_names and 'search' not in method_names:
        return [
            [[fn_name],
             ['insert', 'apple', 3], ['sum', 'ap'],
             ['insert', 'app', 2], ['sum', 'ap']],
            [[fn_name],
             ['insert', 'aa', 3], ['insert', 'aa', 2],
             ['sum', 'a']],
            [[fn_name],
             ['insert', 'abc', 1], ['insert', 'abd', 2], ['insert', 'bc', 5],
             ['sum', 'ab'], ['sum', 'b'], ['sum', 'z']],
        ]

    # Generic fallback: try up to 4 methods with dummy args
    seq = [[fn_name]]
    for method, params in class_methods[:4]:
        seq.append([method] + [1] * len(params))
    return [seq]

# ─────────────────────────────────────────────
# JS code generators
# ─────────────────────────────────────────────

def _js_arg(arg, ptype):
    """Convert a Python input value to its JS source representation."""
    if ptype and ptype.strip() == 'ListNode[]' and isinstance(arg, list):
        # array-of-lists: each sub-array becomes arrayToList(...)
        inner = ', '.join(f'arrayToList({json.dumps(a)})' for a in arg)
        return f'[{inner}]'
    if ptype and 'ListNode' in ptype and isinstance(arg, list):
        return f'arrayToList({json.dumps(arg)})'
    if ptype and ptype.strip() == 'TreeNode[]' and isinstance(arg, list):
        inner = ', '.join(f'arrayToTree({json.dumps(a)})' for a in arg)
        return f'[{inner}]'
    if ptype and 'TreeNode' in ptype and isinstance(arg, list):
        return f'arrayToTree({json.dumps(arg)})'
    if ptype and ('GraphNode' in ptype or ptype.strip() == 'Node') and isinstance(arg, list):
        return f'arrayToGraphNode({json.dumps(arg)})'
    if ptype and '_Node' in ptype and isinstance(arg, list):
        return f'arrayToNaryNode({json.dumps(arg)})'
    return json.dumps(arg)

def _padded_params(param_types):
    """Return param types padded to any length (returns None for missing positions)."""
    return param_types  # list of (ptype, pname) tuples

def render_it_block(fn_name, input_args, oracle_out, param_types, return_type,
                    input_category, tmpl, case_idx, slug=''):
    """Return the full `it(...)` block for one test case."""

    # ── design-class ──
    if input_category == 'design-class':
        return _render_design_it(fn_name, input_args, oracle_out, case_idx,
                                 ctor_param_types=param_types)

    threw = isinstance(oracle_out, dict) and oracle_out.get('threw')
    if threw:
        return None  # skip thrown cases

    output = oracle_out.get('output') if isinstance(oracle_out, dict) else oracle_out

    # Skip void-return pointer-tree/graph problems (in-place mutations we can't test as exact-equal)
    if output is None and input_category in ('pointer-tree', 'pointer-graph'):
        if not (return_type and any(t in return_type for t in ('ListNode', 'TreeNode', 'GraphNode'))):
            return None

    # Skip null/NaN outputs for non-pointer return types; asserting null is unreliable
    # (oracle may return NaN or undefined which serializes to null)
    if output is None and input_category not in ('pointer-linked-list', 'pointer-tree', 'pointer-graph'):
        is_pointer_ret = return_type and any(t in return_type for t in ('ListNode', 'TreeNode', 'GraphNode'))
        if not is_pointer_ret:
            return None

    # Build the JS call expression
    js_call_args = []
    for i, arg in enumerate(input_args):
        ptype = param_types[i][0] if i < len(param_types) else None
        js_call_args.append(_js_arg(arg, ptype))
    call = f'{fn_name}({", ".join(js_call_args)})'

    # ── in-place-mutation ──
    if input_category == 'in-place-mutation':
        first_arr      = input_args[0]
        rest_args      = input_args[1:]
        rest_js        = [json.dumps(a) for a in rest_args]
        rest_part      = (', ' + ', '.join(rest_js)) if rest_js else ''
        expected       = output.get('expectedElements', []) if isinstance(output, dict) else []
        return_void    = output.get('returnVoid', False) if isinstance(output, dict) else False
        idx_var        = f'_nums{case_idx}'
        k_var          = f'_k{case_idx}'
        ek_var         = f'_ek{case_idx}'
        desc           = f'{fn_name}({json.dumps(first_arr)}{rest_part})'
        if return_void:
            # void-return in-place (e.g. nextPermutation): assert full mutated array directly
            body = (
                f'    const {idx_var} = {json.dumps(first_arr)};\n'
                f'    {fn_name}({idx_var}{rest_part});\n'
                f'    expect({idx_var}).toEqual({json.dumps(expected)});'
            )
        else:
            # returns k: assert first k elements (sorted) match expected
            body = (
                f'    const {idx_var} = {json.dumps(first_arr)};\n'
                f'    const {k_var} = {fn_name}({idx_var}{rest_part});\n'
                f'    const {ek_var} = ({k_var} !== undefined && {k_var} !== null) ? {k_var} : {idx_var}.length;\n'
                f'    if ({ek_var} !== undefined) '
                f'expect({idx_var}.slice(0, {ek_var}).sort((a,b)=>a-b)).toEqual({json.dumps(expected)});'
            )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── pointer-graph (GraphNode/Node return) ──
    if return_type and (return_type.strip() in ('GraphNode', 'Node') or
                        'GraphNode' in return_type):
        desc = f'{fn_name}({", ".join(json.dumps(a) for a in input_args[:2])})'
        body = (
            f'    const result = {call};\n'
            f'    expect(graphToAdjList(result)).toEqual({json.dumps(output)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── TreeNode[] return ──
    if return_type and return_type.strip() == 'TreeNode[]':
        desc = f'{fn_name}({", ".join(json.dumps(a) for a in input_args[:2])})'
        body = (
            f'    const result = {call};\n'
            f'    expect(result.map(t => treeToArray(t))).toEqual({json.dumps(output)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── ListNode[] return (array of linked list heads) ──
    if return_type and return_type.strip() == 'ListNode[]':
        desc = f'{fn_name}({", ".join(json.dumps(a) for a in input_args[:2])})'
        body = (
            f'    const result = {call};\n'
            f'    expect(result.map(n => listToArray(n))).toEqual({json.dumps(output)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── pointer-nary-tree (plain number[] return, _Node input) ──
    if input_category == 'pointer-nary-tree':
        # N-ary tree functions return number[] — use exact-equal template
        desc = f'{fn_name}(arrayToNaryNode({json.dumps(input_args[0] if input_args else [])}))'
        call_args = []
        for i, arg in enumerate(input_args):
            ptype = param_types[i][0] if i < len(param_types) else None
            call_args.append(_js_arg(arg, ptype))
        body = (
            f'    const result = {fn_name}({", ".join(call_args)});\n'
            f'    expect(result).toEqual({json.dumps(output)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── pointer-linked-list (ListNode return) ──
    if return_type and 'ListNode' in return_type:
        desc = f'{fn_name}({", ".join(json.dumps(a) for a in input_args[:2])})'
        body = (
            f'    const result = {call};\n'
            f'    expect(listToArray(result)).toEqual({json.dumps(output)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── pointer-tree (TreeNode return) ──
    if return_type and 'TreeNode' in return_type:
        desc = f'{fn_name}({", ".join(json.dumps(a) for a in input_args[:2])})'
        body = (
            f'    const result = {call};\n'
            f'    expect(treeToArray(result)).toEqual({json.dumps(output)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── any-valid-pair-summing (two-sum family) ──
    if tmpl == 'any-valid-pair-summing':
        nums_arg   = input_args[0] if input_args else []
        target_arg = input_args[1] if len(input_args) > 1 else 0
        desc = f'{fn_name}({json.dumps(nums_arg)}, {json.dumps(target_arg)})'
        # two-sum-ii returns 1-indexed pairs; classic two-sum returns 0-indexed
        one_indexed = 'two-sum-ii' in slug or 'sorted-array' in slug
        if one_indexed:
            sum_expr = f'nums[result[0]-1] + nums[result[1]-1]'
        else:
            sum_expr = f'nums[result[0]] + nums[result[1]]'
        body = (
            f'    const result = {call};\n'
            f'    const nums = {json.dumps(nums_arg)};\n'
            f'    expect(result).toHaveLength(2);\n'
            f'    expect({sum_expr}).toBe({json.dumps(target_arg)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── sorted-output-invariant (combinations/subsets) ──
    if tmpl == 'sorted-output-invariant' and isinstance(output, list):
        desc = f'{fn_name}({", ".join(json.dumps(a) for a in input_args[:2])})'
        # Use compact separators to match JS JSON.stringify (no spaces); sort by ASCII < operator
        sorted_out = sorted(
            [sorted(x) if isinstance(x, list) else x for x in output],
            key=lambda x: json.dumps(x, separators=(',', ':'))
        )
        _js_cmp = '(a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; }'
        body = (
            f'    const result = {call};\n'
            f'    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)\n'
            f'                        .sort({_js_cmp});\n'
            f'    expect(sorted).toEqual({json.dumps(sorted_out)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── permutation-invariant ──
    if tmpl == 'permutation-invariant' and isinstance(output, list):
        desc = f'{fn_name}({", ".join(json.dumps(a) for a in input_args[:2])})'
        # Use compact separators to match JS JSON.stringify (no spaces); sort by ASCII < operator
        sorted_out = sorted(output, key=lambda x: json.dumps(x, separators=(',', ':'))) if output else []
        _js_cmp = '(a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; }'
        body = (
            f'    const result = {call};\n'
            f'    const sorted = [...result].sort({_js_cmp});\n'
            f'    expect(sorted).toEqual({json.dumps(sorted_out)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── default: exact-equal ──
    desc = f'{fn_name}({", ".join(json.dumps(a) for a in input_args[:2])}{"..." if len(input_args) > 2 else ""})'
    body = (
        f'    const result = {call};\n'
        f'    expect(result).toEqual({json.dumps(output)});'
    )
    return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'


def _render_design_it(fn_name, ops_sequence, oracle_out, case_idx, ctor_param_types=None):
    """Render a design-class test case from an operation sequence + oracle output."""
    oracle_results = oracle_out.get('output', []) if isinstance(oracle_out, dict) else []
    lines = [f'  it("sequence {case_idx + 1}", () => {{']
    for i, op in enumerate(ops_sequence):
        method = op[0]
        args   = op[1:]
        result = oracle_results[i] if i < len(oracle_results) else None

        if i == 0:
            # Use _js_arg for constructor args so TreeNode/ListNode are converted
            if ctor_param_types:
                args_js = ', '.join(_js_arg(a, ctor_param_types[j][0] if j < len(ctor_param_types) else None)
                                    for j, a in enumerate(args))
            else:
                args_js = ', '.join(json.dumps(a) for a in args)
            lines.append(f'    const obj = new {fn_name}({args_js});')
        elif result is None or (isinstance(result, dict) and result.get('threw')):
            args_js = ', '.join(json.dumps(a) for a in args)
            lines.append(f'    obj.{method}({args_js});')
        elif isinstance(result, dict) and not result.get('threw'):
            # Non-null object result (e.g. hasNext returning a truthy TreeNode) — check truthiness
            args_js = ', '.join(json.dumps(a) for a in args)
            lines.append(f'    expect(obj.{method}({args_js})).toBeTruthy();')
        else:
            args_js = ', '.join(json.dumps(a) for a in args)
            lines.append(f'    expect(obj.{method}({args_js})).toEqual({json.dumps(result)});')
    lines.append('  });')
    return '\n'.join(lines)

# ─────────────────────────────────────────────
# Stub and test file emitters
# ─────────────────────────────────────────────

def emit_stub(stub_path, problem, param_types, return_type, fn_name, description, oracle_source):
    """Write the blank stub file."""
    slug  = problem.get('slug', '')
    title = problem.get('title', slug)

    param_lines = '\n'.join(f' * @param {{{pt}}} {pn}' for pt, pn in param_types)
    ret_line    = f' * @return {{{return_type}}}'

    content = (
        f'/**\n'
        f' * {description or title}\n'
        f' *\n'
        f' * https://leetcode.com/problems/{slug}/description/\n'
        f' *\n'
        f'{param_lines}\n'
        f'{ret_line}\n'
        f' */\n'
        f'var {fn_name} = function({", ".join(pn for _, pn in param_types)}) {{\n'
        f'    // implement\n'
        f'}};\n'
        f'\n'
        f'export {{ {fn_name} }};\n'
    )
    stub_path.write_text(content)


def emit_stub_class(stub_path, problem, fn_name, class_methods, description):
    """Write a blank stub for design-class problems."""
    slug  = problem.get('slug', '')
    title = problem.get('title', slug)

    method_stubs = []
    for method, params in class_methods:
        params_str = ', '.join(params)
        method_stubs.append(
            f'{fn_name}.prototype.{method} = function({params_str}) {{\n'
            f'    // implement\n'
            f'}};'
        )

    content = (
        f'/**\n'
        f' * {description or title}\n'
        f' *\n'
        f' * https://leetcode.com/problems/{slug}/description/\n'
        f' */\n'
        f'var {fn_name} = function() {{\n'
        f'    // implement\n'
        f'}};\n'
        f'\n'
        + '\n\n'.join(method_stubs) + '\n'
        f'\n'
        f'export {{ {fn_name} }};\n'
    )
    stub_path.write_text(content)


def needs_helpers_import(input_category, return_type, param_types=None):
    """True if the test file needs imports from test_helpers.js."""
    if input_category in ('pointer-linked-list', 'pointer-tree', 'pointer-graph',
                          'pointer-nary-tree'):
        return True
    if return_type and any(t in return_type for t in ('ListNode', 'TreeNode', 'GraphNode', 'Node')):
        return True
    if param_types and any(t in pt for pt, _ in param_types
                           for t in ('ListNode', 'TreeNode', 'GraphNode')):
        return True
    return False


def helpers_import_names(input_category, param_types, return_type):
    """Names to import from test_helpers.js."""
    names = set()
    if input_category == 'pointer-linked-list' or \
            any('ListNode' in pt for pt, _ in param_types):
        names.update(['arrayToList', 'listToArray'])
    if input_category == 'pointer-tree' or \
            any('TreeNode' in pt for pt, _ in param_types):
        names.update(['arrayToTree', 'treeToArray'])
    if input_category == 'pointer-graph' or \
            any('GraphNode' in pt or pt.strip() == 'Node' for pt, _ in param_types):
        names.update(['arrayToGraphNode', 'graphToAdjList'])
    if input_category == 'pointer-nary-tree' or \
            any('_Node' in pt for pt, _ in param_types):
        names.update(['arrayToNaryNode'])
    if return_type and 'ListNode' in return_type:
        names.update(['arrayToList', 'listToArray'])
    if return_type and 'TreeNode' in return_type:
        names.update(['arrayToTree', 'treeToArray'])
    if return_type and return_type.strip() in ('ListNode[]', 'TreeNode[]'):
        names.update(['arrayToList', 'listToArray'] if 'ListNode' in return_type else ['arrayToTree', 'treeToArray'])
    return sorted(names)


def emit_test(test_path, problem, fn_name, input_category, param_types,
              return_type, tmpl, oracle_outputs, stub_rel_import):
    """Write the test file with hardcoded expected values."""
    problem_id   = problem['id']
    slug         = problem['slug']
    desc_name    = f'{problem_id}-{slug}'

    helper_names = helpers_import_names(input_category, param_types, return_type)
    helper_import = ''
    if helper_names:
        helper_import = (
            f"import {{ {', '.join(helper_names)} }} "
            f"from './__helpers__/test_helpers.js';\n"
        )

    it_blocks = []
    for i, oracle_out in enumerate(oracle_outputs):
        input_args = oracle_out.get('input', [])
        block = render_it_block(
            fn_name, input_args, oracle_out,
            param_types, return_type,
            input_category, tmpl, i, slug=problem.get('slug',''),
        )
        if block:
            it_blocks.append(block)

    if not it_blocks:
        return False

    content = (
        f"import {{ {fn_name} }} from '{stub_rel_import}';\n"
        f"{helper_import}"
        f"\ndescribe('{desc_name}', () => {{\n"
        + '\n\n'.join(it_blocks) + '\n'
        f'}});\n'
    )
    test_path.write_text(content)
    return True

# ─────────────────────────────────────────────
# Oracle runner invocation
# ─────────────────────────────────────────────

def run_oracle(bank_path, fn_name, input_category, param_types_list, return_type, inputs):
    """Run oracle_run.mjs and return parsed output list, or None on failure."""
    with tempfile.NamedTemporaryFile(suffix='.json', mode='w', delete=False) as tf:
        json.dump(inputs, tf)
        inputs_path = tf.name

    outputs_path = inputs_path.replace('.json', '_out.json')

    param_types_json = json.dumps(param_types_list)
    cmd = [
        'node', '--max-old-space-size=512', str(ORACLE_RUN),
        '--bankPath',       str(bank_path),
        '--fnName',         fn_name,
        '--inputCategory',  input_category,
        '--paramTypes',     param_types_json,
        '--returnType',     return_type,
        '--inputsJsonPath', inputs_path,
        '--outputsJsonPath', outputs_path,
    ]
    try:
        r = subprocess.run(cmd, capture_output=True, text=True, cwd=str(PROJECT_ROOT), timeout=30)
        if r.returncode != 0:
            sys.stderr.write(f'  oracle_run error: {r.stderr[:200].strip()}\n')
            return None
        return json.loads(Path(outputs_path).read_text())
    except subprocess.TimeoutExpired:
        sys.stderr.write('  oracle_run timeout (30s)\n')
        return None
    except Exception as e:
        sys.stderr.write(f'  oracle_run exception: {e}\n')
        return None
    finally:
        for p in (inputs_path, outputs_path):
            try:
                Path(p).unlink(missing_ok=True)
            except Exception:
                pass

# ─────────────────────────────────────────────
# Validation: swap import and run test
# ─────────────────────────────────────────────

def validate_test(test_path, stub_import, oracle_import):
    """
    Temporarily swap stub import for oracle import in test_path,
    run run_test.mjs, restore, return True if all pass.
    """
    original = test_path.read_text()
    validation = original.replace(f"from '{stub_import}'", f"from '{oracle_import}'", 1)

    tmp_path = test_path.with_suffix('.tmp.test.js')
    try:
        tmp_path.write_text(validation)
        cmd = ['node', '--max-old-space-size=512', str(RUN_TEST), str(tmp_path)]
        r   = subprocess.run(cmd, capture_output=True, text=True, cwd=str(PROJECT_ROOT), timeout=30)
        stdout = r.stdout.strip()
        stderr = r.stderr.strip()
        if stderr:
            sys.stderr.write(f'    validator: {stderr}\n')
        if r.returncode == 0:
            return True, []
        # parse failures
        failed_descs = []
        for line in stderr.split('\n'):
            if 'FAIL:' in line:
                failed_descs.append(line.strip())
        return False, failed_descs
    except subprocess.TimeoutExpired:
        sys.stderr.write('  validate timeout (30s)\n')
        return False, []
    except Exception as e:
        sys.stderr.write(f'  validate exception: {e}\n')
        return False, []
    finally:
        try:
            tmp_path.unlink(missing_ok=True)
        except Exception:
            pass

# ─────────────────────────────────────────────
# Main per-problem processing
# ─────────────────────────────────────────────

def process_problem(problem):
    problem_id = problem['id']
    slug       = problem['slug']
    tier       = problem.get('oracleTier', 'missing')
    fn_name    = problem.get('oracleFnName')

    stub_path = PLAYGROUND / f'{problem_id}-{slug}.js'
    test_path = TESTS_DIR   / f'{problem_id}-{slug}.test.js'

    # Step 1: idempotent skip
    if stub_path.exists() and test_path.exists():
        print(f'  skip (exists): {problem_id}-{slug}')
        return 'skipped'

    # Step 2: missing oracle
    if tier == 'missing' or not fn_name:
        append_needs_oracle({'id': problem_id, 'slug': slug, 'reason': 'oracleTier=missing'})
        print(f'  skip (no oracle): {problem_id}-{slug}')
        return 'missing'

    bank_file = SOLUTIONS_BANK / f'{problem_id}-{slug}.js'
    if not bank_file.exists():
        append_needs_oracle({'id': problem_id, 'slug': slug, 'reason': 'solutions-bank file missing'})
        print(f'  skip (bank missing): {problem_id}-{slug}')
        return 'missing'

    oracle_source = bank_file.read_text()

    # Skip oracles that use LeetCode platform classes unavailable in Node.js
    if re.search(r'new\s+(MaxPriorityQueue|MinPriorityQueue|PriorityQueue)\s*\(', oracle_source):
        append_needs_oracle({'id': problem_id, 'slug': slug,
                             'reason': 'uses LeetCode platform PriorityQueue class'})
        print(f'  skip (platform PriorityQueue): {problem_id}-{slug}')
        return 'missing'

    param_types, return_type = parse_oracle(oracle_source)
    class_methods            = parse_class_methods(oracle_source, fn_name)
    description              = extract_description(oracle_source)

    # Step 3: detect category and template
    input_category = get_input_category(problem, param_types)
    tmpl           = get_assertion_template(problem, param_types, return_type)

    param_types_list = [pt for pt, _ in param_types]

    # Step 4: build inputs
    inputs = build_inputs(problem, param_types, return_type, input_category, class_methods)
    if not inputs:
        append_needs_oracle({'id': problem_id, 'slug': slug, 'reason': 'could not build inputs'})
        return 'missing'

    print(f'  gen {problem_id}-{slug}  ({input_category}/{tmpl})')

    # Step 5: run oracle
    oracle_outputs = run_oracle(bank_file, fn_name, input_category,
                                param_types_list, return_type, inputs)
    if oracle_outputs is None:
        append_needs_oracle({'id': problem_id, 'slug': slug, 'reason': 'oracle_run failed'})
        return 'missing'

    # Step 6: emit stub
    if input_category == 'design-class':
        emit_stub_class(stub_path, problem, fn_name, class_methods, description)
    else:
        emit_stub(stub_path, problem, param_types, return_type, fn_name, description, oracle_source)

    # Relative import paths for the test file
    stub_rel_import   = f'../{problem_id}-{slug}.js'
    oracle_rel_import = f'../../solutions-bank/{problem_id}-{slug}.js'

    # Step 7: emit test (initial)
    ok = emit_test(
        test_path, problem, fn_name, input_category, param_types,
        return_type, tmpl, oracle_outputs, stub_rel_import,
    )
    if not ok:
        stub_path.unlink(missing_ok=True)
        append_needs_oracle({'id': problem_id, 'slug': slug, 'reason': 'no valid test cases generated'})
        return 'missing'

    # Step 8: validate (up to 3 attempts, dropping one failing case per retry)
    current_outputs = list(oracle_outputs)
    for attempt in range(3):
        passed, failing = validate_test(test_path, stub_rel_import, oracle_rel_import)
        if passed:
            break
        if not failing or attempt == 2:
            # Give up
            stub_path.unlink(missing_ok=True)
            test_path.unlink(missing_ok=True)
            append_needs_oracle({
                'id': problem_id, 'slug': slug,
                'reason': f'validation failed after {attempt+1} attempts',
            })
            print(f'    → validation failed, logged to needs-oracle.json')
            return 'missing'
        # Drop one case and retry
        if len(current_outputs) <= 1:
            stub_path.unlink(missing_ok=True)
            test_path.unlink(missing_ok=True)
            append_needs_oracle({
                'id': problem_id, 'slug': slug,
                'reason': 'validation failed and no cases left to drop',
            })
            return 'missing'
        current_outputs = current_outputs[:-1]
        emit_test(
            test_path, problem, fn_name, input_category, param_types,
            return_type, tmpl, current_outputs, stub_rel_import,
        )

    print(f'    → ok ({len(current_outputs)} cases)')
    return 'generated'

# ─────────────────────────────────────────────
# Entry point
# ─────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--batch', required=True, help='e.g. batch-001')
    args = parser.parse_args()

    batch_file = BATCHES_DIR / f'{args.batch}.json'
    if not batch_file.exists():
        sys.exit(f'Batch file not found: {batch_file}')

    batch       = json.loads(batch_file.read_text())
    problems    = batch.get('problems', [])
    total       = len(problems)
    generated   = 0
    skipped     = 0
    missing     = 0

    print(f'Processing {args.batch} ({total} problems)...')
    for p in problems:
        result = process_problem(p)
        if result == 'generated':
            generated += 1
        elif result == 'skipped':
            skipped += 1
        else:
            missing += 1

    print(f'\nDone: {generated} generated, {skipped} skipped, {missing} missing/failed')

if __name__ == '__main__':
    main()
