/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var reverseList = function (head) {// 3 pointer.

    /**
     * intuition:
     *
     * with 3 pointer, we can help to keep track on "prev" and "next" item, while we iterate through the entire list using "current"
     * in every loop we detach the old next, and assign it into previous item, reversing its direction
     * and we do the same thing with next node, until we exhaust it.
     */

    let prev = null;
    let curr = head;
    let fwd;

    while (curr !== null) {
        fwd = curr.next;

        curr.next = prev; // process the reversal

        // move forward, ensure things behind processed first

        prev = curr;
        curr = fwd;

        // if we reach the end, the curr will be null, the prev will be the last node, that becomes the new head
    }

    return prev;
};

export { ListNode, reverseList };
