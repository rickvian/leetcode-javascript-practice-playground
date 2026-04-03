// Node in the doubly-linked list
// Stores both key and value (key needed for eviction)
// prev/next pointers maintain order: LRU ← ... → MRU
function Node(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}

/**
 * LRU Cache using HashMap + Doubly-Linked List
 *
 * Design: HashMap for O(1) lookups, DLL to track access order
 * Structure: [LRU_sentinel] ← ... ← [recently_used] ← [MRU_sentinel]
 *
 * @param {number} capacity - max items in cache
 */
var LRUCache = function (capacity) {
  this.cap = capacity;

  // HashMap: O(1) key lookups and insertions
  // Maps key → Node (stores both value and linked-list pointers)
  this.cache = {};

  // Size counter: O(1) capacity check (was O(n) with Object.keys())
  this.size = 0;

  // Sentinel nodes eliminate edge cases (no null checks needed)
  // Left sentinel: always points to least-recently-used node
  this.left = new Node(0, 0);

  // Right sentinel: always points to most-recently-used node
  this.right = new Node(0, 0);

  // Connect sentinels
  // Empty list: [left_sentinel] ←→ [right_sentinel]
  this.left.next = this.right;
  this.right.prev = this.left;

  // ============= LINKED LIST HELPER METHODS =============
  // Grouped here to manage the doubly-linked list structure
  this.dll = {
    /**
     * Insert node at MRU position (right before right sentinel)
     * This marks a node as recently used
     *
     * Before: [prev_MRU] ←→ [right_sentinel]
     * After:  [prev_MRU] ←→ [new_node] ←→ [right_sentinel]
     *
     * Time: O(1) - just 4 pointer updates
     */
    insert: (node) => {
      const currentMRU = this.right.prev; // node currently before right sentinel
      const mruSentinel = this.right;

      // Link current MRU to new node
      currentMRU.next = node;
      mruSentinel.prev = node;

      // Link new node to neighbors
      node.prev = currentMRU;
      node.next = mruSentinel;
    },

    /**
     * Remove node from doubly-linked list (can be anywhere)
     *
     * Before: [A] ←→ [node] ←→ [B]
     * After:  [A] ←→ [B]
     *
     * Time: O(1) - just 2 pointer updates
     */
    remove: (node) => {
      const prev = node.prev;
      const next = node.next;

      // Stitch neighbors together (bypass this node)
      prev.next = next;
      next.prev = prev;
    },
  };
};

// ============= CACHE OPERATIONS =============

/**
 * Get value by key and mark as recently used
 *
 * Accessing a key = using it recently, so move to MRU position
 *
 * Time: O(1) - HashMap lookup + 2x remove/insert operations
 * @param {number} key
 * @return {number} value or -1 if not found
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    const node = this.cache[key];
    // Move to MRU: remove from current position, re-insert at end
    this.dll.remove(node);
    this.dll.insert(node);
    return node.val;
  }
  // Not found
  return -1;
};

/**
 * Add/update key-value pair
 *
 * Strategy:
 * - Existing key: update value + move to MRU (mark recently used)
 * - New key: insert at MRU position, increment size, evict LRU if full
 *
 * Time: O(1) for all operations (including capacity check with counter)
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    // CASE 1: Key exists - update and refresh position
    this.cache[key].val = value;
    // Move to MRU (marks as recently used, shouldn't be evicted soon)
    this.dll.remove(this.cache[key]);
    this.dll.insert(this.cache[key]);
  } else {
    // CASE 2: New key - add to cache
    const node = new Node(key, value);
    this.cache[key] = node;
    this.dll.insert(node); // Insert at MRU position
    this.size++; // Increment counter (O(1) vs O(n) with Object.keys())

    // Evict LRU node if we exceed capacity
    if (this.size > this.cap) {
      const lru = this.left.next; // Least recently used is always next to left sentinel
      this.dll.remove(lru); // Detach from list
      delete this.cache[lru.key]; // Remove from HashMap
      this.size--; // Decrement counter
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export { LRUCache };
