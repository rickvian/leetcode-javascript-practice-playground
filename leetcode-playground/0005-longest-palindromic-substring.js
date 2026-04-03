/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // intuition:

  // go through each character, 
  // we will use 2 pointer, left and right to expand on that index, checking if the index contains palindrome,
  // this way we will able to find longest palindrome where the mid is anywhere 
  // we had to perform 2 kind of pass
  // to spot ODD palindrome e.g abcba , left and right start at same character
  // to spot EVEN palindrome e.g abba, left and right start and adjacent character to the index.

  // validation
  if (!s) return false;
  if (s.length === 0) return false;

  // palindromes. but in substrings
  // substrings can be anywhere within s. so we need to iterate through

  let left;
  let right;
  let currentLongest = "";

  for (let i = 0; i < s.length; i++) {
    // for each character, we will perform substring checks of palindrome
    // compare left and right characters, in expanding way.

    // odd case.
    // c a b a d c

    left = i;
    right = i;

    while (left >= 0 && right < s.length && s[left] == s[right]) {
      // confirmed palindrome,
      let currentSubstringLength = right - left + 1;

      if (currentSubstringLength > currentLongest.length) {
        currentLongest = s.slice(left, right + 1); // overwritten with longer palindrome.
      }

      left--;
      right++;
    }

    // even case
    // a b b a c

    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] == s[right]) {
      // confirmed palindrome,
      let currentSubstringLength = right - left + 1;

      if (currentSubstringLength > currentLongest.length) {
        currentLongest = s.slice(left, right + 1); // overwritten with longer palindrome.
      }

      left--;
      right++;
    }
  }

  return currentLongest;
};

export { longestPalindrome };
