/**
 * DoublyLinkedList — each node has prev AND next pointers
 *
 *   null ← [a] ⇄ [b] ⇄ [c] → null
 *           ↑           ↑
 *          head        tail
 *
 * Why pay 2× the pointers? Because given a node reference, you can:
 *   - remove it in O(1) without scanning to find the predecessor
 *   - walk backward as well as forward
 *
 * This is exactly what an LRU cache needs: a HashMap maps keys → nodes,
 * and the list reorders itself on every access. Without `prev`, the
 * "remove a node" step becomes O(n) and the cache is broken.
 *
 * The `removeNode(node)` method below is the headline feature — it's why
 * this structure exists. Everything else is the same as a singly-linked list
 * with an extra back-pointer kept in sync.
 *
 * Sentinel-node trick (used here): keep dummy `head` and `tail` nodes that
 * never hold values. Removes all "is this the first/last node?" branches —
 * every real node has a real prev and next. Cleaner code, fewer bugs.
 *
 *   [HEAD] ⇄ [a] ⇄ [b] ⇄ [TAIL]
 *
 * Space: O(n)
 *
 * addFirst    O(1)
 * addLast     O(1)
 * removeFirst O(1)
 * removeLast  O(1)
 * removeNode  O(1)   ← given a node reference
 * size        O(1)
 */
class DListNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  #head;  // sentinel — not a real value
  #tail;  // sentinel — not a real value
  #size = 0;

  constructor() {
    this.#head = new DListNode(null);
    this.#tail = new DListNode(null);
    this.#head.next = this.#tail;
    this.#tail.prev = this.#head;
  }

  addFirst(val) {
    return this.#insertAfter(this.#head, val);
  }

  addLast(val) {
    return this.#insertAfter(this.#tail.prev, val);
  }

  removeFirst() {
    if (this.#size === 0) return undefined;
    return this.removeNode(this.#head.next);
  }

  removeLast() {
    if (this.#size === 0) return undefined;
    return this.removeNode(this.#tail.prev);
  }

  /**
   * O(1) removal — the whole point of the doubly-linked design.
   * Caller must own the node reference (e.g. obtained from addFirst/addLast).
   */
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.#size--;
    return node.val;
  }

  toArray() {
    const out = [];
    for (let n = this.#head.next; n !== this.#tail; n = n.next) out.push(n.val);
    return out;
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  #insertAfter(prev, val) {
    const node = new DListNode(val);
    node.prev = prev;
    node.next = prev.next;
    prev.next.prev = node;
    prev.next = node;
    this.#size++;
    return node; // returned so caller can remove in O(1) later
  }
}

export { DoublyLinkedList, DListNode };
