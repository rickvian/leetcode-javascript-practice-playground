/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a
 * different day in the future to sell that stock. Return the maximum profit you can achieve
 * from this transaction. If you cannot achieve any profit, return 0.
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // Solution implementation
    // [7, 1, 4, 3, 6, 3, 2, 1, 0]
    //     L

    // [7, 6, 5, 4, 3]
    //  L  R
    let leftIndex = 0;
    let rightIndex = 1;
    let currentMaxProfit = 0;

    while (rightIndex < prices.length) {
        let leftPrice = prices[leftIndex];
        let rightPrice = prices[rightIndex];
        const differences = rightPrice - leftPrice;

        if (differences > currentMaxProfit) {
            currentMaxProfit = differences;
        }

        // if find new low, move the pointer

        if (leftPrice > rightPrice) {
            // right is the new low and have better potential. we will buy here instead.
            leftIndex = rightIndex;
            rightIndex++;
        } else {
            // Left still low, seek higher right
            rightIndex++;
        }
    }

    return currentMaxProfit;


};

export { maxProfit }
