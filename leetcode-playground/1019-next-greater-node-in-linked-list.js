/**
 * You are given the head of a linked list with n nodes. For each node in the list,
 * find the value of the next greater node. That is, for each node, find the value of
 * the first node that is next to it and has a strictly larger value than it.
 * Return an integer array answer where answer[i] is the value of the next greater node
 * of the ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.
 *
 * https://leetcode.com/problems/next-greater-node-in-linked-list/description/
 *
 * @param {ListNode} head
 * @return {number[]}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var nextLargerNodes = function (head) {
  const values = [];
  let pointer = head;

  // Convert linked list to array of values
  while (pointer !== null) {
    values.push(pointer.val);
    pointer = pointer.next;
  }

  const result = Array.from({ length: values.length }, () => 0);
  const stack = []; // Stack of indices

  for (let i = 0; i < values.length; i++) {
    while (stack.length > 0 && values[stack.at(-1)] < values[i]) {
      const idx = stack.pop();
      result[idx] = values[i];
    }
    stack.push(i);
  }

  return result;
};

export { nextLargerNodes, ListNode };
