/**
 * Given the head of a linked list, reverse the nodes of the list k at a time and return the modified list.
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // implement
};

export { reverseKGroup, ListNode }
