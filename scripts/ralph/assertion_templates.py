"""
Assertion templates for generate_tests.py.
Maps problem metadata to a template name and provides JS assertion code generators.

Templates (keyed by detection rule):
  exact-equal               - default; toEqual(expectedOutput)
  any-valid-pair-summing    - two-sum family; check sum of pair
  any-valid-index-of        - find-duplicate / first-unique; check value
  sorted-output-invariant   - combinations/subsets; sort inner+outer before compare
  permutation-invariant     - permutations/anagrams; sort before compare
  any-valid-path            - graph traversal; subset check
  design-class-sequence     - class-heavy; sequence of ops with return-value assertions
"""


def detect_template(problem, param_types, return_type):
    """Return the template name to use for this problem."""
    slug = problem.get('slug', '')
    tags = [t.lower() for t in problem.get('tags', [])]
    class_heavy = problem.get('classHeavy', False)

    if class_heavy or 'design' in tags:
        return 'design-class-sequence'

    if 'two-sum' in slug:
        return 'any-valid-pair-summing'

    if any(kw in slug for kw in ('permutation', 'anagram', 'letter-combinations')):
        return 'permutation-invariant'

    if any(kw in slug for kw in ('combination', 'subset', 'generate-parentheses')):
        return 'sorted-output-invariant'

    if any(kw in slug for kw in ('find-duplicate', 'first-unique-character')):
        return 'any-valid-index-of'

    if 'graph' in tags and any(kw in slug for kw in ('path', 'route', 'traverse', 'clone')):
        return 'any-valid-path'

    return 'exact-equal'


def get_input_category(problem, param_types):
    """
    Determine input category from problem metadata and parsed param types.

    Returns one of:
      plain-json, pointer-linked-list, pointer-tree,
      pointer-graph, design-class, in-place-mutation
    """
    slug = problem.get('slug', '')
    tags = [t.lower() for t in problem.get('tags', [])]
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

    in_place_keywords = ('remove-element', 'rotate', 'remove-duplicates', 'move-zeroes')
    if any(kw in slug for kw in in_place_keywords):
        return 'in-place-mutation'

    return 'plain-json'
