/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by
 * continuously following the next pointer. Return true if there is a cycle in the linked list.
 * Otherwise, return false.
 *
 * https://leetcode.com/problems/linked-list-cycle/description/
 *
 * @param {ListNode} head
 * @return {boolean}
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var hasCycle = function (head) {
    // initialze slow and fast pointer
    let slowPointer = head
    let fastPointer = head?.next


    while (fastPointer?.next) {
        if (slowPointer == fastPointer) return true
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }

    return false // end reached, no cycle.
};

export { hasCycle, ListNode };
