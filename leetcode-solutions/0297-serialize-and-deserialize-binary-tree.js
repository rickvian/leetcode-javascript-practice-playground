/**
 * 297. Serialize and Deserialize Binary Tree
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * Difficulty: Hard
 *
 * Serialization is the process of converting a data structure or object into a sequence of bits so
 * that it can be stored in a file or memory buffer, or transmitted across a network connection link
 * to be reconstructed later in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how
 * your serialization/deserialization algorithm should work. You just need to ensure that a binary
 * tree can be serialized to a string and this string can be deserialized to the original tree
 * structure.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// lazy approach

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  return JSON.stringify(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  return JSON.parse(data);
};

//! Alternative approach:

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // Preorder DFS: root → left → right
  // "N" marks null children so we can reconstruct exact tree shape on deserialize

  let result = [];

  //   1
  // 2   3
  //    4  5

  // serialized: "1,2,N,N,3,4,N,N,5,N,N"
  function bfs(node) {
    // null sentinel — tells deserializer this branch ends here
    if (!node) {
      result.push("N");
      return;
    }

    // visit root first (preorder), then recurse into children
    result.push(node.val);
    bfs(node.left);
    bfs(node.right);
  }

  bfs(root);

  const merged = result.join(",");
  console.log("merged", merged);
  return merged;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // Mirror the preorder traversal used in serialize: root → left → right
  // "i" acts as a global cursor advancing through tokens one by one

  const items = data.split(",");
  let i = 0;

  // DFS because serialize wrote tokens in preorder — reading them back in the
  // same order naturally rebuilds each subtree before moving to the next
  function dfs() {
    // "N" means this branch was null during serialization
    if (items[i] === "N") {
      i++;
      return null;
    }

    // Consume current token as this node's value, then advance cursor
    let node = new TreeNode(Number(items[i]));
    i++;

    // No parameter needed — "i" is shared via closure, so every recursive
    // call automatically reads the next unconsumed token
    node.left = dfs();
    node.right = dfs();

    return node;
  }

  return dfs();
};
