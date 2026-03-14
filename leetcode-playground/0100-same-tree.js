/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have
 * the same value.
 *
 * https://leetcode.com/problems/same-tree/description/
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

var isSameTree = function(p, q) {
    // Solution implementation
};

export { isSameTree, TreeNode }
