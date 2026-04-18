/**
 * Given the root of a binary tree where each node contains a digit 0-9,
 * return the total sum of all numbers formed by root-to-leaf paths.
 *
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
 *
 * @param {TreeNode} root
 * @return {number}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var sumNumbers = function(root) {
    // implement
};

export { sumNumbers, TreeNode }
