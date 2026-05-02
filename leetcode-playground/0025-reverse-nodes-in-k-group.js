/**
 * Given the head of a linked list, reverse the nodes of the list k at a time and return the modified list.
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // prepare utility to get kth node, by passing previousNode

  // before reversal loops, prepare dummy and groupPrev, easy, only 2
  let dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    // When we will break?
    let kth = getKthNode(groupPrev, k);
    if (!kth) break;

    // if kth exist, meaning we can perform reversal on that group

    // prepare group nodes.
    let groupNext = kth.next;

    // prepare iteration nodes, they will start a node before, in reversed direction
    let [prev, curr] = [groupNext, groupPrev.next];

    // while its not reaching over its group, keep reversing
    while (curr !== groupNext) {
      // perform reversal

      let tmpAhead = curr.next;

      curr.next = prev; // the arrow reversal direction happens here

      // advance reversal worker pointers
      prev = curr;
      curr = tmpAhead;
    }

    // once curr reached the groupNext, perform cleanup, here we stitch the group reversals.

    // currently groupPrev.next is still point like old way, meaning it points to the reversed-last node;
    // we want to change that to point to reversed-first node;
    let tmp = groupPrev.next;

    groupPrev.next = kth; // this is where the group reversal happen, the prev group link to last of current node (current kth)

    groupPrev = tmp; // in the reversed direction, once it was first, now it become last node, and it promoted as group prev for next iteration
  }

  return dummy.next;

  function getKthNode(curr, k) {
    while (curr && k > 0) {
      curr = curr.next;
      k--;
    }

    return curr;
  }
};

export { reverseKGroup, ListNode };
