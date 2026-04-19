/**
 * Given the root of a binary tree, flatten the tree into a "linked list" in-place. The
 * linked list should use the same TreeNode class where right child points to the next node
 * and left child is always null, following the same order as a preorder traversal.
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
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

var flatten = function(root) {
    // implement
};

export { flatten, TreeNode }
