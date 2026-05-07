/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  /**
   * @param {string} s
   * @return {number}
   */
  var lengthOfLongestSubstring = function (s) {
    // abcabcbb

    // how would human solve this

    // abc - unique
    // abca - violated
    // but why is it violated? because we add last 'a', and because there are 'a' exist in previous substring. (not necessary first cos it can be 'abcb')

    // substring - contiguous, we cannot skip characters - easier.

    // when abca happens, its violated, then we can remove the first characer

    // -bca then continue next one
    // -bcab -> repetition found
    // --cab
    // --cabc -> repetion found
    // ---abc
    // ---abcb -> found
    // ----bcb -> still found, we cannot force add more cos there are duplicate, only way to remove first, cos they should be contiguos
    // -----cb no more repeat, continue
    // -----cbb -> found
    // ------bb
    // -------b

    // as iterate, keep the longest unique.
    // how program it?

    // we can use pointer to point last character of substring, and left pointer to keep on track start of substring

    // on next character iteration, we want to check if character is exist or not in previous substring,
    // we can sthorechar in hashmap so looking up o(1)

    // as we delete prev character, we delete from map


    // a  b  c  a  b
    // L  R
    let leftIndex = 0
    let rightIndex = 0
    let maxLength = 0

    // let characterInSubstring = {
    //     // [character]: true 
    //     // a: true
    //     // b: true
    //     // c: true
    // }

    let characterInSubstring = new Set();



    while (rightIndex < s.length) {
      if (characterInSubstring.has(s[rightIndex])) { // exist before
        // delete the left
        characterInSubstring.delete(s[leftIndex])
        leftIndex++
      } else { // not exist yet
        characterInSubstring.add(s[rightIndex])
        maxLength = Math.max(maxLength, rightIndex - leftIndex + 1)

        rightIndex++
      }


      // check the current substring lenght, is it getting new record?
    }

    return maxLength


  };
};

export { lengthOfLongestSubstring };
