/**
 * Insert a new interval into a list of non-overlapping intervals and merge if necessary.
 *
 * https://leetcode.com/problems/insert-interval/description/
 * @param {number[][]} intervals - Array of non-overlapping sorted intervals
 * @param {number[]} newInterval - Interval to insert [start, end]
 * @return {number[][]} Updated intervals with newInterval merged
 */
var insert = function (intervals, newInterval) {
  // input is sorted
  // iterate through, when s
  let res = [];

  for (let [currStart, currEnd] of intervals) {
    // check for position where we possibly able to insert the interval at

    // newInterval ends < currStart

    // scenario middle causing overlap prev
    //   ----new---
    //  ----        --currStart--

    // scenario not
    //   ----
    //         ---

    if (newInterval[1] < currStart) {
      //it may cause previous overlaps, go check
      let prevEnds = res.at(-1)?.[1];
      if (prevEnds > newInterval[0]) {
        // it does overlap with previous one, you merge them
        prevEnds = newInterval[1]; // give new longer end, effectively merges them
      }
    }
  }
};

export { insert };
