/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // implement
};

export { swapPairs, ListNode }
