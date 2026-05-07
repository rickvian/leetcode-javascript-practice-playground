/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    // base case

    if (nums[mid] === target) return mid;

    // figure where we are at, is it left or right portion,
    // so we know the pivot is.
    if (nums[mid] >= nums[0]) {
      // mid is on left portion of sorted array
      // pivot is on right side, right has 2 condition
      if (target < nums[0] || target > nums[mid]) {
        // search right
        left = mid + 1;
      } else {
        //target < nums[mid] && target > nums[0]
        // search left
        right = mid - 1;
      }
    } else {
      // nums[mid] < nums[0]
      // mid is currently on RIGHT sorted portion of array.
      // pivot is somewhere on left, left rotated contains 2 conditions
      if (target >= nums[0] || target < nums[mid]) {
        // why target >= nums[0]? because left rotated section check includes nums[0]
        // search left
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      // mid is on right portion of sorted array
    }
  }

  return -1;
};

export { search };
