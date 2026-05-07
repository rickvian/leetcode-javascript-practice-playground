/**
 * Given an array nums and a sliding window of size k moving from left to right, return the maximum value in each window.
 *
 * https://leetcode.com/problems/sliding-window-maximum/description/
 *
 * Approach: Monotonic Decreasing Deque
 * ─────────────────────────────────────────────────────────────────────────────
 * We maintain a deque `q` that stores **indices** of elements in the current
 * window, ordered so that their corresponding values are monotonically
 * decreasing (q[0] always holds the index of the window maximum).
 *
 * Key invariants at every step:
 *   1. q[0] is always the index of the maximum value in the current window.
 *   2. All indices in q are within the current window [l, r].
 *   3. Values at those indices are strictly decreasing front-to-back.
 *
 * Step-by-step per iteration:
 *   1. Pop from the back: remove indices whose values are ≤ nums[r], because
 *      they can never be the window max while nums[r] is still in the window.
 *   2. Push r: add the new right index to the back.
 *   3. Evict stale front: if q[0] < l, that index has slid out of the window
 *      on the left and must be removed with shift().
 *      NOTE: This only happens when no larger element ever cleared q[0] out
 *      during the pop step — i.e., the old max survived the pop loop but its
 *      index is now behind the left boundary.
 *   4. Collect output: once the window is full (r + 1 >= k), nums[q[0]] is
 *      the window max. Then advance l to slide the window forward.
 *
 * Example trace — nums = [1,3,1,2,0,5], k = 3:
 *   r=0: q=[0]             window not full
 *   r=1: pop 0 (1<3), q=[1]  window not full
 *   r=2: q=[1,2]           window [1,3,1] → max=nums[1]=3, l→1
 *   r=3: pop 2 (1<2), q=[1,3]  q[0]=1 < l=1? no. window [3,1,2] → max=3, l→2
 *   r=4: q=[1,3,4]  q[0]=1 < l=2? yes → shift → q=[3,4]  window [1,2,0] → max=2, l→3
 *   r=5: pop 4 (0<5), pop 3 (2<5), q=[5]  window [2,0,5] → max=5, l→4
 *   output = [3, 3, 2, 5]
 *
 * Time Complexity:  O(n) — each index is pushed and popped from the deque at most once.
 * Space Complexity: O(k) — the deque holds at most k indices at any time.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let output = [];
  let q = []; // monotonic decreasing deque of indices
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    // Remove from back: any index whose value is smaller than nums[r] is
    // useless — nums[r] will outlast them in the window and is larger.
    while (q.length > 0 && nums[q.at(-1)] < nums[r]) {
      q.pop();
    }

    q.push(r);

    // Remove from front: if the front index has fallen outside the window's
    // left boundary, it's stale and no longer a candidate for the maximum.
    // This triggers only when the old max was never beaten by a larger value
    // (so the pop loop never evicted it) but the window has since moved past it.
    if (q[0] < l) {
      q.shift();
    }

    // Window is full — q[0] is the index of the current maximum.
    if (r + 1 >= k) {
      output.push(nums[q[0]]);
      l++;
    }

    r++;
  }

  return output;
};

export { maxSlidingWindow };
