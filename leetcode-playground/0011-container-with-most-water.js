/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // brute force
  // how human will solve this
  // maxArea = 0;
  //[1, 8, 6, 2, 5, 4, 8, 3, 7]
  // i  j // 1x8 check
  //
  //[1, 8, 6, 2, 5, 4, 8, 3, 7]
  //   i     j // 1x6 check area
  // ...
  //
  //[1, 8, 6, 2, 5, 4, 8, 3, 7]
  //    i  j // 8x6 check
  // loop of n through n times, n^2, not optimal
  // we can do pointer approach
  // this can be done because we leverage the fact that when bottleneck pointer found,
  // we can skip entirely combination of other non-bottleneck pointer afterwards.
  // [1, 5, 4, 3]
  //  L
  //           R
  //  0  1  2  3
  // 1 and 3, meaning min(left,right) * RIndex - LIndex
  // min(1,3) * 3-0 = 1 * 3 = 3 area
  //
  // ----
  // 1 is bottle neck., next move is to:
  // move L pointer, continue check the area
  //
  // why not then also check combination of right pointer that move left?
  // [1, 5, 4, 3]
  //  L
  //           R
  //  0  1  2  3
  // min(1,4) * 2-0 = 1 * 2 = 2 area // see L pointer bottleneck the container
  // no matter how high is New R, it always result smaller container.
  // if you keep moving the R pointer, the container with most water will just shrinking
  // there are no reason to check entire combination loop for same L position,
  // checking all R moved to left will result smaller
  // hence we can stay with logic that move the smallest pointer, shrink it:
  //
  // [1, 5, 4, 3]
  //     L
  //           R
  //  0  1  2  3
  // min(5,3) * 3-1 = 3*3 = 6 area.
  // record as max

  let max = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // check if current area is bigger
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(currentArea, max);

    if (height[left] < height[right]) {
      // left is smaller, left is bottle neck, move it
      left++;
    } else {
      // right is bottle neck, move it
      right--;
    }
  }

  return max;
};

export { maxArea };
