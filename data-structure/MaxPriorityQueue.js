/**
 * MaxPriorityQueue — binary max-heap
 *
 * Conceptually a complete binary tree, but stored as a flat array.
 * No Node objects, no pointers — the tree exists only in the index formula:
 *
 *   parent of i  →  (i - 1) >> 1
 *   left child   →  2 * i + 1
 *   right child  →  2 * i + 2
 *
 * This works because a heap is always a COMPLETE binary tree (filled left
 * to right, no gaps), so indices never have holes. BSTs/AVL/Red-Black trees
 * can't use this trick — their arbitrary shape breaks the formula, so they
 * need actual node pointers.
 *
 * Array beats node-based for heaps:
 *   - no pointer overhead per node
 *   - contiguous memory → CPU cache friendly
 *
 * Example — array [6, 4, 5, 2, 3] represents:
 *
 *        6(0)
 *       /    \
 *     4(1)   5(2)
 *     / \
 *   2(3) 3(4)
 *
 * Space: O(n)
 *
 * enqueue  O(log n) — bubble up at most tree height
 * dequeue  O(log n) — sink down at most tree height
 * front    O(1)     — max is always at index 0
 * size     O(1)
 * isEmpty  O(1)
 */
class MaxPriorityQueue {
  #heap = [];
  #priorityOf;

  /**
   * @param {object} [opts]
   * @param {(item: any) => number} [opts.priorityOf] — extracts numeric priority from an item.
   *   NOTE: do NOT name this `valueOf` — it collides with Object.prototype.valueOf,
   *   which destructuring picks up via the prototype chain when the option object is empty.
   */
  constructor({ priorityOf = (x) => x } = {}) {
    this.#priorityOf = priorityOf;
  }

  enqueue(val) {
    this.#heap.push(val);
    this.#bubbleUp(this.#heap.length - 1);
  }

  dequeue() {
    // never shifts the array — avoids O(n) cost
    //
    // e.g. heap = [6, 4, 5, 2, 3, 1]
    //
    // step 1 — swap root with last:  [1, 4, 5, 2, 3, 6]
    this.#swap(0, this.#heap.length - 1);
    // step 2 — pop from tail (O(1)): [1, 4, 5, 2, 3]  top = 6
    const top = this.#heap.pop();
    // step 3 — sink new root down:   [5, 4, 1, 2, 3]  O(log n)
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
      // tree structure lives in the index formula — no pointers, no nodes
      // parent of i = (i - 1) / 2  e.g. parent of index 3 → (3-1)>>1 = 1
      const parent = (i - 1) >> 1;
      if (this.#priority(parent) >= this.#priority(i)) break;
      this.#swap(parent, i);
      i = parent; // "move up" = just change which index we're looking at
    }
  }

  #sinkDown(i) {
    const n = this.#heap.length;
    while (true) {
      let largest = i;
      // left/right child indices are pure arithmetic — the tree only exists in this formula
      // array: [6, 4, 5, 2, 3]  →  tree:  6(0)
      //                                   / \
      //                                 4(1) 5(2)
      //                                 / \
      //                               2(3) 3(4)
      const l = 2 * i + 1; // left child of i
      const r = 2 * i + 2; // right child of i
      if (l < n && this.#priority(l) > this.#priority(largest)) largest = l;
      if (r < n && this.#priority(r) > this.#priority(largest)) largest = r;
      if (largest === i) break;
      this.#swap(i, largest);
      i = largest; // "move down" = just update i to the child index
    }
  }
}

export { MaxPriorityQueue };
