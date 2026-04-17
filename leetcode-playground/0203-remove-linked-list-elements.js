/**
 * Given the head of a linked list and an integer val, remove all nodes whose
 * value equals val and return the new head.
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * @param {ListNode|null} head - Head of the linked list
 * @param {number} val - Value to remove from every matching node
 * @return {ListNode|null} Head of the modified list
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

var removeElements = function(head, val) {
    // implement
};

export { removeElements, ListNode }
