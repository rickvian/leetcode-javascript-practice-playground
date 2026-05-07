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
  const freq = new Map();
  let left = 0;
  let maxFreq = 0; // record the longest freq
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    freq.set(c, (freq.get(c) ?? 0) + 1); // increment once
    maxFreq = Math.max(maxFreq, freq.get(c)); // only update maxFreq if new freqIs Found
    // Window grew by 1 and maxFreq grew by ≤ 1, so the constraint is
    // violated by at most 1 — a single shrink restores validity.
    if (right - left + 1 - maxFreq > k) {
      freq.set(s[left], freq.get(s[left]) - 1); // not enough k to replace chars to keep the window, move left
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1); // update with current window length if its longer
  }

  return maxLength;
};

export { characterReplacement };
