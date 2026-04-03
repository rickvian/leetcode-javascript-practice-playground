/**
 * LRU Cache using JavaScript Map
 *
 * Map maintains insertion order, so we can:
 * - Delete + re-add a key to move it to MRU (most recently used/end)
 * - map.keys().next().value gets the LRU (least recently used/first)
 *
 * Time Complexity:
 * - get(): O(1) - Map lookup + delete/insert
 * - put(): O(1) - Map operations + eviction
 * Space Complexity: O(capacity)
 *
 * @param {number} capacity - max items in cache
 */
var LRUCache = function (capacity) {
  this.cap = capacity;
  this.cache = new Map(); // Built-in ordered HashMap
};

/**
 * Get value by key and mark as recently used
 *
 * Strategy: Delete the key and re-add it to move to the end (MRU position)
 * Map maintains insertion order, so newest items are at the end
 *
 * @param {number} key
 * @return {number} value or -1 if not found
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1; // Key not found
  }

  const value = this.cache.get(key);

  // Move to MRU: delete and re-add to push to end
  this.cache.delete(key);
  this.cache.set(key, value);

  return value;
};

/**
 * Add or update key-value pair
 *
 * Strategy:
 * - If key exists: delete old entry, add new one (moves to MRU/end)
 * - If new key: add to cache
 * - If over capacity: remove LRU (first/oldest entry)
 *
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // Key exists: delete old entry to update
    this.cache.delete(key);
  }

  // Add new entry (or updated entry) to end of Map
  this.cache.set(key, value);

  // Evict LRU if we exceed capacity
  if (this.cache.size > this.cap) {
    // First key in Map is always the LRU (least recently used/oldest)
    const lruKey = this.cache.keys().next().value;
    this.cache.delete(lruKey);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export { LRUCache }