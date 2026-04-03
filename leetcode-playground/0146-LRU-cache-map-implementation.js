/**
 * LRU Cache using JavaScript Map (Simplified Version)

 *
 * @param {number} capacity - max items in cache
 */
var LRUCache = function (capacity) {
  this.cap = capacity;
  this.cache = new Map();
};

/**
 *
 * @param {number} key
 * @return {number} value or -1 if not found
 */
LRUCache.prototype.get = function (key) {
  // when we touch the value, we want to update it into MRU

  if (!this.cache.has(key)) {
    return -1;
  }

  // if found

  const currentValue = this.cache.get(key);

  this.cache.delete(key); // this removes it from existing key order,
  this.cache.set(key, currentValue); // this set it as recently added (MRU)
  return currentValue;
};

/**
 * Add or update key-value pair
 *
 *
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // when put, if its not found, simply set
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }

  this.cache.set(key, value); // reset its position as MRU

  // if its overcapacity, we want to remove the LRU
  if (this.cache.size > this.cap) {
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

export { LRUCache };
