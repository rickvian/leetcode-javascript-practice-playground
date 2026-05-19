/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 *
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 *
 * @param {number[]} nums
 * @return {number}
 *
 * @complexity
 * Time:  O(n²)
 *   - Map build loop: O(n)
 *   - Outer loop: O(n)
 *   - Inner while loop (no start-of-sequence guard): each element can re-enter a chain
 *     already traversed by an earlier element. Worst case (fully consecutive array):
 *     element at index 0 traverses n-1 steps, index 1 traverses n-2 steps, …
 *     → (n-1) + (n-2) + … + 0 = n(n-1)/2 = O(n²)
 *   Total: O(n) + O(n²) → O(n²)
 *
 * Space: O(n)
 *   - Map stores one entry per element → O(n)
 */
var longestConsecutive = function (nums) {
  // form a map of index
  // when iterating each item, if there are n + 1 exist in the map, then we continue look it up
  // until we found none, then record the longest streak

  let mapper = new Map(); // [number] : index

  for (let i = 0; i < nums.length; i++) {
    // O(n) — build map
    mapper.set(nums[i], i);
  }

  // now we look for longest streak as we iterate
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    // O(n) outer
    let currentStreak = 1; // each fresh iteration we reset.

    let currentNumber = nums[i];
    // does it have next consecutive item, we keep looking next after next number until streak ended.
    while (mapper.get(currentNumber + 1) !== undefined) {
      // O(n) worst case per iteration — no start guard
      // it has next consecutive item
      // if yes, we keep looking for next item.
      // record the length so far
      currentStreak++;
      longest = Math.max(longest, currentStreak);

      currentNumber = currentNumber + 1;
    }
  }

  return longest;
};

/**
 * @complexity
 * Time:  O(n)
 *   - Set build: O(n)
 *   - Outer for loop: O(n)
 *   - Inner while loop: the `!numSet.has(num - 1)` guard ensures the while only
 *     runs from the start of a sequence. Every element belongs to exactly one
 *     sequence start, so across all outer iterations the while loop steps total O(n).
 *     O(n) outer + O(n) total while steps → O(2n) → O(n)
 *   Total: O(n) build + O(n) traversal → O(2n) → O(n)
 *
 * Space: O(n)
 *   - Set stores one entry per unique element → O(n)
 */
var longestConsecutiveOptimized = function (nums) {
  let numSet = new Set(nums); // O(n) — build set
  let longestStreak = 0;
  for (num of nums) {
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

var longestConsecutive = longestConsecutiveOptimized;
export { longestConsecutive };
