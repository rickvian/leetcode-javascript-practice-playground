/**
 * Given an integer n, return all the structurally unique BSTs (binary search trees) which
 * has exactly n nodes of unique values from 1 to n. Return the answer in any order.
 *
 * https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 *
 * @param {number} n
 * @return {TreeNode[]}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var generateTrees = function(n) {
    // implement
};

export { generateTrees, TreeNode }
