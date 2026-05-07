/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * Time Complexity: O(n + m log m) where m = unique elements
 * - Frequency counting: O(n)
 * - Sorting all m unique elements: O(m log m)
 * - Collecting k elements: O(k)
 * Space Complexity: O(m) for the frequency map and sorted array
 *
 * Approach: Sort by Frequency
 * 1. Count frequency of each element using Map: O(n)
 * 2. Convert to array and sort by frequency: O(m log m)
 * 3. Take k largest by popping from sorted array: O(k)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Step 1: Count frequencies - O(n)
    let freqMap = new Map();

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Convert map entries to array and sort by frequency - O(m log m)
    let sortedByFreq = [];

    for (let freq of freqMap) {
        sortedByFreq.push(freq);  // [number, frequency] pairs
    }

    sortedByFreq.sort((a, b) => a[1] - b[1]);  // Sort by frequency (ascending)

    // Step 3: Extract k largest elements - O(k)
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(sortedByFreq.pop()[0]);  // Pop from end (highest frequency)
    }

    return result;
};

export { topKFrequent };
