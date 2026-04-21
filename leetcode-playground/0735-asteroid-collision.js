/**
 * We are given an array asteroids of integers representing asteroids in a row.
 * For each asteroid, the absolute value represents its size, and the sign represents its direction
 * (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
 * Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one
 * will explode. If both are the same size, both will explode. Two asteroids moving in the same
 * direction will never meet.
 *
 * https://leetcode.com/problems/asteroid-collision/description/
 *
 * Approach: Monotonic Stack
 * - Use a stack to simulate left-to-right traversal.
 * - A collision only happens when a left-moving asteroid (negative) meets a right-moving one (positive) at the top of the stack.
 * - No collision: same direction (both positive or both negative) → push directly.
 * - On collision compare sizes (a + top):
 *     diff < 0 → incoming left-mover is larger → destroy stack top, keep checking.
 *     diff > 0 → stack top (right-mover) is larger → incoming asteroid is destroyed (a = 0).
 *     diff = 0 → both same size → both destroyed.
 * - Setting a = 0 is used as a sentinel to skip pushing and exit the inner while loop.
 *
 * Time Complexity : O(n) — each asteroid is pushed onto and popped from the stack at most once.
 * Space Complexity: O(n) — in the worst case (all right-moving or all left-moving), all n asteroids remain on the stack.
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let a of asteroids) {
    while (stack.length > 0 && a < 0 && stack.at(-1) > 0) {
      // collision: incoming moves left, top of stack moves right
      let top = stack.at(-1);
      let diff = a + top;

      if (diff < 0) {
        // incoming is larger — destroy the right-mover, keep checking
        stack.pop();
      } else if (diff > 0) {
        // right-mover is larger — incoming is destroyed
        a = 0;
      } else {
        // equal size — both destroyed
        stack.pop();
        a = 0;
      }
    }

    if (a !== 0) stack.push(a); // a survived all collisions
  }

  return stack;
};

export { asteroidCollision };
