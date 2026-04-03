/**
 * Count the number of ways to climb n stairs when you can climb 1 or 2 steps at a time.
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 * @param {number} n - Number of stairs to climb
 * @return {number} Number of distinct ways to climb the stairs
 */
var climbStairs = function (n) {
    // Solution implementation
    // DP approach

    /**
     *               4- only possible to reach via 3(1 step) and 2(2 step), hence all possible way to reach 3 adds with from step 2, 1+3 = 4
     *           3- whats the possible way to reach this? from step 1 and step 2, hence all possible way from them are totalled. 1+2=3
     *        2- 2 way (0->1 or 0->2)
     *     1- < 1 way (0->1)
     *  0- <1 way
     */

    const dp = new Array(n + 1);

    // base case

    if (n == 1) return 1;
    if (n == 2) return 2;
    let prev1 = 1;
    let prev2 = 2;

    for (let i = 3; i <= n; i++) {
        // dp[i] = dp[i - 1] + dp[i - 2];

        // alternative
        let current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    // since we calculate and store all dp from 0 to n, space complexity is N, though they are not all used, we can store as temporary variable,
    // prev1 and prev2, replacing them as we build up, we can reach answer without keeping whole dp memo

    return prev2;

    // time complexity : O(n)
    // space complexity:
};

export { climbStairs }
