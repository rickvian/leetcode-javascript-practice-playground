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
    params      = [(m.group(1).strip(), m.group(2).strip()) for m in PARAM_RE.finditer(source)]
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

    if class_heavy or 'design' in tags:
        return 'design-class'

    for ptype, _ in param_types:
        if 'ListNode' in ptype:
            return 'pointer-linked-list'

    for ptype, _ in param_types:
        if 'TreeNode' in ptype:
            return 'pointer-tree'

    for ptype, _ in param_types:
        if 'GraphNode' in ptype or (ptype.strip() == 'Node' and 'graph' in tags):
            return 'pointer-graph'

    if any(kw in slug for kw in ('remove-element', 'rotate', 'remove-duplicates', 'move-zeroes')):
        return 'in-place-mutation'

    return 'plain-json'

def get_assertion_template(problem, param_types, return_type):
    slug = problem.get('slug', '')
    tags = [t.lower() for t in problem.get('tags', [])]
    if problem.get('classHeavy') or 'design' in tags:
        return 'design-class-sequence'
    if 'two-sum' in slug:
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
    if input_category == 'in-place-mutation':
        return _build_in_place_inputs(problem, param_types)
    return _build_plain_json_inputs(problem, param_types, return_type)

def _build_plain_json_inputs(problem, param_types, return_type):
    if not param_types:
        return []
    slug  = problem.get('slug', '')
    types = [pt.strip() for pt, _ in param_types]
    first = types[0] if types else ''

    # ── slug-specific overrides ──
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

    # ── number[][] ──
    if first in ('number[][]', 'integer[][]'):
        return [[[[1, 2], [3, 4]]], [[[1]]], [[[]]], [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]]]

    # ── (number[][], number) ──
    if len(types) == 2 and types[0] in ('number[][]', 'integer[][]'):
        return [[[[1, 2, 3], [4, 5, 6]], 2], [[[1]], 0], [[[]], 1]]

    # fallback: try single number array
    return [[[1, 2, 3]], [[]], [[0]], [[-1, 0, 1]]]

def _build_linked_list_inputs(problem, param_types):
    slug      = problem.get('slug', '')
    list_ct   = sum(1 for pt, _ in param_types if 'ListNode' in pt)
    non_list  = [(pt, pn) for pt, pn in param_types if 'ListNode' not in pt]

    if list_ct >= 2:
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
    # generic fallback
    if len(param_types) >= 2:
        return [[[1, 2, 3, 4, 5], 2], [[1], 1], [[], 0]]
    return [[[1, 2, 3, 4, 5]], [[]], [[1]]]

def _build_design_inputs(problem, class_methods):
    fn_name = problem.get('oracleFnName', '')
    slug    = problem.get('slug', '')
    method_names = [m for m, _ in class_methods]

    # MinStack / stack-like
    if any(m in method_names for m in ('push', 'pop', 'getMin', 'top', 'peek')):
        seqs = [
            [[fn_name], ['push', -2], ['push', 0], ['push', -3],
             ['getMin'], ['pop'], ['top'], ['getMin']],
            [[fn_name], ['push', 1], ['push', 2], ['top'], ['getMin'], ['pop']],
            [[fn_name], ['push', 0]],
        ]
        return seqs

    # LRU / cache-like
    if 'lru' in slug or 'cache' in slug or any(m in method_names for m in ('get', 'put')):
        return [
            [[fn_name, 2], ['put', 1, 1], ['put', 2, 2],
             ['get', 1], ['put', 3, 3], ['get', 2],
             ['put', 4, 4], ['get', 1], ['get', 3], ['get', 4]],
            [[fn_name, 1], ['put', 2, 1], ['get', 2], ['put', 3, 2], ['get', 2], ['get', 3]],
        ]

    # Queue-like
    if any(m in method_names for m in ('enqueue', 'dequeue', 'peek', 'empty')):
        return [
            [[fn_name], ['push', 1], ['push', 2], ['push', 3], ['peek'], ['pop'], ['empty']],
            [[fn_name], ['push', 1], ['pop']],
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
    if ptype and 'ListNode' in ptype and isinstance(arg, list):
        return f'arrayToList({json.dumps(arg)})'
    if ptype and 'TreeNode' in ptype and isinstance(arg, list):
        return f'arrayToTree({json.dumps(arg)})'
    if ptype and ('GraphNode' in ptype or ptype.strip() == 'Node') and isinstance(arg, list):
        return f'arrayToGraphNode({json.dumps(arg)})'
    return json.dumps(arg)

def _padded_params(param_types):
    """Return param types padded to any length (returns None for missing positions)."""
    return param_types  # list of (ptype, pname) tuples

def render_it_block(fn_name, input_args, oracle_out, param_types, return_type,
                    input_category, tmpl, case_idx):
    """Return the full `it(...)` block for one test case."""

    # ── design-class ──
    if input_category == 'design-class':
        return _render_design_it(fn_name, input_args, oracle_out, case_idx)

    threw = isinstance(oracle_out, dict) and oracle_out.get('threw')
    if threw:
        return None  # skip thrown cases

    output = oracle_out.get('output') if isinstance(oracle_out, dict) else oracle_out

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
        idx_var        = f'_nums{case_idx}'
        k_var          = f'_k{case_idx}'
        ek_var         = f'_ek{case_idx}'
        desc           = f'{fn_name}({json.dumps(first_arr)}{rest_part})'
        body = (
            f'    const {idx_var} = {json.dumps(first_arr)};\n'
            f'    const {k_var} = {fn_name}({idx_var}{rest_part});\n'
            f'    const {ek_var} = ({k_var} !== undefined && {k_var} !== null) ? {k_var} : {idx_var}.length;\n'
            f'    if ({ek_var} !== undefined) '
            f'expect({idx_var}.slice(0, {ek_var}).sort((a,b)=>a-b)).toEqual({json.dumps(expected)});'
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
        body = (
            f'    const result = {call};\n'
            f'    const nums = {json.dumps(nums_arg)};\n'
            f'    expect(result).toHaveLength(2);\n'
            f'    expect(nums[result[0]] + nums[result[1]]).toBe({json.dumps(target_arg)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── sorted-output-invariant (combinations/subsets) ──
    if tmpl == 'sorted-output-invariant' and isinstance(output, list):
        desc = f'{fn_name}({", ".join(json.dumps(a) for a in input_args[:2])})'
        sorted_out = sorted(
            [sorted(x) if isinstance(x, list) else x for x in output],
            key=lambda x: json.dumps(x, sort_keys=True)
        )
        body = (
            f'    const result = {call};\n'
            f'    const sorted = result.map(r => Array.isArray(r) ? [...r].sort((a,b)=>a-b) : r)\n'
            f'                        .sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));\n'
            f'    expect(sorted).toEqual({json.dumps(sorted_out)});'
        )
        return f'  it({json.dumps(desc)}, () => {{\n{body}\n  }});'

    # ── permutation-invariant ──
    if tmpl == 'permutation-invariant' and isinstance(output, list):
        desc = f'{fn_name}({", ".join(json.dumps(a) for a in input_args[:2])})'
        sorted_out = sorted(output, key=lambda x: json.dumps(x, sort_keys=True)) if output else []
        body = (
            f'    const result = {call};\n'
            f'    const sorted = [...result].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));\n'
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


def _render_design_it(fn_name, ops_sequence, oracle_out, case_idx):
    """Render a design-class test case from an operation sequence + oracle output."""
    oracle_results = oracle_out.get('output', []) if isinstance(oracle_out, dict) else []
    lines = [f'  it("sequence {case_idx + 1}", () => {{']
    for i, op in enumerate(ops_sequence):
        method = op[0]
        args   = op[1:]
        args_js = ', '.join(json.dumps(a) for a in args)
        result = oracle_results[i] if i < len(oracle_results) else None

        if i == 0:
            lines.append(f'    const obj = new {fn_name}({args_js});')
        elif result is None or (isinstance(result, dict) and result.get('threw')):
            lines.append(f'    obj.{method}({args_js});')
        else:
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


def needs_helpers_import(input_category, return_type):
    """True if the test file needs imports from test_helpers.js."""
    if input_category in ('pointer-linked-list', 'pointer-tree', 'pointer-graph'):
        return True
    if return_type and any(t in return_type for t in ('ListNode', 'TreeNode', 'GraphNode')):
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
    if return_type and 'ListNode' in return_type:
        names.update(['arrayToList', 'listToArray'])
    if return_type and 'TreeNode' in return_type:
        names.update(['arrayToTree', 'treeToArray'])
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
            input_category, tmpl, i,
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
        'node', str(ORACLE_RUN),
        '--bankPath',       str(bank_path),
        '--fnName',         fn_name,
        '--inputCategory',  input_category,
        '--paramTypes',     param_types_json,
        '--returnType',     return_type,
        '--inputsJsonPath', inputs_path,
        '--outputsJsonPath', outputs_path,
    ]
    try:
        r = subprocess.run(cmd, capture_output=True, text=True, cwd=str(PROJECT_ROOT))
        if r.returncode != 0:
            sys.stderr.write(f'  oracle_run error: {r.stderr.strip()}\n')
            return None
        return json.loads(Path(outputs_path).read_text())
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
        cmd = ['node', str(RUN_TEST), str(tmp_path)]
        r   = subprocess.run(cmd, capture_output=True, text=True, cwd=str(PROJECT_ROOT))
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
