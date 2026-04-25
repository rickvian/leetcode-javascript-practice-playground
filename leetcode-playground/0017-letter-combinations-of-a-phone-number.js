/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations the number could represent.
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const chars = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  // pre-build candidate buckets: each slot = letters for that digit
  // e.g. "23" → [["a","b","c"], ["d","e","f"]]
  const candidateBuckets = digits.split("").map((d) => chars[d]);

  const stack = [];
  const result = [];

  // remainingBuckets: buckets we haven't picked a letter from yet
  function backtrack(remainingBuckets) {
    if (remainingBuckets.length === 0) {
      result.push(stack.join(""));
      return;
    }

    for (const ch of remainingBuckets[0]) {
      stack.push(ch);
      backtrack(remainingBuckets.slice(1)); // pass remaining buckets to next call
      stack.pop();
    }
  }

  backtrack(candidateBuckets);

  return result;
};

export { letterCombinations };
