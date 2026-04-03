/**
 * Find the h-index of a researcher.
 * H-index is the largest h where the researcher has at least h papers with h+ citations.
 *
 * Time Complexity: O(n log n) - dominated by sorting
 * Space Complexity: O(n) - the new sorted array
 *
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // Sort citations in ascending order (numeric, not lexicographic)
  const sortedCitations = citations.toSorted((a, b) => a - b);

  // Iterate from the end (highest citations)
  let paperCount = 0;

  for (let i = sortedCitations.length - 1; i >= 0; i--) {
    paperCount++;
    if (sortedCitations[i] < paperCount) {
      // if current paper has fewer citations than our h candidate, we found the limit
      return paperCount - 1;
    }
  }

  // All papers satisfy the h-index condition
  return paperCount;
};

export { hIndex };
