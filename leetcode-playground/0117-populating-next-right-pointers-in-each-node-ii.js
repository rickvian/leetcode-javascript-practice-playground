/**
 * Given a binary tree, populate each next pointer to point to its next right node. If there
 * is no next right node, the next pointer should be set to NULL. The tree is not guaranteed
 * to be perfect and may be missing children at any level.
 *
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/
 *
 * @param {Node} root
 * @return {Node}
 */
class Node {
    constructor(val, left, right, next) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.next = (next === undefined ? null : next);
    }
}

var connect = function(root) {
    // implement
};

export { connect, Node }
