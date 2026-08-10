import { MinPriorityQueue } from "datastructures-js";

/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //    const count = {};
  //     for (const num of nums) {
  //         count[num] = (count[num] || 0) + 1;
  //     }
  //     const heap = new MinPriorityQueue((x) => x[1]);
  //     for (const [num, cnt] of Object.entries(count)) {
  //         heap.enqueue([num, cnt]);
  //         if (heap.size() > k) heap.dequeue();
  //     }
  //     const res = [];
  //     for (let i = 0; i < k; i++) {
  //         const [num, cnt] = heap.dequeue();
  //         res.push(num);
  //     }
  //     return res;

  const countMap = new Map(); // num : freq
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  } // we need the frequency so our MinP queue can prioritize it.

  // strategy: we enqueue everything to minpriorityqueue
  // then we dequeue until we have k items.
  // dequeue item means we remove lowest items
  // until we have k item left, which means they are the top K largest item,
  // frequency is the priority label, hence we get the answers

  // minimum always on top, dequeued first
  const heap = new MinPriorityQueue((x) => x.freq); // index 1 because mapping the frequency

  for (let [num, freq] of countMap.entries()) {
    heap.enqueue({ num, freq });
    // we can also dequeue at the same time to ensure MinP stays at k size
    if (heap.size() > k) {
      heap.dequeue();
    }
  }

  // we got the heap with size K.
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(heap.dequeue().num);
  }

  return result;
};

export { topKFrequent };
