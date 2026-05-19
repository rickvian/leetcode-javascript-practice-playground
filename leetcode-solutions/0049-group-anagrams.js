/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * Difficulty: Medium
 *
 * Given an array of strings `strs`, group the anagrams together. You can return the
 * answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different
 * word or phrase, typically using all the original letters exactly once.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * @complexity
 * Time:  O(n * k log k) — n = strs.length, k = max string length; sort dominates per string
 * Space: O(n * k)       — map stores all strings grouped by sorted key
 */
var groupAnagrams = function (strs) {
  const map = {};

  strs.forEach((str) => {             // O(n) iterations
    const key = [...str].sort();      // O(k log k) — sort drives time complexity
    map[key] = map[key] ? [...map[key], str] : [str];
  });

  return Object.values(map);
};

/**
 * Counter-key approach (avoids sort)
 *
 * @complexity
 * Time:  O(n * k) — n = strs.length, k = max string length; no sort, linear char scan per string
 * Space: O(n * k) — map stores all strings; keys are fixed 26-element strings (O(1) per key)
 */
var groupAnagramsCounterKeyApproach = function (strs) {
  const map = new Map();

  for (const str of strs) {                              // O(n) iterations
    const count = Array.from({ length: 26 }, () => 0);  // O(1) — fixed 26 slots

    for (const char of str) {                           // O(k) — drives time complexity
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.join(",");                        // O(26) = O(1) — fixed-length join

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  //  Map(3) {
  //   '1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0' => [ 'eat', 'tea', 'ate' ],
  //   '1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0' => [ 'tan', 'nat' ],
  //   '1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0' => [ 'bat' ]
  // }

  console.log(map);

  return Array.from(map.values());
};
