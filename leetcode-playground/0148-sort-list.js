/**
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Time: O(n log n) — list is halved each level (log n levels), each level does O(n) merge work.
// Space: O(log n) — only the recursion call stack, no auxiliary array.
//
// vs array conversion: also O(n log n) time but O(n) space for the array. This uses only O(log n).
// vs bubble sort on the list: bubble sort is O(n²) time — strictly worse for large inputs.
var sortList = function (head) {
  // approach
  // brute force
  // convert linked list into array O(N)
  // perform.sort // n log n
  // transform back to linked list o(N)
  // space complexity : o(N)
  // but we can perform more efficient sort in place for the linked list
  // using merge sort approach, we divide, and merge and performing sort along the way.
  // -1, 5, 3, 4, 0 null
  //        ^        ^
  // divide
  // we need to get the middle index first before performing split

  // base case:
  if (!head || !head.next) return head; // null or single node

  // approach:
  // we divide, then merge-sort it
  let left = head; // important for independent start reference
  let mid = getMid(head);
  // 0-> 3 -> 2 -> 6 -> 2 ->
  //     s         f

  let right = mid.next;

  mid.next = null; //split left and right portion

  let leftList = sortList(left);
  let rightList = sortList(right);

  return mergeSort(leftList, rightList);

  function getMid(list) {
    // how to get mid of linked list?
    // idea: use 2 pointer, slow move 1 step, fast move 2 step.
    // fast will arrive at end first, then slow will arrive at mid.

    let slow = list;
    let fast = list.next;

    while (fast && fast.next) {
      // check fast AND fast.next: fast could itself be null at end of an odd-length list,
      // so reading fast.next alone would crash with "cannot read property of null".
      // fast guards the node exists; fast.next guards the two-step hop is safe.
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow; // slow will be the mid reference
  }

  function mergeSort(list1, list2) {
    // go through both list, traverse them, as we traverse we create new list sorted from both item.

    let dummy = new ListNode();

    let tail = dummy;

    // dummyNode -> list1 ->
    //               ^ tail

    while (list1 && list2) {
      if (list1.val < list2.val) {
        //! IMPORTANT TO COMPARE VAL!!!
        tail.next = list1;
        list1 = list1.next; // don't forget to move the list
      } else {
        tail.next = list2;
        list2 = list2.next; // don't forget to move the list
      }

      tail = tail.next;
    }

    // list 1 could be longer than list 2 at some case,

    // say list is split uneven,

    // 0-> 3    and 2
    // when while ends, we have leftover node, attach it
    tail.next = list1 || list2; // add leftover

    return dummy.next;
  }
};

export { sortList, ListNode };
