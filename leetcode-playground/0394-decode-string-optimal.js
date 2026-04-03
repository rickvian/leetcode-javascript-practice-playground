/**
 * Given an encoded string, return its decoded string. The encoding rule is:
 * k[encoded_string], where the encoded_string inside the square brackets is
 * being repeated exactly k times.
 *
 * https://leetcode.com/problems/decode-string/description/
 *
 * @param {string} s - The encoded string
 * @return {string}
 */
var decodeString = function (s) {
  const countStack = [];
  const strStack = [];

  // temps
  let current = "";
  let k = 0;

  for (const ch of s) {
    if (ch >= "0" && ch <= "9") {
      k = k * 10 + Number(ch); // this handles multidigit.
    } else if (ch === "[") {
      countStack.push(k); // collect the multiplier
      strStack.push(current); // string we collect so far

      // reset temps
      current = "";
      k = 0;
    } else if (ch === "]") {
      const repeat = countStack.pop();
      const prev = strStack.pop(); // take the previous before processing

      current = prev + current.repeat(repeat); // merge previous with current text we processing
    } else {
      // will be character
      current = current + ch;
    }
  }

  return current;
};

export { decodeString };
