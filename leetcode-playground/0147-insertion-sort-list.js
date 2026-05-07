/**
 * Given the head of a singly linked list, sort the list using insertion sort
 * and return the sorted list's head.
 *
 * https://leetcode.com/problems/insertion-sort-list/description/
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

var insertionSortList = function(head) {
    // implement
};

export { insertionSortList, ListNode }
