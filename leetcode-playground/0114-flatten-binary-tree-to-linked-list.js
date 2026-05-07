/**
 * Flatten the binary tree into a linked list in-place using preorder traversal order.
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * @param {TreeNode} root
 * @return {void}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var flatten = function(root) {
    // implement
};

export { TreeNode, flatten }
