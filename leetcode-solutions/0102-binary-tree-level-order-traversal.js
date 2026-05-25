/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values. (i.e., from left to right, level by level).
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];

  traverse(result, root);

  return result;
};

function traverse(result, node, level = 0) {
  if (!node) {
    return [];
  }

  result[level] = result[level] || [];
  result[level].push(node.val);

  traverse(result, node.left, level + 1);
  traverse(result, node.right, level + 1);
}

// alternative approach:
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
