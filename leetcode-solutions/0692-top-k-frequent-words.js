/**
 * 692. Top K Frequent Words
 * https://leetcode.com/problems/top-k-frequent-words/
 * Difficulty: Medium
 *
 * Given an array of strings words and an integer k, return the k most frequent strings.
 *
 * Return the answer sorted by the frequency from highest to lowest. Sort the words with
 * the same frequency by their lexicographical order.
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequentSimpleSort = function (words, k) {
  const map = new Map();
  words.forEach((word) => map.set(word, (map.get(word) || 0) + 1));
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, k)
    .map(([word]) => word);
};

/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * @complexity
 * Time:  O(n log n) — frequency map build is O(n), but toSorted() on up to n unique entries dominates at O(n log n)
 * Space: O(n) — Map stores up to n entries; sorted array duplicates that; result is O(k) ≤ O(n)
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
 * Time:  O(n) — three O(n) passes (freq map, bucket fill, result scan); no sort step
 * Space: O(n) — freqMap up to n entries; bucket array of n+1 slots holding n total numbers
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
