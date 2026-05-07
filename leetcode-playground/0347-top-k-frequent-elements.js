/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * Time Complexity: O(n) - Uses bucket sort approach (3 linear passes over data)
 * Space Complexity: O(n) - Stores frequency map and bucket array
 *
 * Algorithm: Bucket Sort
 * - Count frequency of each element: O(n)
 * - Place each element in bucket indexed by its frequency: O(n)
 * - Collect k elements from buckets starting from highest frequency: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // intuition

  // need gather frequency info,
  // could be few ways, lest make a map

  // {
  //   1:2,
  //   2:2,
  //   3:1,
  //   4:1,
  // }

  // from the frequency, we can make kind of array, where frequency is sorted, 
  // so we can go from the largest item to the smallest, but only pick K times

  //            v v
  // freq  [1,1,2,3]
  //  value 3,4,2  1
  // k 2

  // -> [1, 2]

  // on paper we get the idea, but how does we solve this in code?

  // involve sorting the frequency, and retain the mapping, when we find largest freq, we collect the value, pick K times, we get the answer

  let freq = new Map() // { actualValue: freq }

  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1); // if empty, initialize 0 and add 1 counter, otherwise increment existing.
  }

  // we have the frequency map

  // now we need to sort the freq.

  // we can create new sortedArray, do the .sort, but that will be (uN log uN) extra loop,

  // lets try bucket sort, it has o N

  let bucket = Array.from({ length: nums.length + 1 }, () => []); // bucket mapping index as the frequency, value as the value [ , , ,]
  //  value [  3,2,1] times
  // index  [0,1,2,3]
  // but there could be collision, so we made array in the bucket

  // index  [0  , 1   ,   2,    3  ]  times
  //  value [    [3,4] , [2] , [1] ] 


  // this can be useful if we go from back iterate n times. so bucket sorting N + n picking item, 2n, still linear

  for (let [nValue, nFreq] of freq) {
    bucket[nFreq].push(nValue)
  }

  // then pick the top k from bucket.

  let result = []
  for (let i = nums.length; i > 0; i--) { // cos bucket is extended to cover +1 edge case
    // bucket[i] // [3,4] content is array
    for (let item of bucket[i]) {
      result.push(item);
      if (result.length === k) return result // stop early
    }
  }

  return result
};

export { topKFrequent };
