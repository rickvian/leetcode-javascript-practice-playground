/**
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 * https://leetcode.com/problems/rotate-list/description/
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

var rotateRight = function(head, k) {
    // implement
};

export { rotateRight, ListNode }
