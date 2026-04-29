/**
 * Construct a deep copy of a linked list where each node has a val, next pointer, and random pointer.
 *
 * https://leetcode.com/problems/copy-list-with-random-pointer/description/
 */

class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

var copyRandomList = function(head) {
    // implement
};

export { Node, copyRandomList }
