/**
 * 143. Reorder List
 * https://leetcode.com/problems/reorder-list/
 * Difficulty: Medium
 *
 * You are given the head of a singly linked-list. The list can be represented as:
 *
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderListConciseSolution = function (head) {
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  let list1 = head;
  let list2 = head;

  while (list2.next && list2.next.next) {
    list1 = list1.next;
    list2 = list2.next.next;
  }

  let center1 = list1;
  let center2 = list1.next;
  while (center2.next) {
    const temp = center2.next;
    center2.next = temp.next;
    temp.next = center1.next;
    center1.next = temp;
  }

  list1 = head;
  list2 = center1.next;
  while (list1 != center1) {
    center1.next = list2.next;
    list2.next = list1.next;
    list1.next = list2;
    list1 = list2.next;
    list2 = center1.next;
  }
};

/**
 * @complexity
 * Time:  O(n)
 *   - Find middle:          O(n/2)  — slow/fast pointers, fast covers 2 nodes per step
 *   - Reverse second half:  O(n/2)  — single pass through ~n/2 nodes
 *   - Merge two halves:     O(n/2)  — interleave loop runs ~n/2 iterations
 *   Total: O(n/2) + O(n/2) + O(n/2) = O(3n/2) → drop constant → O(n)
 *
 * Space: O(1) — only a fixed set of pointer variables; no extra data structures
 */
var reorderList = function (head) {
  // we can turn it into array, and start from front and back to collect nodes as new list, stop when pointer met at the middle
  // but we can use another approach

  // find middle

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) { // O(n/2) — fast moves 2 nodes per step, terminates at midpoint
    slow = slow.next;
    fast = fast.next.next;
  }

  // 0 -> 1 -> 2 -> 3 -> 4
  //          s
  //                     f
  // now, slow pointer is at the exact middle position

  //   slow.next must be reversed

  function reverse(list) {
    // use multiple pointer to navigate and reverse link

    let prev = null;

    let curr = list;

    // start loop
    while (curr) { // O(n/2) — iterates through second half only
      let tmpNext = curr.next;
      curr.next = prev;

      prev = curr;
      curr = tmpNext;
    }

    return prev;
  }

  let secondHead = slow.next;
  slow.next = null; // detach 2nd half from first half
  let second = reverse(secondHead);

  // merge 2 halfs
  let first = head;

  //             null
  // 0 -> 1 -> 2         null <- 3 <- 4
  //                      S
  //           F
  //          tmp1
  //                      tmp2

  // 0 -> 4 -> 1 -> 3 -> 2
  //                     f
  //                                s

  // start collecting them
  while (second) { // O(n/2) — second half has ~n/2 nodes, one interleave per iteration
    let tmp1 = first.next; // store next nodes so they can advance
    let tmp2 = second.next;

    first.next = second;
    second.next = tmp1;
    // advance the pointer

    first = tmp1;
    second = tmp2;
  }
};

export { reorderList };
