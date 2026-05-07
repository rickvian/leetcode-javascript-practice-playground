/**
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // implement
};

export { isPalindrome, ListNode }
