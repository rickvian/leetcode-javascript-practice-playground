/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 *
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // stub
    // [0, 1, 0, 3, 2, 3]
    // 0 -> we have choice for each value, include / not include
    // include : 0 ->
    // not include: ->
    // 0, [1]
    // include : 0, 1 ->
    // not include: 0 ->
    const LIS = new Array(nums.length).fill(1);

    // doing iteration in reverse order.
    for (let i = nums.length - 1; i > -1; i--) {
        // [0,1,0,3,2,3]
        //          ^

        for (let j = i + 1; j < nums.length; j++) {
            const currentNum = nums[i];
            const followingNum = nums[j];
            // i+1 cos iterate through to check next item after i
            if (currentNum < followingNum) {
                // only if its increases, we are allowed to add into LIS
                // compare which one bigger, is it current LIS[i] (which is himself right now, only 1)
                // or
                // LIS[j] (next item) + include itself is bigger,
                // take max to current LIS.
                LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
            }
        }
    }

    return Math.max(...LIS);
};

export { lengthOfLIS };
