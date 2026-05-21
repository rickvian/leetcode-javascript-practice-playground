/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeKLists = function (lists) {
  // implement
};

export { mergeKLists };
