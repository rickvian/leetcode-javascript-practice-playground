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
 * Approach 1: Forward DP
 * result[i] = 1 means s[0..i) can be segmented using wordDict.
 * For each position i, scan all split points j < i — if j was reachable AND s[j..i] is a word, mark i reachable.
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 *
 * @complexity
 * Outer loop: O(n) positions
 * Inner loop: O(n) split points per position → O(n²) pairs
 * Per pair: s.slice O(n) + wordDict.includes O(w·n) where w = wordDict.length
 * Total time: O(n² · w · n) = O(n³w)
 * Space: O(n) — result array of length n+1
 */
var wordBreak = function (s, wordDict) {
  // result[0]=1: empty prefix "" is always breakable (base case)
  // result[1..n]=0: unknown, to be filled
  const result = [1, ...new Array(s.length + 1).fill(0)];

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // if j is reachable AND the slice between j and i is a known word → i is reachable
      // e.g. s="leetcode", j=0,i=4: result[0]=1, "leet" in dict → result[4]=1
      if (result[j] && wordDict.includes(s.slice(j, i))) {
        result[i] = 1;
        break;
      }
    }
  }

  return result[s.length];
};

/**
 * Approach 2: Backward DP
 * dp[i] = true means s[i..n) can be segmented using wordDict.
 * Walk right-to-left: for each i, try every word — if it matches s[i..i+len) AND dp[i+len] is true → dp[i]=true.
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 *
 * @complexity
 * Outer loop: O(n) positions (right to left)
 * Inner loop: O(w) words per position where w = wordDict.length
 * Per word: s.slice comparison O(word.length) ≈ O(n)
 * Total time: O(n · w · n) = O(n²w)
 * Space: O(n) — dp array of length n+1
 */
var wordBreak = function (s, wordDict) {
  let dp = Array.from({ length: s.length + 1 }, () => false);
  // dp[n]=true: empty suffix "" needs no words — base case for backward recursion
  dp[s.length] = true;

  // dp[8]
  // Input: s = "neetcode", wordDict = ["neet","code"]

  for (let i = s.length - 1; i > -1; i--) {
    // dp[7]

    // can 'e" match any characters in wordDict

    const current = s[i];
    for (let word of wordDict) {
      const withinBoundary = word.length + i <= s.length;
      const followingWordMatch = s.slice(i, i + word.length) === word;
      // if word matches at position i AND the rest of the string after it is also breakable
      // e.g. i=4, word="code": s[4..8]="code" matches, dp[8]=true → dp[4]=true
      if (withinBoundary && followingWordMatch) {
        // we can match that
        dp[i] = dp[i + word.length];
        // dp[i] can be still false
      }

      // before we decide to stop checking other word
      // we need to ensure if its guaranteed to clearable from here

      if (dp[i]) break;

      // otherwise, we still need to check other words
      // they still possibly can make dp[i] become true.
    }
  }

  return dp[0];
};
