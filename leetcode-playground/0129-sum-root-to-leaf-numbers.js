/**
 * Given the root of a binary tree where each node has a digit, return the total sum of all root-to-leaf numbers.
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

export { TreeNode, sumNumbers }
