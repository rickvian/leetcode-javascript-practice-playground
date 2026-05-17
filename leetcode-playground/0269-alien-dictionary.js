/**
 * There is a new alien language that uses the English alphabet. However, the order
 * among the letters is unknown to you. You are given a list of strings words from
 * the alien language's dictionary, where the strings in words are sorted
 * lexicographically by the rules of this new language.
 * Return a string of the unique letters in the new alien language sorted in
 * lexicographically increasing order by the new language's rules. If there is no
 * solution, return "". If there are multiple solutions, return any of them.
 *
 * https://leetcode.com/problems/alien-dictionary/description/
 *
 * @param {string[]} words - Sorted words in alien language
 * @return {string}
 */
var alienOrder = function (words) {
  // how to build dependency graph of the letters from words we have?

  // 1. create adjacency list
  let adj = {};

  for (let word of words) {
    for (let c of word) {
      if (!(c in adj)) {
        adj[c] = new Set();
      }
    }
  }

  // every character in word will have set

  // we compare 0 vs 1, then 1 vs 2, that why stop condition at < words.length - 1 to prevent overflow
  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];

    // check for prefix and length
    // e.g 'wrttj' vs 'wrt'
    let minLen = Math.min(w1.length, w2.length);
    if (
      w1.slice(null, minLen) === w2.slice(null, minLen) && // prefix are same
      w1.length > w2.length // word 1 despite prefix, its longer,
    ) {
      // if both word have same prefix, but first word is shorter, we have invalid order
      return "";
    }

    // go through every character in the prefix of shorter word
    for (let j = 0; j < minLen; j++) {
      // check if character in position j are not equal
      if (w1[j] != w2[j]) {
        // meaning we can record which character has earlier sort position
        adj[w1[j]].add(w2[j]); // add adjacency, because w1 comes before w2
        break;
      }
    }
  }
  // at this point we successfully build adjacency list

  // perform DFS

  let visit = {}; // false = visited, true = current path

  let res = [];

  function dfs(c) {
    // base case

    if (c in visit) {
      // detected loop
      return visit[c];
    }

    visit[c] = true;

    for (let nei of adj[c]) {
      if (dfs(nei)) {
        return true;
      }
    }

    visit[c] = false;

    res.push(c); // push last because of post order
  }

  // call the dfs

  for (let c in adj) {
    if (dfs(c)) {
      return "";
    }
  }

  res.reverse();

  return res.join("");
};

export { alienOrder };
