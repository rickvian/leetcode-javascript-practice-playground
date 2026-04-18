/**
 * Given the root of a binary tree, return the bottom-up level order traversal of its nodes'
 * values. (i.e., from left to right, level by level from leaf to root).
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var levelOrderBottom = function(root) {
    // implement
};

export { levelOrderBottom, TreeNode }
