/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 *
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

    // BRUTE FORCE APPROACH 

    // brute force solution wil hit time limit exceeded error
    function backtrack(index, prev) {
        // eventually backtrack will be called with latest element, thats our base case

        if (index === nums.length) {
            return 0; // no more element to count, nothing to include
        }
        // Option 1: Exclude the current element
        let lengthWithout = backtrack(index + 1, prev);

        // Option 2: include the current element + check if maintains increasing order
        let lengthWith = 0;
        if (nums[index] > prev) {
            // add 1 to the length, cos we decide to include nums[index] as we successfully. 1 represent the element itself
            // we have successfully found pice of an increasing subsequence.

            // passing index +1 represent the next element in array to lookup using our backtrack function
            // passing current element nums[index] for later use as comparator to check increasing sequence.
            lengthWith = 1 + backtrack(index + 1, nums[index]);
        }

        // Return the maximum of both decisions
        return Math.max(lengthWithout, lengthWith);
    }

    // start from first case

    return backtrack(0, -Infinity);
};

export { lengthOfLIS };
