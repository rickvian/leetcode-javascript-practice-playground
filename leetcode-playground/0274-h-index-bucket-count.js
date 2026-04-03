/**
 * Find the h-index of a researcher using bucket counting approach.
 * H-index is the largest h where the researcher has at least h papers with h+ citations.
 *
 * Algorithm:
 * 1. Create a bucket array where index i represents papers with i citations
 * 2. Count how many papers have each citation count (capped at array length)
 * 3. Traverse from the largest possible h-index backward
 * 4. Accumulate counts to find the first h where we have at least h papers with h+ citations
 *
 * Example: citations = [3, 0, 6, 1, 5]
 * - Buckets: [1, 1, 0, 1, 0, 2] (index 5 stores papers with 5+ citations)
 * - Check from h=5: 1 paper with 5+ citations < 5, continue
 * - Check from h=4: 1+1=2 papers with 4+ citations < 4, continue
 * - Check from h=3: 2+1=3 papers with 3+ citations >= 3, return 3
 *
 * Time Complexity: O(n) - single pass to count + single pass to find h-index
 * Space Complexity: O(n) - bucket array of size n+1
 *
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // STEP 1: Create bucket array where index represents citation counts
  // Index i stores count of papers with exactly i citations (or i+ if capped at length)
  // count number of at-least-i publication
  let countBiggerCitations = new Array(citations.length + 1).fill(0); // establish array with number of publication +1 (so index 6 easily accessible)

  // STEP 2: Populate buckets
  // For each paper's citation count, increment the corresponding bucket
  // Cap values at array length because h-index can't exceed number of papers
  for (let citation of citations) {
    // increment count of that item, if bigger update last index
    // Math.min ensures we don't go out of bounds and correctly groups large citation counts
    countBiggerCitations[Math.min(citation, citations.length)]++;
  }

  // STEP 3: Find h-index by checking from largest possible h backward
  // start from last, we will try from largest h index candidate
  // check which one satisfy first
  // The highest possible h-index is n (number of papers)
  let citationBiggerSoFar = 0;

  // Traverse from n down to 0, accumulating papers with h+ citations
  // The first h where we have >= h papers with h+ citations is our answer
  // i will start from 5, cos highest possible h is 5 (?)
  for (let hCandidate = citations.length; hCandidate >= 0; hCandidate--) {
    // Check if we have at least hCandidate papers with hCandidate+ citations
    if (citationBiggerSoFar + countBiggerCitations[hCandidate] >= hCandidate)
      return hCandidate;

    // otherwise accumulate citationBiggerSofar for next iteration
    // Add papers with exactly hCandidate citations to our running total
    // This total represents papers with >= hCandidate citations for the next iteration
    citationBiggerSoFar =
      countBiggerCitations[hCandidate] + citationBiggerSoFar;
  }
};

export { hIndex };
