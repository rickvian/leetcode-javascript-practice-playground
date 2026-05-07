/**
 * Evaluate Division
 *
 * https://leetcode.com/problems/evaluate-division/description/
 *
 * @param {string[][]} equations - Array of variable pairs representing division equations
 * @param {number[]} values - Array of division values for corresponding equations
 * @param {string[][]} queries - Array of variable pairs to evaluate
 * @return {number[]} - Array of results for each query, -1.0 if unable to determine
 *
 * @constraints
 * - 1 ≤ equations.length ≤ 20
 * - equations[i].length == 2
 * - 1 ≤ equations[i][0].length, equations[i][1].length ≤ 5
 * - equations[i][0] != equations[i][1]
 * - 0.0 < values[i] ≤ 20.0
 * - 1 ≤ queries.length ≤ 20
 * - queries[i].length == 2
 * - 1 ≤ queries[i][0].length, queries[i][1].length ≤ 5
 * - equations[i][0], equations[i][1], queries[i][0], queries[i][1] consist of lower case English letters
 */
var calcEquation = function(equations, values, queries) {
    // implement
};

export { calcEquation };
