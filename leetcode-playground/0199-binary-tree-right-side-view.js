/**
 * Given the root of a binary tree, return the values of the nodes visible
 * when the tree is viewed from the right side (top to bottom).
 *
 * https://leetcode.com/problems/binary-tree-right-side-view/description/
 *
 * @param {TreeNode|null} root - Root of the binary tree
 * @return {number[]} Rightmost value at each depth level
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var rightSideView = function (root) {
  // making level order tree, but take the right most item

  let q = [];

  let result = [];

  q.push(root);

  while (q.length > 0) {
    // process the queue
    let qLength = q.length; // snapshot the queue to process this batch

    let rightItem = null;
    for (let i = 0; i < qLength; i++) {
      const node = q.shift();

      if (node) {
        rightItem = node;
        q.push(node.left);
        q.push(node.right);
      }
    }

    // we will have rightest item
    if (rightItem) {
      result.push(rightItem.val);
    }
  }

  return result;
};

export { rightSideView, TreeNode };
