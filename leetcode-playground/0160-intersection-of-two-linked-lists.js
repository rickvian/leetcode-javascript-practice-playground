/**
 * Given the heads of two singly linked lists, return the node at which the two lists
 * intersect, or null if they do not intersect.
 *
 * https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var getIntersectionNode = function(headA, headB) {
    // implement
};

export { getIntersectionNode, ListNode }
