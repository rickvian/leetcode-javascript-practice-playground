/**
 * 19. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Difficulty: Medium
 *
 * Given the head of a linked list, remove the nth node from the end of the list
 * and return its head.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 *
 * @complexity
 * Time: O(n) — two loops, each at most length L:
 *   - First loop advances fast by n+1 steps → O(n)
 *   - Second loop advances both until fast is null → O(L - n - 1)
 *   - Total: O(n) + O(L - n) = O(L) → O(n)
 *
 * Intuition: advancing fast by n+1 (not n) means when fast falls off the list,
 * slow is exactly one node before the target — ready for the skip-over deletion.
 *
 * Space: O(1) — only two pointers regardless of list size
 */
var removeNthFromEnd = function (head, n) {
  const result = new ListNode();
  let slow = result;
  let fast = result;
  slow.next = head;

  for (let i = 0; i <= n; i++) {
    // O(n): advance fast n+1 steps ahead
    fast = fast.next;
  }

  while (fast) {
    // O(L - n): move both until fast is null
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return result.next;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 *
 * @complexity
 * Time: O(n) — two separate passes over the list:
 *   - First while loop counts all nodes → O(L)
 *   - Second for loop walks to the (L - n)th node → O(L - n)
 *   - Total: O(L) + O(L - n) = O(2L - n) → simplified to O(n)
 *
 * Intuition: first figure out the total length, then convert "nth from end"
 * into "kth from front" using k = length - n. Walk to position k-1 (one before
 * the target) and skip over it. Two passes but still linear — simpler to reason about.
 *
 * Space: O(1) — only a counter and two pointers
 */
var removeNthFromEndPersonalSolution = function (head, n) {
  let dummyNode = new ListNode();

  dummyNode.next = head;

  let curr = head;

  let length = 0;

  // 0 -> 1 -> 2
  //              c
  while (curr !== null) {
    // O(L): count all nodes
    length++;
    curr = curr.next;
  }

  // length = 3

  // target n = 2
  // 3 - 2 + 1 = 2snd node.
  // 2nd from front.
  // when do we stop at target?

  // length -

  curr = dummyNode;
  for (let i = 0; i < length - n; i++) {
    // O(L - n): stop one node before target
    curr = curr.next;
  } // curr stops at 1 node before the target for removal

  // remove that next by skips it over, normally garbage collector will clean it up
  curr.next = curr.next.next;

  return dummyNode.next;
};
