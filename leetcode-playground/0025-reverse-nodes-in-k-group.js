/**
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var reverseKGroup = function(head, k) {
    // implement
};

export { ListNode, reverseKGroup }
