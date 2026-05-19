/**
 * Design an algorithm to encode a list of strings to a string. The encoded string is then
 * sent over the network and is decoded back to the original list of strings.
 *
 * https://leetcode.com/problems/encode-and-decode-strings/description/
 *
 * @param {string[]} strs - List of strings to encode
 * @return {string} - Encoded string
 *
 * @complexity
 * Time: O(n + m) where n = number of strings, m = total length of all strings
 *   - Loop through n strings: O(n)
 *   - Each s.length lookup and string concatenation: O(1) per iteration
 *   - result.join("") concatenates all parts: O(m) — copies all m characters
 *   - Total: O(n) + O(m) = O(n + m)
 * Space: O(m) — result array and joined string both store all characters
 */
var encode = function (strs) {
  // approach,
  // ['Hello', 'World']
  // encode into
  // 5#Hello5#World

  // ababababab (10 char)
  // 10#abababababab

  let result = [];
  // iterate each character to get the length
  for (let s of strs) {
    result.push(`${s.length}#${s}`); // '5#Hello
    // [5, "#" , "Hello", 5, "#", "World"]
  }

  return result.join(""); // 5#Hello5#World
};

/**
 * @param {string} str - Encoded string
 * @return {string[]} - Decoded list of strings
 *
 * @complexity
 * Time: O(m) where m = length of encoded string
 *   - While loop iterates through entire string once: O(m)
 *   - str.slice() operations create substrings, but each character is extracted once
 *   - Number() conversion is O(k) where k = length of number (typically 1-3 digits, negligible)
 *   - Each character is visited exactly once
 *   - Total: O(m)
 * Space: O(n + m) where n = number of decoded strings, m = total length of all strings
 *   - Result array stores n decoded strings with total length m
 */
var decode = function (str) {
  // 5#Hello5#World
  //        p
  //
  // 10#abababababab
  //   p

  let pointer = 0;

  let result = [];
  let numberStart = pointer;

  while (pointer < str.length) {
    // check for number
    if (str[pointer] == "#") {
      // we can parse the number now

      let contentCount = Number(str.slice(numberStart, pointer)); // 5
      pointer++; // skips over the #

      // now we can start getting the content
      let content = str.slice(pointer, pointer + contentCount); // 3 -> before 8 ()
      result.push(content);

      pointer = pointer + contentCount; // move the pointer to next start of number.
      numberStart = pointer;
    }

    // if number, it skips
    // it will never meet character because we always move pointer beyond character.
    pointer++;
  } // loop will repeat on next numbers

  return result;
};

export { encode, decode };
