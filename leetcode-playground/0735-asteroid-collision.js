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
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  //   (3, 2, 1, -10);
  // 10 will collide with all and destroy all
  // we can use stack to track current asteriod that going right
  // and as we find collision, we delete those outgoing or upcoming asteroid accordingly

  let stack = [];
  let survived; // tracks whether the current asteroid survives all collisions

  for (let a of asteroids) {
    survived = true;

    // Collision only happens when a left-mover (a < 0) meets a right-mover on top of the stack.
    // Moving same direction or left-mover first: no collision.
    while (stack.length > 0 && a < 0 && stack.at(-1) > 0) {
      let top = stack.at(-1);
      // Use a + top to determine who wins:
      //   a + top < 0 → left-mover's magnitude dominates (e.g. -10 + 3 = -7)
      //   a + top > 0 → right-mover's magnitude dominates (e.g. -3 + 10 = 7)
      //   a + top === 0 → equal size, both explode
      let sum = a + top;
      if (sum < 0) {
        // Left-mover is bigger → right-mover (stack top) is destroyed, keep going
        stack.pop();
      } else if (sum > 0) {
        // Right-mover is bigger → left-mover is destroyed, stop colliding
        survived = false;
        break;
      } else {
        // Equal size → both destroyed
        stack.pop();
        survived = false;
        break;
      }
    }

    // only when survived, or not collide, it can be pushed to stack
    if (survived) stack.push(a);
  }

  return stack;
};

export { asteroidCollision };
