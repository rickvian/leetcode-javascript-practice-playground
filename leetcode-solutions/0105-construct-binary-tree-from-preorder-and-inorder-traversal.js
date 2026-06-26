/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Difficulty: Medium
 *
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a
 * binary tree and inorder is the inorder traversal of the same tree, construct and return the
 * binary tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  // preorder[0] is always the root of the current subtree
  const root = new TreeNode(preorder[0]);

  // mid = root's index in inorder = how many nodes are in the left subtree
  //
  //   preorder: [ 3  |  9  |  20, 15, 7 ]
  //               root  left     right
  //
  //   inorder:  [ 9  |  3  |  15, 20, 7 ]
  //               left  root     right
  //                     ^mid=1
  const mid = inorder.indexOf(preorder[0]);

  const leftPreorder = preorder.slice(1, mid + 1);
  const leftInorder = inorder.slice(0, mid);
  root.left = buildTree(leftPreorder, leftInorder);

  const rightPreorder = preorder.slice(mid + 1);
  const rightInorder = inorder.slice(mid + 1);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};
