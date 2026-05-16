/**
 * 139. Word Break
 * https://leetcode.com/problems/word-break/
 * Difficulty: Medium
 *
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into
 * a space-separated sequence of one or more dictionary words.
 *
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/**
 * Approach: Forward DP
 * result[i] = 1 means s[0..i) can be fully segmented by wordDict.
 * For each position i, scan all j < i: if result[j] is true AND s[j..i) is a
 * dictionary word, mark result[i] = 1 and move on.
 *
 * Base case: result[0] = 1 (empty prefix is always valid).
 *
 * Time:  O(n² · m) — n² substrings × includes() scan over m words
 * Space: O(n)       — dp array of length n+1
 */
var wordBreak = function (s, wordDict) {
  const result = [1, ...new Array(s.length + 1).fill(0)];

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (result[j] && wordDict.includes(s.slice(j, i))) {
        result[i] = 1;
        break;
      }
    }
  }

  return result[s.length];
};

/**
 * Approach: Backward DP (NeetCode style)
 * dp[i] = true means s[i..n) can be fully segmented by wordDict.
 * Iterate i from the end toward 0. For each word in the dictionary, check
 * whether it fits starting at i (boundary check) and matches the substring
 * (equality check). If so, dp[i] inherits dp[i + word.length]: the suffix
 * after consuming this word must also be breakable.
 *
 * Base case: dp[s.length] = true (empty suffix is always valid).
 * Answer: dp[0] — can the whole string be segmented?
 *
 * Example: s = "leetcode", wordDict = ["leet", "code"]
 *   i=4: "code" matches → dp[4] = dp[8] = true
 *   i=0: "leet" matches → dp[0] = dp[4] = true  ✓
 *
 * Time:  O(n · m · w) — n positions × m words × w chars per comparison
 * Space: O(n)          — dp array of length n+1
 */
var wordBreakDPNeetcode = function (s, wordDict) {
  let dp = Array.from({ length: s.length + 1 }, () => false);

  dp[s.length] = true;

  for (let i = s.length - 1; i > -1; i--) {
    for (let word of wordDict) {
      if (
        i + word.length <= s.length &&
        s.slice(i, i + word.length) === word
      ) {
        dp[i] = dp[i + word.length];
      }

      if (dp[i]) break;
    }
  }

  return dp[0];
};
