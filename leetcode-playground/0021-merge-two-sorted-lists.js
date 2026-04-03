class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the two lists.
 * Return the head of the merged linked list.
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummyStart = new ListNode()
  let tail = dummyStart;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1; // add smaller item to the result
      list1 = list1.next // move list1 pointer forward
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;// move result pointer forward
  }

  // at this point, any list could still have leftover nodes after
  // we could just stitch those leftover to the end of result (tail)
  if (list1) {
    tail.next = list1
  }


  if (list2) {
    tail.next = list2
  }

  return dummyStart.next
};

export { mergeTwoLists };
