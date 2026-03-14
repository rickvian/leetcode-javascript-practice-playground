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

var levelOrder = function(root) {
    // Solution implementation
};

export { levelOrder, TreeNode }
