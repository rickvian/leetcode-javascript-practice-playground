/**
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * Difficulty: Easy
 *
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
 * given nodes in the BST.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is
 * defined between two nodes p and q as the lowest node in T that has both p and q
 * as descendants (where we allow a node to be a descendant of itself).”
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
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};

var lowestCommonAncestorAlt = function (root, p, q) {
  let curr = root;

  while (curr !== null) {
    // Step 1: if both targets are greater, LCA must be in the right subtree — move down
    // e.g. curr=6, p=7, q=9  =>  go right
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
      // Step 2: if both targets are smaller, LCA must be in the left subtree — move down
      // e.g. curr=6, p=2, q=4  =>  go left
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else {
      // Step 3: targets split across curr (or curr is one of them) — curr is the LCA
      // e.g. curr=6, p=2, q=8  =>  one left, one right  =>  return 6
      return curr;
    }
  }
};
