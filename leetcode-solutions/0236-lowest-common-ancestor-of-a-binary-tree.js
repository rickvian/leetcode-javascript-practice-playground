/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Difficulty: Medium
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined
 * between two nodes p and q as the lowest node in T that has both p and q as descendants
 * (where we allow a node to be a descendant of itself).”
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // base case — null bubbles up from deepest leaf (not found); p/q signals "found one of them" to parent
  if (!root || root === p || root === q) return root;

  // search both subtrees; each returns null (not found) or a node (found signal or already-resolved LCA)
  const [l, r] = [
    lowestCommonAncestor(root.left, p, q),
    lowestCommonAncestor(root.right, p, q),
  ];

  // l && r: both sides found something — current root is the split point, so it's the LCA
  // otherwise: one side is null, bubble up whichever side found something
  // note: the non-null side could be p/q (signal) or an already-resolved LCA — same logic handles both
  return l && r ? root : (l ?? r);
};
