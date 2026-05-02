/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 * https://leetcode.com/problems/permutation-in-string/
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 *
 * Time:  O(s1 + s2) — one pass to build initial window, one pass sliding over s2
 * Space: O(1)       — two fixed-size arrays of 26, independent of input size
 */
var checkInclusion = function (s1, s2) {
  // we need to check continuously, hence sliding window will work here

  // the statement says check if s2 contains permutation s1, hence it will be not possible when s1 is longer
  if (s1.length > s2.length) return false;

  // a permutation is a rearrangement of the exact same characters — nothing added, nothing removed.
  // so the window must have exactly the same count per character as s1, not "at least" — any extra
  // or missing character makes it a different set, which can never be rearranged into s1.
  // hence we track exact character counts for both and require all 26 to match simultaneously.

  // we use char index to track
  let s1Count = Array.from({ length: 26 }, () => 0);
  let s2Count = Array.from({ length: 26 }, () => 0);

  // prepopulate count based on s1 length, this will be our initial window values
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].codePointAt() - "a".codePointAt()]++;
    s2Count[s2[i].codePointAt() - "a".codePointAt()]++;
  }

  let matches = 0; // represent characters count that matched on s1 and s2
  for (let i = 0; i < 26; i++) {
    // iterate every index of array character to check if s1 and s2 is match
    if (s1Count[i] === s2Count[i]) matches++;
  }

  let l = 0;
  // we start from s1 character because we prepopulate windows chars, and stop at end of s2 length
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) return true; // within the window, we had all 26

    // as we slide, we want to update the matches to be checked in next iteration

    let rCharIndex = s2[r].codePointAt() - "a".codePointAt();

    s2Count[rCharIndex] += 1; // add s2Count because we sliding R in in

    // sliding R can either gain OR lose a match:
    //   gain: counts were unequal, adding this char makes them equal
    //   lose: counts were already equal (matched), adding 1 overshoots s1Count → breaks match
    if (s1Count[rCharIndex] === s2Count[rCharIndex]) {
      matches++;
    } else if (s1Count[rCharIndex] + 1 === s2Count[rCharIndex]) {
      // s2Count is now 1 over s1Count — it was matched before the increment, now it's not
      matches--;
    }

    // sliding L can either gain OR lose a match:
    //   gain: s2Count was 1 over s1Count (unmatched), removing 1 makes them equal
    //   lose: counts were already equal (matched), removing 1 goes under s1Count → breaks match
    let lCharIndex = s2[l].codePointAt() - "a".codePointAt();
    s2Count[lCharIndex]--;

    if (s1Count[lCharIndex] === s2Count[lCharIndex]) {
      matches++;
    } else if (s1Count[lCharIndex] - 1 === s2Count[lCharIndex]) {
      // s2Count is now 1 under s1Count — it was matched before the decrement, now it's not
      matches--;
    }

    // important part, this sliding window have fixed size of s1, because we check permutations of
    // s1 contained in s2
    // so L will always slide following R

    l++;
  }

  // if the early return of true never hits, return false instead
  return matches === 26; // IMPORTANT! last iteration need checks!
};

export { checkInclusion };
