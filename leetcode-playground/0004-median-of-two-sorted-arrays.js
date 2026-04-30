/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let A = nums1;
  let B = nums2;

  if (B.length < A.length) {
    [A, B] = [B, A]; // A is always the smaller array
  }

  // Intuition:
  // The median always sits at a fixed split point — the left half of the combined total.
  // That left half is made up of some elements from A and some from B.
  // If we decide how many elements A contributes (i+1), then B's contribution is fixed: half - (i+1).
  // So the partition on B is derived, not searched — there is only one unknown: the partition index on A.
  //
  // We binary search A's partition index until the cross-comparison is satisfied.
  // The cross-comparison is the invariant of a correctly split merged array:
  //   every element on the left must be <= every element on the right, across both arrays.
  //   i.e. Aleft <= Bright AND Bleft <= Aright
  //
  // A: [ 1, 2 | 3, 4 ]       i = 1  (A contributes 2 to the left)
  // B: [ 1, 2, 3 | 4, 5, 6 ] j = 2  (B contributes 3 to the left, since half=5 and 5-2=3)

  let totalLength = nums1.length + nums2.length;
  let half = Math.floor(totalLength / 2);

  let l = 0;
  let r = A.length - 1;

  while (true) {
    let i = Math.floor((l + r) / 2); // partition index on A (last index of A's left side)
    let j = half - i - 2;            // partition index on B; derived from: (i+1) + (j+1) = half

    // Sentinels handle edge cases where a partition slides fully off one end of an array
    let Aleft  = i >= 0          ? A[i]     : -Infinity;
    let Aright = i + 1 < A.length ? A[i + 1] :  Infinity;
    let Bleft  = j >= 0          ? B[j]     : -Infinity;
    let Bright = j + 1 < B.length ? B[j + 1] :  Infinity;

    if (Aleft <= Bright && Bleft <= Aright) {
      // Partition is correct — the boundary elements are in the right order across both arrays
      if (totalLength % 2 === 0) {
        // Even: median is the average of the largest-left and smallest-right across both arrays
        return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
      } else {
        // Odd: median is the smallest element just to the right of the partition
        return Math.min(Aright, Bright);
      }
    } else if (Aleft > Bright) {
      // A's left side is too large — shift A's partition left
      r = i - 1;
    } else {
      // A's left side is too small — shift A's partition right
      l = i + 1;
    }
  }
};

/* Complexity
 Time:  O(log(min(m, n))) — binary search only on the smaller array A; j is derived arithmetically.
 Space: O(1)

 Why binary search A (the smaller array)?
 Searching the larger array risks j going out of bounds on the smaller one.
 e.g. A.length=2, B.length=10, half=6 — picking i=5 on B would demand j=-3 on A.
 Searching A keeps i in [0,2], which forces j into [4,6], always valid in B.
*/

export { findMedianSortedArrays };
