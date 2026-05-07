/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 * https://leetcode.com/problems/permutation-in-string/
 *
 * Approach: hashmap
 * Build frequency maps for s1 and the initial window of s2. Track how many characters
 * in s1's map are currently matched by the window. Slide the window, updating matches
 * only for characters that appear in s1. When all unique s1 characters are matched, return true.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 *
 * Time:  O(s1 + s2)
 * Space: O(k) — k = unique characters in s1
 */
var checkInclusion = function (s1, s2) {
  // a permutation of s1 can't fit inside a shorter s2
  if (s1.length > s2.length) return false;

  const s1Map = {};    // target frequency: how many of each char s1 requires
  const windowMap = {}; // current window frequency: how many of each char are in our sliding window

  // build both maps simultaneously over the first window of size s1.length.
  // s1Map captures the exact counts we need to match.
  // windowMap starts as the first s1.length characters of s2.
  for (let i = 0; i < s1.length; i++) {
    s1Map[s1[i]] = (s1Map[s1[i]] ?? 0) + 1;
    windowMap[s2[i]] = (windowMap[s2[i]] ?? 0) + 1;
  }

  // uniqueChars = how many distinct characters s1 has.
  // we only need to match characters that s1 actually contains — anything else in the window is irrelevant.
  // when `matches === uniqueChars`, every character in s1Map has exactly the right count in windowMap.
  const uniqueChars = Object.keys(s1Map).length; // required matches of unique chars
  let matches = 0; // current window's unique chars that matched with s1map counts, only fulfilled when it all exactly matched

  // score the initial window: count how many chars already have matching frequencies
  for (const ch of Object.keys(s1Map)) {
    if (s1Map[ch] === windowMap[ch]) matches++;
  }

  let l = 0; // left pointer — always trails r by exactly s1.length (fixed-size window)
  for (let r = s1.length; r < s2.length; r++) {
    // check before expanding: the current window [l, r-1] might already be a valid permutation
    if (matches === uniqueChars) return true;

    // --- slide RIGHT pointer in: add s2[r] to the window ---
    const rCh = s2[r];
    windowMap[rCh] = (windowMap[rCh] ?? 0) + 1;

    // only update matches if rCh is a character s1 cares about
    if (s1Map[rCh] !== undefined) {
      if (windowMap[rCh] === s1Map[rCh]) {
        // adding rCh brought its count up to exactly what s1 needs → gain a match
        matches++;
      } else if (windowMap[rCh] === s1Map[rCh] + 1) {
        // adding rCh overshot: count was equal (matched) before the increment, now it's 1 too many → lose the match
        matches--;
      }
      // any other case: the count was already off and is still off — matches unchanged
    }

    // --- slide LEFT pointer out: remove s2[l] from the window ---
    const lCh = s2[l];
    windowMap[lCh]--;

    // only update matches if lCh is a character s1 cares about
    if (s1Map[lCh] !== undefined) {
      if (windowMap[lCh] === s1Map[lCh]) {
        // removing lCh brought its count down to exactly what s1 needs → gain a match
        matches++;
      } else if (windowMap[lCh] === s1Map[lCh] - 1) {
        // removing lCh undershot: count was equal (matched) before the decrement, now it's 1 too few → lose the match
        matches--;
      }
      // any other case: the count was already off and is still off — matches unchanged
    }

    // advance l so the window stays exactly s1.length wide
    l++;
  }

  // the loop exits without returning true when r reaches the end of s2.
  // the last window [l, s2.length-1] was never checked inside the loop (the check is at the top, before sliding),
  // so we must check it here.
  return matches === uniqueChars;
};

export { checkInclusion };
