/**
 * MinPriorityQueue — binary min-heap
 *
 * Same array-as-tree trick as MaxPriorityQueue (see that file for full
 * heap-vs-pointer-tree explanation). The ONLY difference is comparator
 * direction: parent ≤ children instead of parent ≥ children.
 *
 *   parent of i  →  (i - 1) >> 1
 *   left child   →  2 * i + 1
 *   right child  →  2 * i + 2
 *
 * Example — array [1, 3, 2, 7, 4] represents:
 *
 *        1(0)
 *       /    \
 *     3(1)   2(2)
 *     / \
 *   7(3) 4(4)
 *
 * Common uses (these are why min-heap is the default flavor in algorithms):
 *   - Dijkstra / A\* — always pop the lowest-cost frontier node
 *   - merge K sorted lists — always pop the smallest head
 *   - top-K LARGEST (counterintuitive): keep K elements in a min-heap; if a
 *     new element exceeds the min, evict the min. Min stays ready to evict.
 *
 * For min-heap-of-objects, pass `priorityOf` to extract a numeric priority:
 *
 *   new MinPriorityQueue({ priorityOf: (task) => task.deadline })
 *
 * (NOT `valueOf` — that name collides with Object.prototype.valueOf, which
 *  destructuring will pick up via the prototype chain on an empty options object.)
 *
 * Space: O(n)
 *
 * enqueue  O(log n) — bubble up at most tree height
 * dequeue  O(log n) — sink down at most tree height
 * front    O(1)     — min is always at index 0
 * size     O(1)
 * isEmpty  O(1)
 */
class MinPriorityQueue {
  #heap = [];
  #priorityOf;

  constructor({ priorityOf = (x) => x } = {}) {
    this.#priorityOf = priorityOf;
  }

  enqueue(val) {
    this.#heap.push(val);
    this.#bubbleUp(this.#heap.length - 1);
  }

  dequeue() {
    if (this.#heap.length === 0) return undefined;
    // swap-with-last + pop avoids O(n) shift
    this.#swap(0, this.#heap.length - 1);
    const top = this.#heap.pop();
    this.#sinkDown(0);
    return top;
  }

  front() {
    return this.#heap[0];
  }

  size() {
    return this.#heap.length;
  }

  isEmpty() {
    return this.#heap.length === 0;
  }

  #priority(i) {
    return this.#priorityOf(this.#heap[i]);
  }

  #swap(i, j) {
    [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
  }

  #bubbleUp(i) {
    while (i > 0) {
      const parent = (i - 1) >> 1;
      // min-heap: stop when parent already ≤ child
      if (this.#priority(parent) <= this.#priority(i)) break;
      this.#swap(parent, i);
      i = parent;
    }
  }

  #sinkDown(i) {
    const n = this.#heap.length;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      // min-heap: pick the SMALLER child to swap with
      if (l < n && this.#priority(l) < this.#priority(smallest)) smallest = l;
      if (r < n && this.#priority(r) < this.#priority(smallest)) smallest = r;
      if (smallest === i) break;
      this.#swap(i, smallest);
      i = smallest;
    }
  }
}

export { MinPriorityQueue };
