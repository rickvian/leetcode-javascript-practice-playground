/**
 * A message containing letters from A-Z can be encoded into numbers using the mapping
 * 'A' -> "1", 'B' -> "2", ..., 'Z' -> "26". Given a string s containing only digits,
 * return the number of ways to decode it.
 *
 * https://leetcode.com/problems/decode-ways/description/
 *
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  // so there are only 2 decision to branch

  // keep picking 1 digit

  // or start picking 2 digit, then can continue pick 2 digit or pick 1 digit

  // only when branching it will increase the number of ways

  // the primary path is picking 1 digit always, its counted as 1 path, 1 ways.

  // we can do bottom up approach
  // [1,2]

  // to get number of ways in 1, we can check if there are branching
  // can we pick 1 more digit? considered same path
  // can we pick 2 digit instead? add to new path.

  // [1,2,1]
  //  3 2 1

  let dp = {
    [s.length]: 1,
  };

  for (let i = s.length - 1; i > -1; i--) {
    // char occurrences scenario

    if (s[i] === "0") {
      dp[i] = 0; // no possible way to decode
    } else {
      // s[i] is digit, we can consider same primary way of decode picking 1
      dp[i] = dp[i + 1];
    }

    // now check for possible extra branching to add.
    if (
      // within boundary, ensure next character can accommodate 2 digit number
      i + 1 < s.length &&
      // fullfil requirement of 2 digit decision decode
      // condition for 10-19
      (s[i] === "1" ||
        // condition for 20 - 26
        (s[i] === "2" && new RegExp("[0-6]").test(s[i + 1])))
    ) {
      // can take 2 digit, meaning we get extra ways
      dp[i] = dp[i] + dp[i + 2]; // combine with branching ways on character after next
    }
  }

  return dp[0];
};

export { numDecodings };
