/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes >= x.
 *
 * https://leetcode.com/problems/partition-list/description/
 *
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var partition = function(head, x) {
    // implement
};

export { ListNode, partition }
