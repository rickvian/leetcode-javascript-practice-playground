/**
 * Given two integers n and k, return all possible combinations of k numbers chosen from the
 * range [1, n]. You may return the answer in any order.
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // pre-build candidate list: [1, 2, ..., n]
  const candidates = Array.from({ length: n }, (_, i) => i + 1);

  const stack = [];
  const result = [];

  // remainingCandidates: numbers we're still allowed to pick from
  function backtrack(remainingCandidates) {
    if (stack.length === k) {
      result.push([...stack]);
      return;
    }

    for (let i = 0; i < remainingCandidates.length; i++) {
      stack.push(remainingCandidates[i]);
      backtrack(remainingCandidates.slice(i + 1)); // pass numbers after current pick
      stack.pop();
    }
  }

  backtrack(candidates);

  return result;
};

export { combine };
