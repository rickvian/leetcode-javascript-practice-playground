/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 *
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let numSet = new Set(nums);
  let longestStreak = 0;

  for (num of nums) {
    if (!numSet.has(num - 1)) {
      // its start of new chain,

      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(currentStreak, longestStreak);
    }
  }

  return longestStreak;
};

export { longestConsecutive };
