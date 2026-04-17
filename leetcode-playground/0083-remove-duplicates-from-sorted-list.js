/**
 * Given the head of a sorted linked list, delete all duplicates such that each element
 * appears only once. Return the linked list sorted as well.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
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

var deleteDuplicates = function(head) {
    // implement
};

export { deleteDuplicates, ListNode }
