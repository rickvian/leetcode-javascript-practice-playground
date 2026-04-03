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
  // Step 1: Count frequencies - O(n)
  // Example: nums = [1, 1, 1, 2, 2, 3], k = 2
  const count = new Map();
  let maxFreq = 0;

  for (let num of nums) {
    const freq = (count.get(num) || 0) + 1;
    count.set(num, freq);
    maxFreq = Math.max(maxFreq, freq);  // Track max frequency to avoid sparse array iteration
  }

  // After step 1:
  // count = Map { 1 => 3, 2 => 2, 3 => 1 }
  // maxFreq = 3

  // Step 2: Create buckets indexed by frequency - O(unique elements) ≤ O(n)
  // Use Map to avoid allocating n+1 empty arrays
  // Group numbers by their frequency
  const freq = new Map();

  for (let [num, numFreq] of count) {
    if (!freq.has(numFreq)) {
      freq.set(numFreq, []);
    }
    freq.get(numFreq).push(num);
  }

  // After step 2:
  // freq = Map {
  //   3 => [1],      (frequency 3: number 1 appears 3 times)
  //   2 => [2],      (frequency 2: number 2 appears 2 times)
  //   1 => [3]       (frequency 1: number 3 appears 1 time)
  // }

  // Step 3: Collect k most frequent elements - O(maxFreq + k)
  // Iterate from highest frequency down (only up to maxFreq, not n)
  // Example: k = 2
  // i = 3: freq.has(3) = true, add 1 to result → result = [1]
  // i = 2: freq.has(2) = true, add 2 to result → result = [1, 2] (done, length === k)
  const result = [];
  for (let i = maxFreq; i > 0 && result.length < k; i--) {
    if (freq.has(i)) {
      for (let num of freq.get(i)) {
        result.push(num);
        if (result.length === k) {
          return result;  // Early return when we have k elements
        }
      }
    }
  }

  // Final result: [1, 2] (the 2 most frequent elements)
};

export { topKFrequent };
