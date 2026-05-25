/**
 * 76. Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 * Difficulty: Hard
 *
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring
 * of s such that every character in t (including duplicates) is included in the window. If there
 * is no such substring, return the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *
 * @complexity
 * Time: O(m + n) — m = s.length, n = t.length
 *   - Breakdown:
 *     1. First loop over t:          O(n)
 *     2. Outer loop over s (i ptr):  O(m)
 *     3. Inner while (j ptr total):  O(m) amortized — j only moves forward, at most m steps total across all while iterations
 *     → O(n) + O(m) + O(m) = O(n + 2m) → drop constant → O(n + m)
 * Space: O(1) — fixed-size 128-element array regardless of input size
 */
var minWindow = function (s, t) {
  const values = new Array(128).fill(0); // O(1) — fixed 128 ASCII slots
  let [start, end] = [-Infinity, Infinity];

  for (let i = 0; i < t.length; i++) { // O(n) — scan t once
    values[t.charCodeAt(i)]++;
  }

  for (let i = 0, j = 0, total = t.length; i < s.length; i++) { // O(m) — i advances m times
    if (values[s.charCodeAt(i)] > 0) {
      total--;
    }
    values[s.charCodeAt(i)]--;
    while (!total) { // O(m) total across all iterations — j advances at most m times overall
      if (end - start > i - j) {
        [start, end] = [j, i];
      }
      values[s.charCodeAt(j)]++;
      if (values[s.charCodeAt(j)] > 0) {
        total++;
      }
      j++;
    }
  }

  return end !== Infinity ? s.slice(start, end + 1) : "";
};

/**
 * @complexity
 * Time: O(m + n) — m = s.length, n = t.length
 *   - Breakdown:
 *     1. Build freqTarget map over t:  O(n)
 *     2. Outer for-loop (r ptr):       O(m) — r advances m times
 *     3. Inner while-loop (l ptr):     O(m) amortized — l only moves forward, at most m steps total
 *     → O(n) + O(m) + O(m) = O(n + 2m) → drop constant → O(n + m)
 * Space: O(n + m) — freqTarget holds up to n unique chars from t; window Map holds up to m unique chars from s
 */
var minWindowOtherApproach = function (s, t) {
  // strategy: sliding window — expand r until window satisfies t, then shrink l to find minimum valid window

  if (s.length < t.length) return "";
  // build target map character count first.
  let freqTarget = new Map(); // O(n) space — at most n unique chars from t

  for (let char of t) { // O(n) — scan t once
    freqTarget.set(char, 1 + (freqTarget.get(char) ?? 0));
  }

  let window = new Map(); // O(m) space — at most m unique chars from s

  let l = 0;
  let r = 0;

  let res = [-1, -1]; // coordinate of window substring

  let shortestWindow = Infinity;

  let have = 0; // count of unique chars which freq in window is satisfying freqTarget at the moment, we re-check it as we iterate.
  let need = freqTarget.size; // couunt of unique chars which target needs in order for window to satisfy

  for (let r = 0; r < s.length; r++) { // O(m) — r advances m times
    window.set(s[r], 1 + (window.get(s[r]) ?? 0));

    // check and update how much we have right now; check .has to ensure we don't check undefined === undefined.
    if (freqTarget.has(s[r]) && window.get(s[r]) === freqTarget.get(s[r])) {
      // we just satisfy new count for this s[r], add it
      have++;
    }

    while (have === need) { // O(m) total across all iterations — l moves forward at most m times
      const windowLength = r - l + 1;

      if (windowLength < shortestWindow) {
        // its a new short record
        shortestWindow = Math.min(shortestWindow, windowLength); //  r - l +1 is current window length between l to r, because inclusive character
        res = [l, r]; // update our new record coordinate, we will need this for return later
      }

      // now because the window is satisfied we can move the left, see if shrinking it still satisfy it, possibly found new short record

      //  s = "ADOBECODEBANC", t = "ABC"
      //                L
      //                   R

      // remove l from window freq
      window.set(s[l], window.get(s[l]) - 1);

      // check and update how much we have right now; check .has to ensure we don't check undefined === undefined.
      if (freqTarget.has(s[l]) && window.get(s[l]) < freqTarget.get(s[l])) {
        // moving l makes us lost unique character satisfied the target, reduce the "have" count
        have--;
      }

      l++;
    } // once we move l to position where we no longer satisfy target requirement, we back to move r
  }

  // currently we have the coordinate of the shortest string

  // its possible that we never find the string

  if (shortestWindow < Infinity) {
    // found at least once

    let shortestString = s.slice(res[0], res[1] + 1); // +1 because inclusive
    return shortestString;
  }

  return ""; // never found
};
