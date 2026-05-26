/**
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 * Difficulty: Easy
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct
 * ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 *
 * @complexity
 * Time: O(n)
 *   - Without memoization each call branches into 2 recursive calls → O(2^n)
 *   - The cache ensures each value 0..n is computed exactly once → n computations
 *   - Breakdown: O(n) unique subproblems × O(1) work each = O(n)
 *
 * Space: O(n)
 *   - Cache stores one entry per unique n → O(n)
 *   - Call stack depth reaches n before hitting base case → O(n)
 *   - Breakdown: O(n) cache + O(n) stack = O(2n) → O(n)
 */
var climbStairs = function (n) {
  const cache = new Map(); // O(n) space — stores each subproblem result once
  const memo = (n) => {
    if (n < 4) return n;
    if (!cache.has(n)) {
      cache.set(n, memo(n - 2) + memo(n - 1)); // O(n) total calls due to memoization
    }
    return cache.get(n);
  };
  return memo(n);
};

/**
 * @complexity
 * Time: O(n)
 *   - Single loop runs from i=2 to i=n → (n-1) iterations
 *   - Breakdown: O(n-1) → drop constant → O(n)
 *
 * Space: O(n)
 *   - dp object holds one entry for each step 0..n → n+1 entries
 *   - Breakdown: O(n+1) → drop constant → O(n)
 */
// DP build map
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

  for (let i = 2; i <= n; i++) { // O(n) — iterates once per step
    dp[i] = dp[i - 1] + dp[i - 2]; // O(n) total entries stored in dp
  }
  return dp[n];
};

/**
 * @complexity
 * Time: O(n)
 *   - Single loop runs from i=2 to i=n → (n-1) iterations
 *   - Breakdown: O(n-1) → drop constant → O(n)
 *
 * Space: O(1)
 *   - Only two variables (prev, curr) regardless of n
 *   - Breakdown: 2 variables → O(2) → drop constant → O(1)
 */
// 0(1) space solution
var climbStairs = function (n) {
  let [prev, curr] = [1, 1]; // O(1) — two scalar variables, no growth with n
  for (let i = 2; i <= n; i++) { // O(n) — single pass
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
};
