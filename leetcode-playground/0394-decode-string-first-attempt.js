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
var decodeString = function (inputString) {
  function isCharNumber(char) {
    return /^\d$/.test(char);
  }
  // as new character coming in, we want to process or resolve it first,
  // so first come first out, it seems like stack can be used.

  // 12[a2[cd]]

  let stack = []; // 12[acdcd

  for (const charItem of inputString.split("")) {
    if (charItem !== "]") {
      stack.push(charItem); // average case o(1), worst case O(n) when array hits internal limit and has to allocate new larger array usually double size, and copy n existing elemtn to new memory location
    } else {
      // when "]" is found, then we must process and resolve decoded part with structure number[characters]

      let subString = []; // acdcd
      while (stack.at(-1) !== "[") {
        subString = stack.pop() + subString;
      }
      stack.pop(); // removes the [ after finish process

      let numberString = "";
      // process the multiplier
      while (isCharNumber(stack.at(-1))) {
        numberString = stack.pop() + numberString; // append the number popped from stack to collect entire of it.
      }

      // convert the number to string
      const multiplier = Number(numberString);

      for (let i = 0; i < multiplier; i++) {
        stack.push(...subString); // there could be argument limit over 65.535 elements...
      }

      // now the stack has the resolved character, moving on
    }
  }

  return stack.join("");
};

export { decodeString };
