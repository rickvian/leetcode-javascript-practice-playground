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
  //
  let A = nums1;
  let B = nums2;

  // calculate the property of nums1+nums2, this to know as if we merged both,
  // it helps our search
  let totalLength = nums1.length + nums2.length;
  let half = Math.floor(totalLength / 2); //

  if (B.length < A.length) {
    [A, B] = [B, A];
  }

  // establish pointer in the shorter array, A, we will do binary search there.
  let l = 0;
  let r = A.length - 1;

  while (true) {
    let i = Math.floor((l + r) / 2); // middle pointer for A

    let j = half - i - 2; // calculate where portion of B were cut off
    // its -2 because
    // i and j is 0 based index, so the concept is (i+1) + (j + 1) = half.
    // j + 1 = half - i - 1
    // j = half - i - 1 - 1

    // perform check if partition is in correct position, crossing check both edge values
    let Aleft = i >= 0 ? A[i] : -Infinity;
    let Aright = i + 1 < A.length ? A[i + 1] : Infinity;
    let Bleft = j >= 0 ? B[j] : -Infinity;
    let Bright = j + 1 < B.length ? B[j + 1] : Infinity;

    // technically i and j can be out of bounds, so we need fallback value
    // Aleft defaults to -Infinity because
    // Aright defaults to Infinity because
    // Bleft defaults to -Infinity because
    // Bright defaults to Infinity because

    // now perform the cross comparison
    if (Aleft <= Bright && Bleft <= Aright) {
      // partition is correct
      // but there could be 2 condition here, odd or even

      // odd case
      if (totalLength % 2 !== 0) {
        // return the mid number
        // its the min of both rights
        return Math.min(Aright, Bright);
      } else {
        // even case
        // 1 2 3 4 <- this case need to add both sides / 2

        // closest right side
        const smallestRight = Math.min(Aright, Bright);
        const largestLeft = Math.max(Aleft, Bleft);

        return (smallestRight + largestLeft) / 2;
      }
    } else {
      // partition is not in correct position, we still need to move it.
      // how to move it? depends on the cross comparison situation
      if (Aleft < Bright) {
        // its smaller, need to look right
        l = i + 1; // i because we performing binary search in array A
      } else {
        // its bigger, need to look left
        r = i - 1; //
      }
    }
  }

  // we will make A always the smaller array

  // because we will use A to move the partition,
  //   As you move the partition line in the smaller array (A), the partition line in the larger array (B) must move in the opposite direction to maintain the balance.
};

/* FAQ
 why A always the smaller array?
- because we will use A to move the partition, As you move the partition line in the smaller array (A), 
the partition line in the larger array (B) must move in the opposite direction to maintain the balance.

f you attempt to binary search on the larger array, the required index $j$ for the smaller array could easily fall outside its boundaries.

Scenario: Array A has 2 elements, Array B has 10 elements. Half is 6.
Problem: 
If you pick an index i=1 in the large array, the formula j = half - i would demand j=5 from the small array.
Since the small array only has 2 elements, the index is out of bounds.Solution: By searching the small array, $i$ can only be 0, 1, or 2. This forces $j$ to be 6, 5, or 4—all of which are safe within the larger array's 10-element range.
*/

export { findMedianSortedArrays };
