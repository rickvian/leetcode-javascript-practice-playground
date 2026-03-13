/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Helper class to represent a linked list node
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;

        current.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        current = current.next;
    }

    return dummyHead.next;
};

module.exports = { addTwoNumbers, ListNode };
