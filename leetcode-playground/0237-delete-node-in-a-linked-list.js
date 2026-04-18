/**
 * There is a singly-linked list and you are given access to a node in that list (not the tail); delete that node in place.
 *
 * https://leetcode.com/problems/delete-node-in-a-linked-list/description/
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {ListNode} node
 * @return {void}
 */
var deleteNode = function(node) {
    // implement
};

export { deleteNode, ListNode }
