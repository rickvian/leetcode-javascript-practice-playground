/**
 * Implement the BSTIterator class that represents an iterator over the in-order traversal
 * of a binary search tree (BST), exposing hasNext() and next() that return the next smallest number.
 *
 * https://leetcode.com/problems/binary-search-tree-iterator/description/
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

class BSTIterator {
    /**
     * @param {TreeNode} root
     */
    constructor(root) {
        // implement
    }

    /**
     * @return {number}
     */
    next() {
        // implement
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        // implement
    }
}

export { BSTIterator, TreeNode }
