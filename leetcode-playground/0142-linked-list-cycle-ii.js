/**
 * Given the head of a linked list, return the node where the cycle begins,
 * or null if there is no cycle.
 *
 * https://leetcode.com/problems/linked-list-cycle-ii/description/
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

var detectCycle = function(head) {
    // implement
};

export { detectCycle, ListNode }
