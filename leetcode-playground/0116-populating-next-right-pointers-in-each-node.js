/**
 * You are given a perfect binary tree where all leaves are on the same level, and every
 * parent has two children. Populate each next pointer to point to its next right node. If
 * there is no next right node, the next pointer should be set to NULL.
 *
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/
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
