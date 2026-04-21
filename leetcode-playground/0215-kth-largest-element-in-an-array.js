/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // implement
  // nums = [3,2,1,4,5,5], k = 2
  // return 5
  // quick approach
  // can sort the array, then iterate from back k times
  // this n Log(n) for sort, + K, so n Log(n) + K
  //
  //   nums.sort((a, b) => b - a);
  //   for (let i = 0; i < nums.length; i++) {
  //     if (i == k - 1) return nums[i];
  //   }
  // --
  // can use heapify, then pop k times, you will get the kth largest.
  // heap o(n) to build, and pop will be log(n) to rebalance the tree
  // space complexity will be o(n) too.
  // unfortunately javascript does not have build in heap.
  // there are more optimized way
  // ---
  // there are better way, use Quick select pattern
  // take 1 pivot, then re arrange the list into part, [less than pivot] [pivot] [more than pivot]
  // then check where k-th largest item possibly be in the section? then perform quick select recursive into that part
  //[3, 2, 1, 4, 5, 6]
  //                i
  //             P
  //                pivot
  // 0  1  2  3  4  5
  // 6 < 4?
  // no, bigger than pivot, leave the pointer, when P stop, it marked as
  // the actual position for pivot
  // [3, 2, 1, 5, 6, 4]
  // - once i done iterate, swap P with pivot.
  // now the array, left guaranteed smaller, right guaranteed smaller,
  // check if p is the kIndex? (length - k) if yes, then its guaranteed to be kth largest.
  // otherwise, we need to keep looking, e.g K is 2 now, so 6-2 = 4, we looking for item in index 4;
  //   the K is on right side, meaning we can do quickSelect on right again
  // quickSelect(4, 5);
  //  [5, 6]
  //      i
  //   p
  //      pivot
  // is num[i] < pivotValue?
  // no, then move the i only
  // i iteration ends, we do 1 time p swap with pivot
  // check if P == kIndex? 4=4, yes, thats the answer.

  // --- Production Usefulness of QuickSelect ---
  // Yes, but with caveats.
  //
  // WHERE IT'S USED:
  // - Database engines (PostgreSQL, MySQL) use it internally for ORDER BY ... LIMIT k queries.
  // - NumPy's np.partition() and std::nth_element in C++ STL are QuickSelect variants.
  // - Streaming analytics: finding median or percentiles (p95, p99 latency) over large datasets.
  // - Machine learning: feature selection, finding top-K closest neighbors in KNN.
  //
  // WHY IT WINS OVER SORT (O(n log n)):
  // - O(n) average vs O(n log n) for sort — meaningful at scale (millions of rows).
  // - In-place: O(1) extra space vs O(n) for a heap-based approach.
  //
  // WHY PRODUCTION CODE ADDS EXTRAS ON TOP:
  // - Worst case O(n²) on already-sorted or adversarial input is unacceptable.
  //   Fix: "Median of medians" pivot selection guarantees O(n) worst case.
  //   Or: random pivot shuffle (Randomized QuickSelect) — reduces O(n²) to near-impossible.
  // - C++ std::nth_element uses IntroSelect: QuickSelect + fallback to HeapSelect on bad pivots.
  //
  // WHEN NOT TO USE:
  // - Small arrays (< ~20 elements): insertion sort wins due to cache locality.
  // - When you need the full sorted top-K (not just the Kth value): use a min-heap of size K → O(n log k).
  // - Concurrent/parallel environments: QuickSelect mutates the array in-place, not safe without copying.

  // Optimization: Randomized QuickSelect
  // Randomly shuffle pivot into nums[r] before each partition.
  // This breaks adversarial input patterns (sorted arrays) that cause O(n²) worst case,
  // reducing it to astronomically unlikely in practice — expected O(n) on all inputs.
  //
  // Bug fix: loop must start from l, not 0. Without this, when recursing into the left
  // partition, elements before l get re-examined and can corrupt the partition boundary.
  //
  // Time: O(n) average (randomized), O(n²) worst case (extremely unlikely)
  // Space: O(log n) average, O(n) worst case (recursion stack)
  let kIndex = nums.length - k;

  function quickSelect(l, r) {
    // pick random pivot and move it to r so the rest of the logic is unchanged
    const randomIndex = Math.floor(Math.random() * (r - l + 1)) + l;
    [nums[randomIndex], nums[r]] = [nums[r], nums[randomIndex]];

    let pointer = l;
    let pivotValue = nums[r];

    // pointer only advances when the current element is <= pivot.
    // this means whenever we find a small element, pointer is sitting on a large element that was skipped.
    // the swap evicts that large number rightward and pulls the small number into the left partition.
    for (let i = l; i < r; i++) {
      if (nums[i] <= pivotValue) {
        [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
        pointer++;
      }
    }

    [nums[pointer], nums[r]] = [nums[r], nums[pointer]]; // place pivot at its final sorted position

    if (pointer < kIndex) return quickSelect(pointer + 1, r); // kIndex is on right side
    if (pointer > kIndex) return quickSelect(l, pointer - 1); // kIndex is on left side

    return nums[pointer];
  }

  return quickSelect(0, nums.length - 1);
};

export { findKthLargest };
