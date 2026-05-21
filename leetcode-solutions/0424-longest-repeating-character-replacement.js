/**
 * You are given a string s and an integer k. You can choose any character of the string and change it
 * to any other uppercase English character. You can perform this operation at most k times.
 * Return the length of the longest substring containing the same letter you can get after performing
 * the above operations.
 *
 * https://leetcode.com/problems/longest-repeating-character-replacement/description/
 *
 * @param {string} s - The input string
 * @param {number} k - Maximum number of replacements allowed
 * @return {number} - Length of longest substring with same letter after at most k replacements
 */
// Sliding window. A window is valid when (windowLength - maxFreq) <= k,
// i.e. the non-dominant chars can all be replaced within the budget k.
//
// Time:  O(n) — right advances n times; left advances at most n times.
//        maxFreq is tracked lazily (never decreased), so no inner scan is needed.
// Space: O(1) — freq map holds at most 26 uppercase letters.
var characterReplacement = function (s, k) {
  let windowFreq = new Map();
  let l = 0;
  let r = 0;
  let maxFreq = 0; // lazy high-water mark — never decreased
  let maxLength = 0;

  while (r < s.length) {
    windowFreq.set(s[r], (windowFreq.get(s[r]) ?? 0) + 1);
    maxFreq = Math.max(windowFreq.get(s[r]), maxFreq);

    // window is invalid when non-dominant chars exceed replacement budget k:
    // (windowLen - maxFreq) > k
    if (r - l + 1 - maxFreq > k) {
      // `if` not `while`: we only care about windows LARGER than maxLength, so
      // we never need to shrink below the best size already found. Since r
      // moves by 1 each iteration, the constraint can be violated by at most 1,
      // so a single left-move always restores window size — just slides it forward.
      windowFreq.set(s[l], windowFreq.get(s[l]) - 1);
      l++;
    }

    maxLength = Math.max(maxLength, r - l + 1);
    r++;
  }

  return maxLength;
};
