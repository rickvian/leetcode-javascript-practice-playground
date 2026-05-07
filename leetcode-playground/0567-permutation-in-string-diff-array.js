/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 * https://leetcode.com/problems/permutation-in-string/
 *
 * Approach: single diff array
 * Instead of two count arrays + a matches counter, use one array where diff[i] = s1Count[i] - s2Count[i].
 * Zero means balanced for that character. Track how many positions are at zero (zeros).
 * When zeros === 26, the window is a valid permutation.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 *
 * Time:  O(s1 + s2)
 * Space: O(1) — single fixed-size array of 26
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const a = "a".codePointAt(0);
  const diff = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    diff[s1[i].codePointAt(0) - a]++;
    diff[s2[i].codePointAt(0) - a]--;
  }

  let zeros = diff.filter((x) => x === 0).length;

  for (let r = s1.length; r < s2.length; r++) {
    if (zeros === 26) return true;

    // slide R in: window gains a character, diff decreases
    const rIdx = s2[r].codePointAt(0) - a;
    if (diff[rIdx] === 0) zeros--;   // was balanced, about to break
    diff[rIdx]--;
    if (diff[rIdx] === 0) zeros++;   // now balanced

    // slide L out: window loses a character, diff increases
    const lIdx = s2[r - s1.length].codePointAt(0) - a;
    if (diff[lIdx] === 0) zeros--;   // was balanced, about to break
    diff[lIdx]++;
    if (diff[lIdx] === 0) zeros++;   // now balanced
  }

  return zeros === 26;
};

export { checkInclusion };
