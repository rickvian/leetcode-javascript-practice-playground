/**
 * You are given the head of a linked list with n nodes. For each node in the list,
 * find the value of the next greater node. That is, for each node, find the value of
 * the first node that is next to it and has a strictly larger value than it.
 * Return an integer array answer where answer[i] is the value of the next greater node
 * of the ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.
 *
 * https://leetcode.com/problems/next-greater-node-in-linked-list/description/
 *
 * @param {ListNode} head
 * @return {number[]}
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var nextLargerNodes = function(head) {
    // implement
};

export { nextLargerNodes, ListNode };
