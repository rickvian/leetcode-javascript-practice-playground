/**
 * Given the root of a binary search tree, and an integer k, return the kth
 * smallest value (1-indexed) of all the values of the nodes in the tree.
 *
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
 *
 * @param {TreeNode} root - Root of the BST
 * @param {number} k - 1-indexed position
 * @return {number}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var kthSmallest = function(root, k) {

};

export { kthSmallest, TreeNode }
