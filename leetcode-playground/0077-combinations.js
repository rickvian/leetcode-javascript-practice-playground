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
  // implement

  let stack = []; // use stack to track decision on current combination path exploration
  let result = [];

  function helper(start) {
    //2
    // start decision tree
    // base case:
    if (stack.length === k) {
      // when stack is enough for capture
      result.push([...stack]); // clone the state of stack.
      return;
    }

    for (let i = start; i <= n; i++) {
      // ^ i <= n because you started at 1 to includes n (this case n=4, 4 is included.)
      // start decision tree
      stack.push(i); // picked i (because the number of 1-n, if you need characters, access its index string[i])
      //! when you pick next number, it must be i+1, cos combination don't allow duplicate pick:
      helper(i + 1); // in case order matters, reuse allowed, pass same i,
      // incase order does not matter, no reuse, pass i+1 (skip over that character)
      stack.pop(); // [1,3]
    }
  }

  helper(1);

  return result;
};

export { combine };
