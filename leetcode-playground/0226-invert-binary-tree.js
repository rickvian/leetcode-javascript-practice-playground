/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * https://leetcode.com/problems/invert-binary-tree/description/
 *
 * @param {TreeNode} root - Root of the binary tree
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var invertTree = function(root) {

};

export { invertTree, TreeNode }
