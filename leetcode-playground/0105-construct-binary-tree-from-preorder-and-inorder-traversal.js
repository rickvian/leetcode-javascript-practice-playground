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

var buildTree = function(preorder, inorder) {
    // Solution implementation
};

export { buildTree, TreeNode }
