/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 *
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    /**
       * APPROACH: Greedy with Binary Search (Patience Sorting)
       * * WHAT: We maintain an array 'result' (commonly called 'tails').
       * Each element at index 'i' represents the smallest possible tail
       * of all increasing subsequences of length 'i + 1'.
       * * WHY: By keeping the tail of a sequence as small as possible, we
       * maximize the chances that future numbers in 'nums' will be
       * larger than that tail, allowing the sequence to grow further.
       */

    if (nums.length === 0) return 0;

    let tail = [];

    for (const current of nums) {
        /**
         * HOW: For every number, we find its insertion point in 'result'.
         * We want the first element in 'result' that is >= 'current'.
         */
        let left = 0;
        let right = tail.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (tail[mid] < current) {
                /**
                 * WHY left = mid + 1:
                 * If result[mid] is smaller than current, 'current' cannot
                 * replace result[mid] or anything to its left. We must
                 * search the strictly higher range.
                 */
                left = mid + 1;
            } else {
                /**
                 * WHY right = mid:
                 * If result[mid] is >= current, then 'mid' is a potential
                 * candidate for replacement. However, there might be an
                 * even earlier index that is also >= current. We set
                 * right = mid to shrink the window while keeping 'mid'
                 * as a candidate.
                 */
                right = mid;
            }
        }

        if (left === tail.length) {
            /**
             * SCENARIO 1: APPEND
             * If 'left' reached the end, 'current' is larger than
             * any existing tail. This means we've found a way to
             * create a strictly longer subsequence than any seen before.
             */
            tail.push(current);
        } else {
            /**
             * SCENARIO 2: REPLACE (GREEDY)
             * If 'left' is within bounds, we replace the existing
             * value with 'current'.
             * * WHY: If we have [10, 20, 30] and current is 15, we
             * change it to [10, 15, 30]. The length is still 3,
             * but '15' is a "better" tail than '20' because it
             * is easier to find numbers larger than 15 than 20.
             */
            tail[left] = current;
        }
    }

    /**
     * FINAL NOTE: The 'result' array itself is not necessarily
     * the LIS, but its length is guaranteed to be the length of the LIS.
     */
    return tail.length;
}

export { lengthOfLIS };
