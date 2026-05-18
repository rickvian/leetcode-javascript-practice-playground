/**
 * LinkedList — singly linked
 *
 *   head → [a|·] → [b|·] → [c|null]
 *
 * Each node holds a value and ONE pointer to the next node. The list ends
 * when `next === null`.
 *
 * Why use one over an array?
 *   - O(1) insert/remove at the head
 *   - size grows without re-allocating a contiguous buffer
 *   - good for problems where you splice nodes mid-list given a reference
 *
 * Why NOT use one?
 *   - no random access — `get(i)` is O(i), not O(1)
 *   - poor cache locality — nodes scatter across memory
 *   - higher memory per element (pointer overhead)
 *
 * In practice, most "linked list" LeetCode problems are about pointer
 * gymnastics (reverse, detect cycle, merge sorted, etc.) — not because
 * linked lists are inherently better, but because they force you to reason
 * about references explicitly.
 *
 * Space: O(n)
 *
 * prepend     O(1)
 * append      O(1)        — tail pointer kept in sync
 * removeHead  O(1)
 * removeTail  O(n)        — must walk to find new tail (no prev pointer)
 * insertAt    O(n)
 * removeAt    O(n)
 * find        O(n)
 * size        O(1)
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  prepend(val) {
    this.#head = new ListNode(val, this.#head);
    if (this.#tail === null) this.#tail = this.#head;
    this.#size++;
  }

  append(val) {
    const node = new ListNode(val);
    if (this.#tail === null) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#size++;
  }

  removeHead() {
    if (this.#head === null) return undefined;
    const val = this.#head.val;
    this.#head = this.#head.next;
    if (this.#head === null) this.#tail = null;
    this.#size--;
    return val;
  }

  insertAt(index, val) {
    if (index < 0 || index > this.#size) return false;
    if (index === 0) { this.prepend(val); return true; }
    if (index === this.#size) { this.append(val); return true; }
    // walk to node at (index - 1) so we can splice between it and its next
    let prev = this.#head;
    for (let i = 0; i < index - 1; i++) prev = prev.next;
    prev.next = new ListNode(val, prev.next);
    this.#size++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.#size) return undefined;
    if (index === 0) return this.removeHead();
    let prev = this.#head;
    for (let i = 0; i < index - 1; i++) prev = prev.next;
    const removed = prev.next;
    prev.next = removed.next;
    if (removed === this.#tail) this.#tail = prev;
    this.#size--;
    return removed.val;
  }

  find(val) {
    let i = 0;
    for (let node = this.#head; node !== null; node = node.next, i++) {
      if (node.val === val) return i;
    }
    return -1;
  }

  toArray() {
    const out = [];
    for (let node = this.#head; node !== null; node = node.next) out.push(node.val);
    return out;
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }
}

export { LinkedList, ListNode };
