/**
 * Implement an iterator over a BST. next() returns the next smallest number, hasNext() returns whether the next element exists.
 *
 * https://leetcode.com/problems/binary-search-tree-iterator/description/
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class BSTIterator {
    /** @param {TreeNode} root */
    constructor(root) {
        // implement
    }

    /** @return {number} */
    next() {
        // implement
    }

    /** @return {boolean} */
    hasNext() {
        // implement
    }
}

export { TreeNode, BSTIterator }
