/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node
 * of two given nodes in the BST.
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 *
 * @param {TreeNode} root - Root of the BST
 * @param {TreeNode} p - First node
 * @param {TreeNode} q - Second node
 * @return {TreeNode}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// time compelx : o N
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;

  while (curr !== null) {
    // if both on right
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else {
      // if p and q are not on any side,
      // the only possibility is
      // p or q is the node itself, the other is somewhere down
      // OR
      // p and q is split on left or right
      // you have found the common ancestor

      return curr;
    }
  }
};

export { lowestCommonAncestor, TreeNode };
