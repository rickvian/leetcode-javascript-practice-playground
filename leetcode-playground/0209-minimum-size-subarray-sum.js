/**
 * Given an array of positive integers and a target, return the minimal length
 * of a contiguous subarray whose sum is >= target, or 0 if none exists.
 *
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/
 *
 * @param {number} target - Target sum to meet or exceed
 * @param {number[]} nums - Array of positive integers
 * @return {number} Minimal subarray length, or 0 if unreachable
 */

var minSubArrayLenGenerateSumApproach = function (target, nums) {
  // [2, 3, 1, 2, 4,   3]
  // [2, 5, 6, 8, 12, 15] left sum

  //                   L
  //                      R

  // 2 - 2 = 0 // not enough move right
  // 8 - 0 = 6 // too much , move left
  // 8 - 2(prevsum) = 6 // not enough, move right
  // 12 - 2 = 10 // too much, move left.
  // 12 -5 = 7 // exact, perfect, record, move right

  // 15 - 5 = 10 // to much, move left
  // 15- 6 = 9 // too much
  // 15 - 8 = 7 // 7 perferct, record, moving on
  // 15 - 12 = 3 // too low, move right
  // end. got the result.

  // 2 + 3+ 1 + 2 = 8 // over
  // 3 + 1 + 2 + 4 = 10 // over
  // 1 + 2 + 4 = 7 // found
  // 2,4,3 = 9 // over

  // 4,3 = 7 // found

  // when R at last, keep looping left until last...
  // 3 = 3

  // min = 2;

  // collect left sum first
  // [2, 3, 1, 2,  4,  3]
  // [2 ,5, 6, 8, 12,  15] sum
  //  L
  //  R

  let leftSum = Array.from({ length: nums.length }, () => 0); // [2 ,5, 6, 8, 12,  15] sum

  for (let i = 0; i < nums.length; i++) {
    leftSum[i] = nums[i] + leftSum[Math.max(i - 1, 0)]; // lock to 0
  }

  // now we have the sum collection, lets do pointer sliding

  let left = 0;
  let right = 0;
  let minimalLength = +Infinity;

  while (right < nums.length) {
    const leftSumValue = left === 0 ? 0 : leftSum[left - 1];
    const leftSumRight = leftSum[right];

    if (leftSumRight - leftSumValue < target) {
      // move right pointer to get more value towards target
      right++;
    } else if (leftSumRight - leftSumValue >= target) {
      // greater than equal the target, this is what we want

      // its equal the target.
      minimalLength = Math.min(right - left + 1, minimalLength);
      // moving on

      left++; // we move left instead of right, because moving right will just increase the length
      // there is no reason to find such longer than
    }
  }

  if (minimalLength === Infinity) return 0; // no target found

  return minimalLength;
};

var minSubarrayLenMinimalApproach = function (target, nums) {
  let left = 0;
  let currentSum = 0;
  let minimalLength = Infinity;

  // target: 11
  // [1,2,3,4,5]
  //    L
  //          R
  //  i
  // currentSum : 14

  // min 5

  // iterate over right
  for (let right = 0; right < nums.length; right++) {
    //
    currentSum += nums[right]; // maintain running sum variable.

    // Shrink the window as much as possible while maintaining the sum >= target
    while (currentSum >= target) {
      // fullfil criteria
      minimalLength = Math.min(minimalLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minimalLength === Infinity ? 0 : minimalLength;
};

var minSubArrayLen = minSubarrayLenMinimalApproach;

export { minSubArrayLen };
