/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * Approach: Recursive subproblem — reduce to permutations of nums[1:], then
 * insert nums[0] at every position of each sub-permutation.
 *
 * Time Complexity: O(n! × n)
 *   - We generate n! permutations (unavoidable — that's the answer size)
 *   - For each permutation, we perform O(n) work: inserting nums[0] at each of n+1 positions
 *   - At recursion level k, we insert k copies of different elements across (k-1)! permutations
 *   - Total across all levels: n! + (n-1)! + ... + 2! + 1! × work = O(n! × n)
 *   - WHY: The output itself is n! × n in size; we can't do better than that
 *
 * Space Complexity: O(n! × n) for output + O(n) for recursion stack = O(n! × n)
 *   - Output storage: n! permutations × n elements per permutation = O(n! × n)
 *   - Recursion call stack depth: O(n) (one call per element)
 *   - EXAMPLE: For [1,2,3]:
 *     • n = 3, so n! = 6 permutations
 *     • Result: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 *     • Output size = 6 permutations × 3 elements each = 18 total elements stored
 *     • This is 3! × 3 = 18, which is n! × n
 *   - HOW TO UNDERSTAND: The dominant factor is the output size (n! × n). The recursion
 *     depth is negligible compared to the massive output. In general, generating all
 *     permutations always requires space proportional to the total output size.
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


    // requirement output [[]]
    if (nums.length == 0) {
        return [[]]
    }


    // example case [1,2]
    // we need to call recursive on subproblem 
    // we start with [1,2], means for this level we need combine 1 with rest of number's permutation
    // call [2] permutation -> down the line it will call [], and return [] -> return [2] 

    const perm = permute(nums.slice(1)) // take items from index 1 to last
    let result = []
    // [2,3] -> [1,2,3] [2,1,3] [2,3,1]
    // [3,2] - >
    for (p of perm) {
        // insert num[0] to all poisition in p
        for (let i = 0; i < p.length + 1; i++) {
            // +1 due to extra number to insert
            result.push(p.toSpliced(i, 0, nums[0]))  // add start from index i, replace none (0), with nums[0]

        }

    }

    return result

};

export { permute };
