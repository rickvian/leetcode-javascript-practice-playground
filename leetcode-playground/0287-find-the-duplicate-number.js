/**
 * Given an array of n + 1 integers where each integer is in the range [1, n] inclusive,
 * return the only number that appears more than once.
 *
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 *
 * @param {number[]} nums - Array of n + 1 integers in range [1, n]
 * @return {number}
 */
var findDuplicate = function (nums) {
   **
 * FLOYD'S CYCLE-FINDING ALGORITHM (Tortoise and the Hare)
        * * INTUITION:
 * Imagine the array as a Linked List where each value nums[i] is a
        * pointer to the next index.If a number is duplicated, it means
            * two different indices point to the same value, creating a cycle.
 * The duplicate number is the "entrance" to that cycle.
 */

    // Initialize two pointers starting at the first element (index 0)
    let [slow, fast] = [0, 0];

    /**
     * PHASE 1: DETECT THE CYCLE
     * We move 'fast' twice as fast as 'slow'. If there is a cycle, 
     * they will eventually collide at some meeting point inside the cycle.
     */
    while (true) {
        // slow moves 1 step: f(x)
        slow = nums[slow];
        // fast moves 2 steps: f(f(x))
        fast = nums[nums[fast]];

        // If they meet, the cycle is confirmed.
        if (slow === fast) break;
    }

    /**
     * PHASE 2: FIND THE CYCLE ENTRANCE (The Duplicate)
     * Math proof: The distance from the start to the entrance (L) is equal 
     * to the distance from the meeting point to the entrance.
     * * We keep 'slow' at the meeting point and start 'slow2' from the beginning.
     * By moving both at 1 step per iteration, they will meet exactly at the 
     * entrance/duplicate.
     */
    let slow2 = 0;
    while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];

        // The meeting point is the duplicate value
        if (slow === slow2) return slow;
    }

    /**
     * ANALYSIS:
     * - Time Complexity: O(n) -> We traverse the sequence at most twice.
     * - Space Complexity: O(1) -> We only use two variables regardless of input size.
     */
};

export { findDuplicate }
