/**
 * 322. Coin Change
 * https://leetcode.com/problems/coin-change/
 * Difficulty: Medium
 *
 * You are given an integer array coins representing coins of different denominations and an
 * integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount. If that amount of
 * money cannot be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * @complexity
 * Time:
 *   - Outer loop: O(amount)
 *   - Inner loop: O(n) per amount value, n = coins.length
 *   - Total: O(amount) * O(n) = O(amount * n)
 *
 * Space:
 *   - counts array: O(amount + 1) = O(amount)
 */
var coinChange = function (coins, amount) {
  // Fill with amount+1 as (Sentinel) "not found yet" placeholder — real answer always < amount+1
  // e.g. coins=[1,2,5], amount=5 → counts = [0, 6, 6, 6, 6, 6]
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0; // base case: 0 coins to make amount 0

  for (let a = 1; a <= amount; a++) {
    // O(amount)
    for (let coin of coins) {
      // O(n)
      if (a - coin >= 0) {
        // Recurrence: fewest coins for i = 1 coin + fewest coins for (i - coin)
        // e.g. i=3, coin=2: counts[3] = min(counts[3], 1 + counts[1])
        dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
      }
    }
  }

  // Still the "impossible" placeholder → no valid combination exists
  if (dp[amount] === amount + 1) return -1;

  return dp[amount];
};
