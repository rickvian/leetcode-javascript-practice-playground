/**
 * 23. Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * Difficulty: Hard
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted
 * in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 *
 * @complexity
 * Time:  O(N log N)
 *   - Traversal of all N nodes across k lists:          O(N)
 *   - Spread Map to array + sort U unique keys:         O(U log U)
 *   - Rebuild linked list (N new nodes total):          O(N)
 *   - Combined: O(N) + O(U log U) + O(N) = O(2N + U log U)
 *   - Worst case U = N (all unique) → O(N log N) dominates
 *
 * Space: O(N)
 *   - Map stores U unique key→count pairs:              O(U)
 *   - sorted array of U entries:                        O(U)
 *   - N new ListNode allocations for result list:       O(N)
 *   - Combined: O(2U + N), U ≤ N → O(N)
 */
var mergeKLists = function (lists) {
  // key = node value, value = how many times it appears across all k lists
  const map = new Map();

  for (let list of lists) {
    while (list) {
      // read current count (0 if unseen), increment, write back
      map.set(list.val, (map.get(list.val) || 0) + 1);
      list = list.next; // advance pointer to next node
    }
  }

  // spread Map into [[key, count], ...] pairs, then sort numerically by key
  // [a] pulls just the key from each pair for comparison
  const sorted = [...map].sort(([a], [b]) => a - b);

  // dummy head: avoids a null-check before the very first append
  // tail tracks the last real node so we can append in O(1)
  const result = new ListNode();
  let tail = result;

  for (let [key, count] of sorted) {
    // post-decrement: evaluates to old value, so this runs exactly `count` times
    while (count--) {
      tail.next = new ListNode(key); // append a new node with this value
      tail = tail.next;              // advance tail to the node we just added
    }
  }

  return result.next; // skip the dummy head, return the real first node
};

var mergeKLists = function (lists) {
  // intuition
  // there are k linked-list
  // 1-2-3-4
  // 2-3
  // 4
  // 5-9-10

  // how to merge them altogether?
  // we have to merge one by one

  // bruteforce

  // merge list 1 with list 2 to become listResult
  // 1-2-2-3-3-4

  // then merge listResult with list3
  // 1-2-2-3-3-4-4
  // then merge with list 4

  // this means we go each list of K and then iterate over N items in list. k*n

  // we can optimize this with merging 2 at same time

  // merge list 1 and 2 to listResult
  // 1-2-3-4
  // 2-3

  // merge list 3 and 4 to list result
  // 4
  // 5-9-10

  // then merge first merged with second merged,

  // effectively we halving number of list to merge every iteration

  // we have approach that allow log(k) list merges * n items

  // edge case check

  if (!lists || lists.length === 0) return null;

  while (lists.length > 1) {
    const nextRound = [];

    for (let i = 0; i < lists.length; i += 2) {
      const merged = mergeTwoList(lists[i], lists[i + 1] ?? null);
      nextRound.push(merged);
    }

    lists = nextRound;
  }

  return lists[0];

  function mergeTwoList(list1, list2) {
    // [1,2,3,4,5]
    //      ^
    // [2,3]
    //      ^

    //   Dum->1->2->2->3->3->4->5
    //  ^           ^

    let dummy = new ListNode();
    let twoListResultTail = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        twoListResultTail.next = list1;
        list1 = list1.next;
      } else {
        twoListResultTail.next = list2;
        list2 = list2.next;
      }

      twoListResultTail = twoListResultTail.next; // prepare tail for next iteration
    }

    twoListResultTail.next = list1 || list2;

    return dummy.next;
  }
};
