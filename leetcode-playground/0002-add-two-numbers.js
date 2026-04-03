/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * leetcode link:
 * https://leetcode.com/problems/add-two-numbers/description/
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

var addTwoNumbers = function (l1, l2) {
  // 2 -> 4 -> 3
  // 5 -> 6 -> 4
  // 7 -> 0 -> 8
  // approach - iterate through each nodes, as long as there is digit, we will keep calc sum
  // we will store the carry and provide to next

  // we will create dummy node
  // to avoid null pointer exception at first iteration as we move .next
  // as quick head reference to return head at the end of function completion
  let dummyHead = new ListNode();
  let current = dummyHead; // current will act as moving pointer

  let carry = 0;

  while (l1 || l2 || carry) {
    // handle edge case, if its reach end but still have carry, we will need to create new node for it.
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;

    // calculate new digit
    let sum = v1 + v2 + carry;

    if (sum >= 10) {
      carry = 1;
      sum -= 10; // take its 10 that become carry\
    } else {
      // smaller than 1, no carry, digit as it is
      carry = 0;
    }

    current.next = new ListNode(sum);

    // update pointers
    current = current.next; // move to next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return dummyHead.next;

  // time complexity: because we iterate every item linearly, depending which one is larger
  // o(max(m,n)) // linear

  // space complexity
  // we use extra capacity to store result linked list, scales as l1 and l2 increases
  // o(max(m,n)) // linear
};

export { addTwoNumbers, ListNode };
