/**
 * Given the root of a binary tree, return the number of uni-value subtrees (subtrees where all nodes have the same value).
 *
 * https://leetcode.com/problems/count-univalue-subtrees/description/
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
    // implement
};

export { countUnivalSubtrees, TreeNode }
