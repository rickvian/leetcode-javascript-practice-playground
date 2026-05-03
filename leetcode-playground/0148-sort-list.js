/**
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 * @constraints
 * - The number of nodes in the list is in the range [0, 5 * 10^4]
 * - -10^5 <= Node.val <= 10^5
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
