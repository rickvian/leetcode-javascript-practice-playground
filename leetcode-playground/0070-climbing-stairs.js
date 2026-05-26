/**
 * Count the number of ways to climb n stairs when you can climb 1 or 2 steps at a time.
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 * @param {number} n - Number of stairs to climb
 * @return {number} Number of distinct ways to climb the stairs
 */
var climbStairs = function (n) {
  // Solution implementation
  /*         
              -2
           -1
        -0


        1 + 1
        2
    */
  /*              -3
              -2
           -1
        -0


        1 + 1 + 1
        1 + 2
        2 + 1

        permutation
    */
  // easier to figure oout this backward
  // lets say target at 3.

  // how many ways we can reach step 3?
  // somewhere down reach it by taking 1 step
  // somewhere down reach it by taking 2 step
  // so there are 3 ways we can reach 3
  // from step 2 and from step 1 (total 2)

  // then to reach step 2 how many ways? there are 2 ways

  // to reach step 1 there are 1 ways.

  // so the

  /*

            reach 3 (3)
           /               |
          reach [2] (2)     + reach [1] (1)
          /         \
          reach[1]   reach[0]

    */

  let dp = {
    0: 1,
    1: 1,
  };

  // how to build dp[n]?

  // iterate from 0 to n to build the dp

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

export { climbStairs };
