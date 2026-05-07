/**
 * Given the head of a sorted linked list, delete all nodes with duplicate numbers, leaving only distinct numbers.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
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

export { ListNode, deleteDuplicates }
