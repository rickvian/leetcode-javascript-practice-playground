/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var preorderTraversal = function(root) {
    // implement
};

export { preorderTraversal, TreeNode }
