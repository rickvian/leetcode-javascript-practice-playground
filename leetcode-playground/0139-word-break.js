/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into
 * a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 *
 * https://leetcode.com/problems/word-break/description/
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/**
 * Approach: Backward DP
 * dp[i] = true means s[i..n) can be fully segmented by wordDict.
 * Scan i from right to left; for each dictionary word check if it matches
 * s[i..i+word.length) and whether the remaining suffix dp[i+word.length] is
 * also breakable. Base case dp[s.length] = true (empty suffix).
 *
 * Example: s = "leetcode", wordDict = ["leet", "code"]
 *   i=4: "code" matches → dp[4] = dp[8] = true
 *   i=0: "leet" matches → dp[0] = dp[4] = true  ✓
 *
 * Time:  O(n · m · w) — n positions × m words × w chars per comparison
 * Space: O(n)          — dp array of length n+1
 */
var wordBreak = function (s, wordDict) {
  let dp = Array.from({ length: s.length + 1 }, () => false);

  dp[s.length] = true;

  for (let i = s.length - 1; i > -1; i--) {
    for (let word of wordDict) {
      if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
        dp[i] = dp[i + word.length];
      }

      if (dp[i]) break;
    }
  }

  return dp[0];
};

export { wordBreak };
