/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have
 * the same value.
 *
 * https://leetcode.com/problems/same-tree/description/
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * INTUITION:
 * Use a recursive DFS approach that compares two trees simultaneously:
 * 1. If both nodes are null, trees are identical at this subtree
 * 2. If only one is null or values differ, trees are not identical
 * 3. Recursively check left and right subtrees with AND logic (both must be true)
 *
 * The key insight is to traverse both trees in parallel, checking equality at each step.
 * This ensures we catch structural differences (different shapes) and value differences.
 *
 * TIME COMPLEXITY: O(min(m, n))
 * - m = number of nodes in tree p, n = number of nodes in tree q
 * - We visit each node in the smaller tree once
 * - Best case: O(1) if trees have different roots or structures detected early
 * - Worst case: O(min(m,n)) if we traverse the entire smaller tree
 *
 * SPACE COMPLEXITY: O(min(h1, h2))
 * - h1 = height of tree p, h2 = height of tree q
 * - Recursion call stack depth is bounded by the height of the smaller/shallower tree
 * - Best case: O(1) for single node trees
 * - Worst case: O(n) for a skewed tree (like a linked list)
 */
var isSameTree = function (p, q) {
    // Base case: both nodes are null, subtrees are identical
    if (p === null && q === null) return true

    // If only one is null or values differ, trees are not the same
    // Use optional chaining to safely access val property
    return p?.val === q?.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

export { isSameTree, TreeNode }
