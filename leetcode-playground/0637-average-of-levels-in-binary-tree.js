/**
 * Given the root of a binary tree, return the average value of the nodes on each level.
 *
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var averageOfLevels = function(root) {
    // implement
};

export { TreeNode, averageOfLevels }
