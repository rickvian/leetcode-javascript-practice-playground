/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 *
 * Time:  O(n) — must visit every node in the worst case
 * Space: O(h) — call stack depth equals tree height h
 *               O(log n) if balanced, O(n) if fully skewed
 */
var lowestCommonAncestorSolution = function (root, p, q) {
  // Base case: fell off the tree, or this node is one of the targets.
  // Returning the target node signals "found it" to the parent caller.
  // We don't recurse deeper because a node is its own ancestor —
  // even if the other target is below, this node is still the LCA.
  if (root === null || root === p || root === q) return root;

  // Post-order: search both subtrees before deciding.
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // Both sides returned something → p and q split here, so root is the LCA.
  if (left && right) return root;

  // Only one side found something — bubble it up.
  // The parent will eventually see both sides and identify the LCA.
  return left || right;
};

export { lowestCommonAncestor, TreeNode };
