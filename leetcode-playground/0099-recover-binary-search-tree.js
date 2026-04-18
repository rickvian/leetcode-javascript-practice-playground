/**
 * You are given the root of a binary search tree (BST), where the values of exactly two
 * nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
 *
 * https://leetcode.com/problems/recover-binary-search-tree/description/
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var recoverTree = function(root) {
    // implement
};

export { recoverTree, TreeNode }
