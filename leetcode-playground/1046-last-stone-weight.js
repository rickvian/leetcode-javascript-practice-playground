/**
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 * We smash the two heaviest stones each turn; if equal both are destroyed, otherwise the
 * difference remains. Return the weight of the last stone, or 0 if none remain.
 *
 * https://leetcode.com/problems/last-stone-weight/description/
 *
 * @param {number[]} stones - Array of stone weights
 * @return {number}
 *
 * @constraints
 * - 1 <= stones.length <= 30
 * - 1 <= stones[i] <= 1000
 */
var lastStoneWeight = function (stones) {
  //   Input: stones = [2,3,6,2,4]

  let sortedStone = stones.toSorted((a, b) => a - b); // asc 2 2 3 4 6

  // At each step we choose the two heaviest stones,
  // when we will stop?
  while (sortedStone.length > 1) {
    // pick the biggest.
    let stone1 = sortedStone.pop();
    let stone2 = sortedStone.pop();

    // stone fight

    let diff = stone1 - stone2;

    if (diff === 0) {
      // destroy both, do nothing
    } else {
      // there are difference, put back remaining store
      sortedStone.push(Math.abs(diff));
    }

    sortedStone.sort((a, b) => a - b); // ascending sort, mimic the heap property
  }

  if (sortedStone.length === 1) return sortedStone.pop();

  return 0;
};

export { lastStoneWeight };
