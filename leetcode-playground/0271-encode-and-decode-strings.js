/**
 * Design an algorithm to encode a list of strings to a string. The encoded string is then
 * sent over the network and is decoded back to the original list of strings.
 *
 * https://leetcode.com/problems/encode-and-decode-strings/description/
 *
 * @param {string[]} strs - List of strings to encode
 * @return {string} - Encoded string
 */
var encode = function (strs) {
  let result = "";

  for (let s of strs) {
    result += s.length + "#" + s;
  }
  return result;
};

/**
 * @param {string} s - Encoded string
 * @return {string[]} - Decoded list of strings
 */
var decode = function (s) {
  // 23#abbabababab3#aawfawef
  let res = [];
  let i = 0;

  while (i < s.length) {
    let j = i; // start from current index to perform read on j

    // j will mark the end of the number character

    while (s[j] != "#") {
      j++; // move j as long as not encountered #
    }

    let length = Number(s.slice(i, j));
    res.push(s.slice(j + 1, j + 1 + length)); // from j+1 (skips over the #) up to j+1 to the parsed length of it
    i = j + 1 + length; // move i pointer to the next encoded characters starting number position
  }

  return res;
};

export { encode, decode };
