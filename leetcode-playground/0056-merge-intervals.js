/**
 * Merge all overlapping intervals and return an array of non-overlapping intervals.
 *
 * https://leetcode.com/problems/merge-intervals/description/
 * @param {number[][]} intervals - Array of intervals [start, end]
 * @return {number[][]} Merged intervals
 */
var merge = function (intervals) {

    const sortedInterval = [...intervals].sort((a, b) => a[0] - b[0]) // asc start, n Log n

    let output = [sortedInterval[0]] // init with first item

    for (let i = 1; i < intervals.length; i++) {
        let [currStart, currEnd] = sortedInterval[i]

        let [_lastStart, lastEnd] = output.at(-1)
        // check overap
        if (lastEnd >= currStart) {
            // overlapping
            // [1, 4] [4, 6]
            // [1, 7] [2, 4]

            // start def overlaps. reuse the start from existing, do nothing
            // which end to use

            const outputEnd = Math.max(currEnd, lastEnd)
            output.at(-1)[1] = outputEnd // merge into the last output
        } else {
            // not overlapping
            output.push(sortedInterval[i])
        }

    }

    return output
};

export { merge }
