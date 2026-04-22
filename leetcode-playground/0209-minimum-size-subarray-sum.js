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
  let minLength = Infinity;
  let currentSum = 0;

  // [1, 2, 3, 4, 5]
  //  L
  //  R

  // while the pointer moves, we can maintain running sum, moving right means add more to sum
  // moving left, means subtract it.
  // so we will always keep the sum of the range without extra loop

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right]; // when right moves, we add into running sum

    while (currentSum >= target) {
      // if the currentSum finally more than target, we will keep moving left pointer to shrink it to minimum
      // found new match,
      // as it shrinking the width, we update the new record
      minLength = Math.min(minLength, right - left + 1); // +1 because inclusive

      // since left take out number, we have to exclude from new sum
      currentSum -= nums[left];

      // move left
      left++;
    } // when left moved enough, right will continue move until last one
  }

  // edge case if we cant find

  if (minLength === Infinity) return 0;
  return minLength;
};

var minSubArrayLen = minSubarrayLenMinimalApproach;

export { minSubArrayLen };
