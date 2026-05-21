/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * @param {TreeNode} root
 * @return {number}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var maxDepth = function (root) {
  // base case — a missing node contributes 0 depth, stopping the recursion
  // e.g. leaf.left is null  =>  returns 0
  if (!root) return 0;

  // recurse into both subtrees to find each side's depth independently
  // e.g. root=[1,2,3], root.left=2  =>  maxLeft = maxDepth(2) = 1
  let maxLeft = maxDepth(root.left);
  let maxRight = maxDepth(root.right);

  // depth at this node = deepest child + 1 (counting the current node itself)
  // e.g. maxLeft=2, maxRight=1  =>  max(2,1)+1 = 3
  let maximum = Math.max(maxLeft, maxRight) + 1;

  return maximum;
};

export { maxDepth, TreeNode };
