/**
 * You are given an integer array coins representing coins of different denominations and an integer
 * amount representing a total amount of money. Return the fewest number of coins that you need to
 * make up that amount. If that amount of money cannot be made up by any combination of the coins,
 * return -1.
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // stub
  // we can explore the coins combination by building decision tree
  // notice that in different decision branch to find minimum coin, we have leftover amount,
  //  that resolves to same amount of minimum coins

  let dp = Array.from({ length: amount + 1 }, () => amount + 1); // unreachable value for minimum coin, useful later, to check if we don't have possible coin combination

  // set initial value

  dp[0] = 0;

  for (let a = 1; a < amount + 1; a++) {
    // we building up dp solution to the target amount.

    for (let c of coins) {
      //
      if (a - c >= 0) {
        // process if the amount have leftover only after picking this coin

        dp[a] = Math.min(dp[a], 1 + dp[a - c]); // check dp[a], if this dp[a] is replaceable with 1 coin a-c and is actually have better solution to this leftover?
      }
    }
  }

  if (dp[amount] === amount + 1) return -1;

  return dp[amount];
};

export { coinChange };
