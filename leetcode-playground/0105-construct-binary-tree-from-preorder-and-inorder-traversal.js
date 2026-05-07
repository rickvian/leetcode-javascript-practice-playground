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

  let mid = inorder.indexOf(preorder[0]); // 1

  // pre  [20,15,7]
  //       r
  // in   [15,20,7]
  //          m
  //       0  1  2 3 4

  // LEFT
  // mid is 1
  // pre  [20, | 15,| 7]
  //           1      2
  // preorder.slice(1, mid+1): skip root at index 0, take the next `mid` elements → left subtree nodes [15]

  // in   [15 | 20, 7]
  //       0
  // inorder.slice(0, mid): everything to the LEFT of root (exclusive) → left subtree nodes [15]

  root.left = buildTree(
    // skipped 0 because it taken as root node, so next is to take whatever size of the lefter of the inorder,
    // mid tells us the index of root inorder part lefter portion, so we take n item after preorder[0]
    preorder.slice(1, mid + 1),
    // every value to the LEFT of root, will be its left subtree
    inorder.slice(0, mid),
  );

  // RIGHT
  // mid is 1, m+1 = 2
  // pre  [20,15,| 7]
  //             2
  // preorder.slice(mid+1): skip root + left subtree, take the rest → right subtree nodes [20,15,7]

  // in   [15,20,| 7]
  //             2
  // inorder.slice(mid+1): everything to the RIGHT of root (exclusive) → right subtree nodes [15,20,7]

  root.right = buildTree(
    // right part basically just pass everything after the mid
    preorder.slice(mid + 1),
    // same
    inorder.slice(mid + 1),
  );

  return root;
};

export { buildTree, TreeNode };
