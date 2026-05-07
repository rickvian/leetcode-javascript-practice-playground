/**
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 * https://leetcode.com/problems/rotate-list/description/
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 *
 * @constraints
 * - The number of nodes in the list is in the range [0, 500].
 * - -100 <= Node.val <= 100
 * - 0 <= k <= 2 * 10^9
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

export { ListNode, rotateRight }
