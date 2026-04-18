/**
 * A linked list of length n where each node has an additional random pointer is given;
 * construct a deep copy of the list and return its head.
 *
 * https://leetcode.com/problems/copy-list-with-random-pointer/description/
 *
 * @param {Node} head
 * @return {Node}
 */
class Node {
    constructor(val, next, random) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
        this.random = (random === undefined ? null : random);
    }
}

var copyRandomList = function(head) {
    // implement
};

export { copyRandomList, Node }
