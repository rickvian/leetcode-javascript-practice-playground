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
  // Solution implementation

  //! BREAKDOWN
  if (t === "") return "";
  let countT = new Map(); // target character to compare
  let window = new Map(); // current window of string

  //! build count of targets mapping.
  for (let c of t) {
    countT.set(c, 1 + (countT.get(c) ?? 0));
  }

  // countT.set(c,1 + countT.get(c))

  let have = 0; // number of unique characters count that we have satisfy against
  let need = countT.size; // get the number of unique characters required by t (target)
  let res = [-1, -1]; // coordinate of minimum left and right substring
  let resLen = Infinity; // tracks the minimum length and updates as we collect
  let l = 0; // sliding window, left pointer.

  // iterate through character within S
  for (let r = 0; r < s.length; r++) {
    //! t the count of each window's character
    let c = s[r];
    window.set(c, 1 + (window.get(c) ?? 0)); // increment counter to the window.

    //! we compare and update how many unique character we satisfy so far
    if (countT.has(c) && window.get(c) === countT.get(c)) {
      have += 1; // count the matching pair we have right now
    }

    //!
    while (have === need) {
      //  means current window has satisfy the target
      //> update our result

      const windowLength = r - l + 1;

      if (windowLength < resLen) {
        // we found a smaller length
        res = [l, r];
        resLen = windowLength;
      }

      //! pop from the left of our window
      const leftChar = s[l];
      window.set(leftChar, window.get(leftChar) - 1); // remove the counter of that character because we move the window out
      // check if the removal cause us lost what we have to satisfy the target
      if (countT.has(leftChar) && window.get(leftChar) < countT.get(leftChar)) {
        have -= 1; // no longer satisfy this char.
      }
      l += 1; // move left pointer because we want to find minimum, checking smaller window.
      // until we no longer have ===
    }
  }

  // at this point we already have coordinates on minimum string
  let [lRes, rRes] = res; // get the coordinate

  if (resLen != Infinity) {
    // means new min is found, return it
    return s.slice(lRes, rRes + 1); // include character in r
  }

  // else

  return "";
};

export { minWindow };
