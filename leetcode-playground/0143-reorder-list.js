/**
 * You are given the head of a singly linked-list: L0 → L1 → … → Ln-1 → Ln
 * Reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 *
 * https://leetcode.com/problems/reorder-list/description/
 *
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var reorderList = function(head) {
};

export { reorderList, ListNode };
