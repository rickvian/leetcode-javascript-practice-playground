/**
 * Given the head of a singly linked list and two integers left and right where left <= right,
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var reverseBetween = function (head, left, right) {
    // intuition
    // [1, 2, 3, 4, 5]  
    //  1 -2  3 -4  5

    // 1 -> 2 -> 3 -> 4 -> 5
    // detach 2 point to other (null)
    // then reverse 3
    // then reverse 4
    // then 1 -> 4
    // then 2 -> 3

    // we will need help of references to stich them

    // PHASE 1 - reach node at position left
    let dummy = new ListNode(0, head)
    let leftPrev = dummy
    let curr = head


    // put pointers to the position to detach it
    //            p null
    //             
    // dummy -> 1 -> 2 -> 3 -> 4 -> 5  
    //          lp   
    //               c

    for (let i = 1; i < left; i++) {
        // iterate left times - 1 
        curr = curr.next
        leftPrev = leftPrev.next
    }


    // PHASE 2 - reverse from left to right
    let prev = null

    for (let i = 0; i < right - left + 1; i++) {
        // iterate left times - right - left times = 4-2 = 2
        let tmpNext = curr.next // add reference on front
        curr.next = prev // reversing

        // move pointers ahead
        prev = curr
        curr = tmpNext
    }

    //                null
    //                  |
    // dummy->   1   ->   2  ->  3   ->  4   ->  5  
    //          lp
    //                                  tmpN
    //                         c
    //                  p

    // phase 3 stitch all
    leftPrev.next.next = curr
    leftPrev.next = prev

    return dummy.next
};

export { ListNode, reverseBetween };
