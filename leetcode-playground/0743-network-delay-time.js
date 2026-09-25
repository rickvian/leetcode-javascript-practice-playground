/**
 * You are given a network of n nodes, labeled from 1 to n, and a list of
 * directed edges times[i] = (ui, vi, wi) with travel time wi. Sending a signal
 * from node k, return the minimum time it takes for all n nodes to receive the
 * signal, or -1 if it is impossible.
 *
 * https://leetcode.com/problems/network-delay-time/description/
 *
 * @param {number[][]} times - Directed edges [ui, vi, wi]
 * @param {number} n - Number of nodes (labeled 1 to n)
 * @param {number} k - Source node
 * @return {number} Minimum time for all nodes to receive the signal, or -1
 *
 * @constraints
 * - 1 <= k <= n <= 100
 * - 1 <= times.length <= 6000
 * - times[i].length == 3
 * - 1 <= ui, vi <= n
 * - ui != vi
 * - 0 <= wi <= 100
 * - All the pairs (ui, vi) are unique
 */
var networkDelayTime = function (times, n, k) {
  // implement
};

export { networkDelayTime };
