/**
 * 647. Palindromic Substrings
 * https://leetcode.com/problems/palindromic-substrings/
 * Difficulty: Medium
 *
 * Given a string s, return the number of palindromic substrings in it.
 *
 * A string is a palindrome when it reads the same backward as forward.
 *
 * A substring is a contiguous sequence of characters within the string.
 */

/**
 * @param {string} s
 * @return {number}
 *
 * @complexity
 * Time: O(n²)
 *   - Outer loop: n iterations (each position as potential center)
 *   - Each expand() call: worst case O(n) to traverse the string
 *   - Two expand() calls per iteration: O(n) + O(n) = O(2n) → still O(n) per iteration
 *   - Total: n iterations × O(n) per iteration = O(n²)
 *
 * Space: O(1)
 *   - Only constant variables: result, count, left, right, i
 *   - No recursion or data structure allocation
 */
var countSubstrings = function(s) {
  let result = 0;

  // For each position, treat it as center of odd-length (single char) and even-length palindromes
  // e.g. "bab" → position 1: odd center "a", even check "ab" (not palindrome)
  // O(n) iterations — primary source of n factor in O(n²)
  for (let i = 0; i < s.length; i++) {
    // Expand around single character center (odd-length palindromes like "a", "aba")
    result += expand(i, i);
    // Expand around two-character center (even-length palindromes like "aa", "abba")
    result += expand(i, i + 1);
  }

  return result;

  // Expand outward from center while characters match; count all valid palindromes
  // e.g. expand(1, 1) on "bab": "a" matches → expand to "bab" matches → expand out of bounds
  function expand(left, right) {
    let count = 0;
    // O(n) in worst case — expands to string length; called 2× per outer loop iteration → O(n²) total
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++; // Found a palindrome, increment counter
      left--;
      right++;
    }
    return count;
  }
};
