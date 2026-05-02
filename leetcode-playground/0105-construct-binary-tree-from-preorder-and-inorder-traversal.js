/**
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree
 * and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode | null}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var buildTree = function (preorder, inorder) {
  if (preorder.length <= 0 || inorder.length <= 0) {
    return null;
  }

  let root = new TreeNode(preorder[0]);

  let mid = inorder.indexOf(preorder[0]);

  // pre  [3,9, 20,15,7]
  //       r
  // in   [9,3, 15,20,7]
  //         m
  //       0 1 2 3 4

  // LEFT
  // mid is 1
  // pre  [3,| 9, | 20,15,7]
  //         1  2
  // preorder.slice(1, mid+1): skip root at index 0, take the next `mid` elements → left subtree nodes [9]

  // in   [9,| 3,15,20,7]
  //       0
  // inorder.slice(0, mid): everything to the LEFT of root (exclusive) → left subtree nodes [9]

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));

  // RIGHT
  // mid is 1
  // pre  [3,9,| 20,15,7]
  //             2
  // preorder.slice(mid+1): skip root + left subtree, take the rest → right subtree nodes [20,15,7]

  // in   [9,3,| 15,20,7]
  //              2
  // inorder.slice(mid+1): everything to the RIGHT of root (exclusive) → right subtree nodes [15,20,7]

  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

export { buildTree, TreeNode };
