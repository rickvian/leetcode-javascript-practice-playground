/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Difficulty: Easy
 *
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the
 * first two lists.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * - [Test case]({@link ../leetcode-playground/tests/0021-merge-two-sorted-lists.test.js})
 *
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * @complexity
 * Time: O(m + n) — m = length of list1, n = length of list2
 *   - While loop: each iteration advances one pointer → processes one node from either list
 *   - Worst case (perfectly alternating values): m + n - 1 iterations → O(m + n - 1) → O(m + n)
 *   - Tail stitch after loop: O(1)
 *   - Total: O(m + n)
 *
 * Space: O(m + n)
 *   - Each loop iteration allocates a new ListNode → new nodes = loop iteration count
 *   - Worst case (alternating): m + n - 1 new nodes → O(m + n - 1) → O(m + n)
 *   - Tail reuse via curr.next = remaining list pointer: no new allocations → O(1)
 *   - Total: O(m + n)
 */

var mergeTwoListsConcise = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }

  if (l1.val > l2.val) {
    [l2, l1] = [l1, l2];
  }

  l1.next = mergeTwoLists(l1.next, l2);

  return l1;
};

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (list1, list2) {
  // 1 - 2 - 9 - 15 - 30
  //         l1
  // 4 - 5 - 6
  //             12

  // merge 2 linked list whilst in process we sort it.

  let dummyResult = new ListNode();

  let curr = dummyResult;
  // dummy -> 1 -> 2 -> 4 -> 5 -> 6 ->  9 - 15 - 30
  //                             curr

  while (list1 && list2) { // O(m + n) — runs until the shorter list is exhausted
    // check which one is smaller to collect first

    if (list1.val < list2.val) {
      curr.next = new ListNode(list1.val); // O(1) space — one new node per iteration
      list1 = list1.next;
    } else {
      curr.next = new ListNode(list2.val); // O(1) space — one new node per iteration
      list2 = list2.next;
    }

    curr = curr.next;
  }

  if (list1 || list2) {
    curr.next = list1 || list2; // O(1) — reuses existing nodes, no new allocations
  }

  return dummyResult.next;
};

export { mergeTwoLists };
