/**
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 * - Only numbers 1 through 9 are used.
 * - Each number is used at most once.
 * Return a list of all possible valid combinations. The list must not contain the same combination twice,
 * and the combinations may be returned in any order.
 *
 * https://leetcode.com/problems/combination-sum-iii/description/
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// Approach: Backtracking
// Mental model: "I'm building a combo slot by slot. At each slot I pick a digit,
// go deeper to fill the next slot, then undo my pick and try the next digit."
//
// Three rules that drive every decision:
//   1. Only digits 1–9, each used at most once.
//   2. Always pick in increasing order — so [1,2,3] is tried but never [3,2,1].
//      This is what `nextDigit` enforces: the next digit must be > the current one.
//   3. Stop as soon as the combo has k digits; collect it only if the sum matches.
//
// Time:  O(k · C(9,k))  — C(9,k) leaf nodes, each costs O(k) to copy into result
// Space: O(k)            — recursion depth equals combo length (at most k frames)
//
// Alternative approaches:
// 1. Iterative bitmask — enumerate all 2^9 subsets of {1..9}, filter those with exactly k set bits and sum == target. O(512) constant time, simpler but less general.
// 2. BFS / queue — level-by-level expansion; same complexity but higher space usage.
var combinationSum3 = function (k, target) {
  const result = [];
  const combo = [];

  // `nextDigit` = smallest digit we're allowed to pick next (enforces no repeats + ascending order)
  // `remaining` = how much sum we still need
  function backtrack(nextDigit, remaining) {
    // Combo is full — valid only if we've hit the exact target sum
    if (combo.length === k) {
      if (remaining === 0) result.push([...combo]);
      return;
    }

    for (let digit = nextDigit; digit <= 9; digit++) {
      combo.push(digit);                       // choose
      backtrack(digit + 1, remaining - digit); // explore (next digit must be larger)
      combo.pop();                             // undo (backtrack)
    }
  }

  backtrack(1, target);

  return result;
};

// --- Complexity breakdown ---
//
// At the first level of the recursion tree, there are 9 choices (digits 1–9).
// At the second level, 8 choices (digits greater than what was picked).
// At the third level, 7 choices. This continues down k levels.
//
// Total ordered paths = 9 × 8 × 7 × ... × (9 - k + 1)   →  9! / (9-k)!
//
// But because we always pick in increasing order, each unique combination
// is visited exactly once — not k! times. So we divide out the duplicate count:
//
//   9! / (k! · (9-k)!)   ←  this is what C(9,k) means
//
// Example with k=3:
//   9 × 8 × 7 = 504 ordered triples
//   ÷ 3! = 6             (e.g. [1,2,3] and [3,2,1] are the same combo)
//   = 84 unique combos explored
//   × k=3 to copy each one into result
//   = 252 total operations
//
// Time:  O(k · 9! / (k! · (9-k)!))  — in practice a small constant since pool is fixed at 9
// Space: O(k)                         — recursion depth is at most k frames deep

export { combinationSum3 };
