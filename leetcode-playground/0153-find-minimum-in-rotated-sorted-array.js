/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      // we are in lefter portion, pivot is somewhere on right
      left = mid + 1;
    } else {
      // we are in righter portion or at the pivot
      right = mid;
    }
  }

  return nums[right];
};

export { findMin };
