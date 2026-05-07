/**
 * Given an array of integers heights representing the histogram's bar height where
 * the width of each bar is 1, return the area of the largest rectangle in the histogram.
 *
 * https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 *
 * @param {number[]} heights - Array of non-negative integers representing bar heights
 * @return {number} The area of the largest rectangle in the histogram
 */
var largestRectangleArea = function (heights) {
    // [2, 1, 5, 6, 2, 3]
    // actual answer: 10


    // how would human solve this

    // [1, 2]
    // there is length * width of 1*2 =2
    // then there is 2*1

    // largest is 2

    // [2,2]
    // there is 2*2

    // [2,1]
    // there is 1*2

    // but how do we search for those iteratively?

    // hard to explain without drawing.


    // [1, 2]
    // largest is 2

    // [2,2]
    // there is 2*2

    // [2,1]
    // there is 1*2

    let maxArea = 0
    let stack = [] // pair of (index, height)

    for (let i = 0; i < heights.length; i++) {
        let currentHeight = heights[i]

        let start = i // remember the start index for now

        // if the histogram is not increasing, e.g // 2,1, we need to pop from stack
        // those are heights that we can calculate immediately
        while (stack.length > 0 && stack.at(-1)[1] > currentHeight) {
            let [poppedIndex, poppedHeight] = stack.pop(); // we pop previous record from further consideration, calculate the potential max now. cos it will not able to make more new rectangle
            maxArea = Math.max(maxArea, poppedHeight * (i - poppedIndex))
            start = poppedIndex // we update the start cos current i can trace back till the previous popped index
        }

        stack.push([start, currentHeight]); // new possible rectangle
    }

    // when iteration complete, stack can still exist

    for (let [index, height] of stack) {
        maxArea = Math.max(maxArea, height * (heights.length - index)) // height * width it extends to the end
    }

    return maxArea

};

export { largestRectangleArea }
