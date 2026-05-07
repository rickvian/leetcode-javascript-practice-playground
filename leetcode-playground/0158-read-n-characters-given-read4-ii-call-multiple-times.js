/**
 * Like 0157 but the returned read function may be called multiple times; the
 * implementation must preserve any leftover characters from a prior read4 call.
 *
 * https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/description/
 *
 * @param {function} read4
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        // implement
    };
};

export { solution }
