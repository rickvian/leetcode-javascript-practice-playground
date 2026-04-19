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

var rightSideView = function(root) {
    // implement
};

export { rightSideView, TreeNode }
