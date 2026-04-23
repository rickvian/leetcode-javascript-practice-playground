/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window
 * substring of s such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t === "") return "";

  // A D O B E C O D E B A N C
  //                   L
  //                         R
  //
  // target: A B C
  // -
  // found: A D O B E C - length  6
  // found: D O B E C O D E B A - length 10 (we have B as duplicate here, thats why we attempt shrink to hope finding smaller window that still satisfy)
  // found: C O D E B A - length 6
  // found: O D E B A N C - length 7
  // found : B A N C - length 4 (shortest)
  // we perform length collection and coordinate saving as we go

  // approach: we will use pointer to check the substring,
  // we will check if all characters in window satisfy all in target
  // this will involve check the characters occurrence and its count
  // so when the windows first satisfy, we can shrink from left
  // we attempt to check if there are shorter string that satisfy it,
  // if not, then we had to keep moving right to find new occurence windows

  let l = 0;
  let r = 0;

  //! prepare, build counter for T

  let countT = new Map(); // map character count
  let window = new Map(); // map character count

  for (let c of t) {
    countT.set(c, 1 + (countT.get(c) ?? 0)); // increment character occurrence
  }

  // we have t map now

  // A D O B E C O D E B A N C
  // L
  // R
  // target: A B C

  // window: { A: 1 }
  // countT : { A: 1: B:1 C:1 }
  let have = 0; // unique characters we collected in window
  let need = countT.size; // unique characters to satisfy

  let res = [-1, -1]; // substring of lowest substring record
  let lowestLen = Infinity; // to store record low

  // now go through window and perform check
  for (let r = 0; r < s.length; r++) {
    window.set(s[r], 1 + (window.get(s[r]) ?? 0)); // increment new counters in window

    // when we satisfy the target unique character counter, we increment "have"
    if (countT.has(s[r]) && countT.get(s[r]) === window.get(s[r])) {
      have += 1;
    }

    while (have === need) {
      // we satisfy the target, record the length and coordinate
      let windowLength = r - l + 1;

      if (windowLength < lowestLen) {
        // found new record
        res = [l, r];
        lowestLen = windowLength;
      }

      // now we can try shrink the window, by moving l see if we can find more record low

      // directly attempt to pop left

      let leftChar = s[l];
      window.set(leftChar, window.get(leftChar) - 1);

      // does that affect the requirement againts the target
      if (countT.has(leftChar) && window.get(leftChar) < countT.get(leftChar)) {
        have--; // yes, it affects the requirement
      }

      l++;
    }
  }

  // now we should have the coordinate of the shortest

  let [resLeft, resRight] = res;

  if (lowestLen != Infinity) {
    return s.slice(resLeft, resRight + 1);
  }

  return "";
};

export { minWindow };
