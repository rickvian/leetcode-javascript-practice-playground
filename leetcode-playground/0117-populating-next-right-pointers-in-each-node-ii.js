/**
 * Populate each next pointer to point to its next right node in a binary tree. If there is no next right node, the next pointer should be set to null.
 *
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/
 */

class Node {
    constructor(val, left, right, next) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.next = next === undefined ? null : next;
    }
}

var connect = function(root) {
    // implement
};

export { Node, connect }
