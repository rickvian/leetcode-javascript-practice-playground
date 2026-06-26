/**
 * 91. Decode Ways
 * https://leetcode.com/problems/decode-ways/
 * Difficulty: Medium
 *
 * You have intercepted a secret message encoded as a string of numbers. The message
 * is decoded via the following mapping:
 * "1" -> 'A'
 * "2" -> 'B'
 * ...
 * "25" -> 'Y'
 * "26" -> 'Z'
 *
 * However, while decoding the message, you realize that there are many different
 * ways you can decode the message because some codes are contained in other codes
 * ("2" and "5" vs "25").
 *
 * For example, "11106" can be decoded into:
 * - "AAJF" with the grouping (1, 1, 10, 6)
 * - "KJF" with the grouping (11, 10, 6)
 * - The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6"
 *   is valid).
 *
 * Note: there may be strings that are impossible to decode.
 *
 * Given a string s containing only digits, return the number of ways to decode it.
 * If the entire string cannot be decoded in any valid way, return 0.
 *
 * The test cases are generated so that the answer fits in a 32-bit integer.
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s == null || s.length === 0) return 0;
  if (s[0] === "0") return 0;

  const group = new Array(s.length + 1).fill(0);
  group[0] = 1;
  group[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const a = Number(s.slice(i - 1, i));
    if (a >= 1 && a <= 9) {
      group[i] += group[i - 1];
    }

    const b = Number(s.slice(i - 2, i));
    if (b >= 10 && b <= 26) {
      group[i] += group[i - 2];
    }
  }

  return group[s.length];
};

var numDecodings = function (s) {
  // top down approach
  // imagine if we only have 1 item, the last item,
  // [1,2,1]
  //      ^
  // the ways to decode index 3 is only 1 way
  //   ------
  //
  // [1,2,1]
  //    ^
  // then we find ways to decode from 2nd last item to last item.
  // [1,2,1]
  //    ^
  //  since it can be coded as [21] or [2] and [1], it can be coded as 2
  // when decoding [2] and [1], its the "same way" when we decode only last item as [1]
  // its the same decision path
  //
  let dp = {
    [s.length]: 1,
  }; // top down approach

  // [ 1, 2, 3]
  //         ^
  for (let i = s.length - 1; i > -1; i--) {
    // char occurrences scenario

    if (s[i] === "0") {
      dp[i] = 0; // no way to decode, imagine  0,1,2 -> no way to decode because we have 0
    } else {
      // s[i] is digit 0-9, we can consider it as same primary way of "picking 1 digit" decision path
      dp[i] = dp[i + 1];
    }

    // check if possible to add extra branching decision,
    // can we instead of picking 1 digit to decode, we merge it with next digit
    // but it must be between 1-23 to be valid new branching

    if (
      // ensure we are not picking next char out of boundary.
      (i + 1 < s.length &&
        // if its "1", we can combine with any next digit just fine
        s[i] === "1") ||
      // if its "2", the next digit must be "0-6"
      (s[i] === "2" && /[0-6]/.test(s[i + 1]))
    ) {
      // we can form new branch of decision,
      // where current digit merged to next digit
      // eg [2,3] we add extra path [23]
      // taking 2 current character means we skips 2 position,
      // now it depends how many ways so far for characters 2 over (dp[i+2])
      dp[i] = dp[i] + dp[i + 2];
    }
  }

  return dp[0];
};
