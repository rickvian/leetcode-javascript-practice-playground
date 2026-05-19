/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sFreq = new Map();

  // count character freq of S
  for (let i = 0; i < s.length; i++) {
    let charCode = s[i].codePointAt();
    sFreq.set(charCode, (sFreq.get(charCode) ?? 0) + 1);
  }

  const tFreq = new Map();

  for (let i = 0; i < t.length; i++) {
    let charCode = t[i].codePointAt();
    tFreq.set(charCode, (tFreq.get(charCode) ?? 0) + 1);
  }

  // loop though a - z
  for (let c = 0; c < 26; c++) {
    let charCode = "a".codePointAt() + c;
    if (sFreq.get(charCode) !== tFreq.get(charCode)) return false;
  }

  return true;
};

export { isAnagram };
