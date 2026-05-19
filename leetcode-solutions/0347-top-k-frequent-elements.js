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
var topKFrequent = function (nums, k) {
  const map = new Map();

  nums.forEach((value) => map.set(value, (map.get(value) || 0) + 1));

  return [...map]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([value]) => value);
};

/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * @complexity
 * Time:
 *   freq map build  → O(n)
 *   toSorted()      → O(n log n)  ← unique entries ≤ n
 *   result slice    → O(k)
 *   total: O(n) + O(n log n) + O(k)
 *        = O(n log n)              ← n log n dominates; k ≤ n so O(k) drops
 *
 * Space:
 *   Map (freq map)  → O(n)         ← up to n unique entries
 *   sorted array    → O(n)         ← spread of map into new array
 *   result          → O(k) ≤ O(n)
 *   total: O(n) + O(n) + O(k) = O(2n + k) = O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentSortApproach = function (nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // O(n)
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }

  let sorted = [...map]?.toSorted((a, b) => a[1] - b[1]); // O(n log n) — dominates; [number, freq]

  let result = [];
  for (let i = sorted.length - 1; i > sorted.length - 1 - k; i--) {
    result.push(sorted[i][0]);
  }

  return result;
};

/**
 * @complexity
 * Time:
 *   freq map build  → O(n)
 *   bucket alloc    → O(n)         ← n+1 slots
 *   bucket fill     → O(n)         ← unique entries ≤ n
 *   result scan     → O(n)         ← bucketIndex sweeps n slots; total pops = k ≤ n
 *   total: O(n) + O(n) + O(n) + O(n) = O(4n) = O(n)
 *
 * Space:
 *   freqMap         → O(n)         ← up to n unique entries
 *   bucket array    → O(n)         ← n+1 slots; n total numbers distributed across them
 *   result          → O(k) ≤ O(n)
 *   total: O(n) + O(n) + O(k) = O(2n + k) = O(n)
 */
var topKFrequentBucketSortApproach = function (nums, k) {
  // we use array as bucket sort, meaning whatever the number it become the index
  // this automatically arrange them correctly,

  // use the frequency as the index

  let freqMap = new Map();

  for (let num of nums) {
    // O(n)
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  // 1,1,1, 5,5,5
  // length = 6
  // if frequency 3, then it will be index 3, meaning our array must be 0,1,2,3,4,5,6 (7 item)
  let bucket = Array.from({ length: nums.length + 1 }, () => []); // O(n) — slots = max possible frequency
  // [freq as index]: [value1, value2]

  for (let [theNumber, freq] of freqMap) {
    // O(n) — unique entries ≤ n
    bucket[freq].push(theNumber);
  }

  // bucket like
  // [[], [], [], [1, 5], [], [] ,[] ]
  //  0   1   2   3

  // from back, we take all item in the bucket up to k times

  let result = [];

  let bucketIndex = nums.length + 1;
  while (bucketIndex >= 0 && result.length < k) {
    // O(n) total across both loops
    while (bucket[bucketIndex]?.length > 0 && result.length < k) {
      result.push(bucket[bucketIndex].pop());
    }

    bucketIndex--;
  }

  return result;
};

var topKFrequent = topKFrequentBucketSortApproach;

export { topKFrequent };
