/**
 * Given the root of a binary tree, check whether it is a mirror of itself (that is,
 * symmetric around its center).
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var isSymmetric = function(root) {
    // implement
};

export { isSymmetric, TreeNode }
