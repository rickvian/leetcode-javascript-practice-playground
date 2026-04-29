/**
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * https://leetcode.com/problems/sort-list/description/
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

var sortList = function(head) {
    // implement
};

export { ListNode, sortList }
