/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values
 * (i.e., from left to right, level by level).
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var levelOrder = function (root) {
  //    3
  //  9   20
  //     15   7
  // [3], [9, 20], [15, 7]
  // perform breath first search,
  // normally use queue.

  let q = [];
  let result = [];
  q.push(root);

  while (q.length > 0) {
    // start processing the queue,

    // push left and right into the queue for later processed

    // then pop the queue to put it into level

    let level = []; // 9 , 20 , 15, 7

    let currentQueueLength = q.length;

    for (let i = 0; i < currentQueueLength; i++) {
      // process item in queue
      const node = q.shift();
      if (node) {
        level.push(node.val);
        q.push(node.left);
        q.push(node.right);
      }
    }

    if (level.length > 0) {
      result.push(level);
    }
  }

  return result;
};

export { levelOrder, TreeNode };
