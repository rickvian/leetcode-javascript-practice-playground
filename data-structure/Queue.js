/**
 * Queue — FIFO (First In, First Out)
 *
 * Backed by a singly-linked list with head + tail pointers.
 *
 *   head → [a] → [b] → [c] ← tail
 *           ↑                  ↑
 *       dequeue here       enqueue here
 *
 * Why NOT a plain JS array? `arr.shift()` is O(n) — every dequeue re-indexes
 * the entire array. A million-item queue would be quadratic in total work.
 *
 * Alternatives considered:
 *   - circular buffer (fixed capacity) — fast but needs resize logic on grow
 *   - two-stack queue — amortized O(1) but worst-case O(n) on a single op
 *   - linked list — true O(1) per op, simple invariant; the teaching pick
 *
 * Common uses:
 *   - BFS (level-order traversal)
 *   - task scheduling, request buffering
 *   - producer/consumer pipelines
 *
 * Space: O(n) — extra pointer per node vs. array
 *
 * enqueue   O(1) — append at tail
 * dequeue   O(1) — drop head
 * front     O(1)
 * size      O(1) — counter kept on every op
 * isEmpty   O(1)
 */
class Queue {
  #head = null;
  #tail = null;
  #size = 0;

  enqueue(val) {
    const node = { val, next: null };
    if (this.#tail === null) {
      // empty queue — head and tail both point at the new node
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#size++;
  }

  dequeue() {
    if (this.#head === null) return undefined;
    const val = this.#head.val;
    this.#head = this.#head.next;
    // last item just left — keep tail in sync, otherwise enqueue breaks
    if (this.#head === null) this.#tail = null;
    this.#size--;
    return val;
  }

  front() {
    return this.#head?.val;
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }
}

export { Queue };
