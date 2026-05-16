/**
 * Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum
 * number of intervals you need to remove to make the rest of the intervals non-overlapping.
 *
 * https://leetcode.com/problems/non-overlapping-intervals/description/
 *
 * @param {number[][]} intervals - Array of intervals [start, end]
 * @return {number} - Minimum number of intervals to remove
 */
var eraseOverlapIntervals = function (intervals) {
  // idea, we go through all item
  // check for overlap, if there are overlap we will remove one that have later end
  // because the later end will just add more potential to have extra overlap

  intervals.sort((a, b) => a[0] - b[0]); // very important

  let removed = 0;
  let prevEnd = -Infinity;

  for (let [currentStart, currentEnd] of intervals) {
    // if not overlapping, we continue use next interval's end
    if (prevEnd <= currentStart) {
      // they not overlapping
      prevEnd = currentEnd; // use currentEnd for next compariso
      continue;
    }

    // else it guranteed overlapping
    // which one to remove? we remove one that have further end
    if (prevEnd > currentEnd) {
      // remove prevEnd
      prevEnd = currentEnd;
    }

    removed++;
    // else, remove current iterations end
    // simply ignore it, no need to do anything
  }

  return removed;
};

export { eraseOverlapIntervals };
