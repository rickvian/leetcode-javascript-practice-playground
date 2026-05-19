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
  let numSet = new Set(nums); // O(n) — build set
  let longestStreak = 0;
  for (let num of nums) {
    // O(n) outer
    if (!numSet.has(num - 1)) {
      // only start of a sequence enters — amortizes the while to O(n) total
      // its start of new chain,
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        // O(sequence length) — each element visited at most once across all iterations
        currentNum++;
        currentStreak++;
      }
      longestStreak = Math.max(currentStreak, longestStreak);
    }
  }
  return longestStreak;
};

export { longestConsecutive };
