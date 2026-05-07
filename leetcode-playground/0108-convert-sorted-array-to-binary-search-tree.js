/**
 * Given an integer array sorted in ascending order, convert it to a height-balanced binary search tree.
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var sortedArrayToBST = function(nums) {
    // implement
};

export { TreeNode, sortedArrayToBST }
