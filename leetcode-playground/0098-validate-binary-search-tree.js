/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as: left subtree of a node contains only nodes with keys less than
 * the node's key; right subtree contains only nodes with keys greater than the node's key;
 * both left and right subtrees must also be binary search trees.
 *
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 * @param {TreeNode} root
 * @return {boolean}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

var isValidBST = function(root) {
    // Solution implementation
};

export { isValidBST, TreeNode }
