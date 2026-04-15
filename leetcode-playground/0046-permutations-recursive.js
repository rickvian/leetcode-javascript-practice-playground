/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * Approach: Recursive subproblem — reduce to permutations of nums[1:], then
 * insert nums[0] at every position of each sub-permutation.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    // use the idea of sub problem.
    // use recursion.
    // [1,2,3] <- return 
    // give me permutation just these 2 numbers

    // [2,3]
    // give me permutations just 3
    // [3] <- return [[3]]

    // give me permut of []

    // [] <- base case, return top 

    // -> [3] return permutations [[3]]

    // -> [2,3] -> return permutations [[2,3], [3,2]] (basically from [[3]], think that 2 can be added to front [2,3], or 2 can be added to back [3,2])

    // -> [1,2,3] -> for all previous return, [2,3] place 1 in every position ([1,2,3], [2,1,3], [2,3,1])  [3,2] place 1 in every position ([1,3,2], [3,1,2], [3,2,1])

    if (nums.length == 0) {
        return [[]]
    }

    const perms = permute(nums.slice(1)) // index 1 to last. 
    const res = []

    for (p of perms) {
        // iterate through all permutations.

        for (let i = 0; i < p.length + 1; i++) {
            // insert nums[0] in every position of number that did not pased into the sub problem,.
            const toInsert = p.toSpliced(i, 0, nums[0])
            res.push(toInsert)
        }


    }
    return res
};

export { permute };
