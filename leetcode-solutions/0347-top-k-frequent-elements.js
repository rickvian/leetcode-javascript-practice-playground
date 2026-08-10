import { MinPriorityQueue } from "datastructures-js";

/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 * Difficulty: Medium
 *
 * Given an integer array `nums` and an integer `k`, return the `k` most
 * frequent elements. You may return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentSortSolution = function (nums, k) {
  // time complexity : O(N log n)
  // space complexity: O(N)

  const map = new Map();

  nums.forEach((value) => map.set(value, (map.get(value) || 0) + 1));

  return [...map]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([value]) => value);
};

var topKFrequentHeapSolution = function (nums, k) {
  // Time complexity O(N log K)

  // Space complexity O(N+K)

  const countMap = new Map(); // num : freq
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  } // we need the frequency so our MinP queue can prioritize it.

  // strategy: we enqueue everything to MinHeap (MinPriorityQueue)
  // we ensure the MinHeap only have K items.
  // when more than K keep dequeue-ing (this remove smaller items)

  // minimum always on top, dequeued first
  const heap = new MinPriorityQueue((x) => x.freq); // index 1 because mapping the frequency

  for (let [num, freq] of countMap.entries()) {
    heap.enqueue({ num, freq });

    // we can also dequeue at the same time to ensure MinP stays at k size
    if (heap.size() > k) {
      heap.dequeue();
    }
  }

  // at this point, we got the heap with size K, containing only largest items.

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(heap.dequeue().num);
  }

  return result;
};
