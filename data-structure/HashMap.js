/**
 * HashMap — separate-chaining hash table
 *
 * Internal layout: a fixed-size array of buckets, each bucket is itself an
 * array of [key, value] pairs (the "chain").
 *
 *   buckets[0] → [ [k1, v1] ]
 *   buckets[1] → [ [k7, v7], [k15, v15] ]    ← collision chain
 *   buckets[2] → [ ]
 *   buckets[3] → [ [k3, v3] ]
 *
 *   index = hash(key) % buckets.length
 *
 * Two collisions land in the same bucket; we walk the chain to find the
 * exact key. Average chain length ≈ size / capacity = "load factor".
 * Keep load factor low (<0.75 here) and operations stay O(1) average.
 *
 * What "rehash" does: when load factor crosses the threshold, double the
 * bucket array and re-insert every entry. Costs O(n) but amortizes to O(1)
 * per insert because doublings are exponentially spaced.
 *
 * Why NOT just use the native `Map`? In production, do. This exists so the
 * mechanics — hashing, bucketing, collision handling, resizing — are visible.
 *
 * Hash function caveat: this implementation uses a simple string-based hash
 * (djb2 variant). Real hash maps use richer hashing and randomization to
 * defeat collision-based DoS attacks.
 *
 * Space: O(n + capacity)
 *
 * set      O(1) avg, O(n) worst (all keys hash to the same bucket)
 * get      O(1) avg, O(n) worst
 * delete   O(1) avg, O(n) worst
 * has      O(1) avg, O(n) worst
 */
class HashMap {
  #buckets;
  #capacity;
  #size = 0;
  static #LOAD_FACTOR = 0.75;
  static #INITIAL_CAPACITY = 16;

  constructor() {
    this.#capacity = HashMap.#INITIAL_CAPACITY;
    this.#buckets = Array.from({ length: this.#capacity }, () => []);
  }

  set(key, value) {
    const bucket = this.#bucketFor(key);
    // walk the chain — update if key already present
    for (const pair of bucket) {
      if (pair[0] === key) { pair[1] = value; return; }
    }
    bucket.push([key, value]);
    this.#size++;
    if (this.#size / this.#capacity > HashMap.#LOAD_FACTOR) this.#rehash();
  }

  get(key) {
    const bucket = this.#bucketFor(key);
    for (const [k, v] of bucket) {
      if (k === key) return v;
    }
    return undefined;
  }

  has(key) {
    const bucket = this.#bucketFor(key);
    for (const [k] of bucket) {
      if (k === key) return true;
    }
    return false;
  }

  delete(key) {
    const bucket = this.#bucketFor(key);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        // swap-with-last to avoid O(n) splice — order in a chain is irrelevant
        bucket[i] = bucket[bucket.length - 1];
        bucket.pop();
        this.#size--;
        return true;
      }
    }
    return false;
  }

  size() {
    return this.#size;
  }

  *entries() {
    for (const bucket of this.#buckets) {
      for (const pair of bucket) yield pair;
    }
  }

  #bucketFor(key) {
    return this.#buckets[this.#hash(key) % this.#capacity];
  }

  /**
   * djb2-style hash on the string form of the key.
   * Good enough for teaching; production-grade maps use stronger hashing.
   */
  #hash(key) {
    const s = String(key);
    let h = 5381;
    for (let i = 0; i < s.length; i++) {
      // (h << 5) + h === h * 33; bitwise shift keeps it in i32 range
      h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    }
    return h >>> 0; // unsigned for modulo math
  }

  #rehash() {
    const old = this.#buckets;
    this.#capacity *= 2;
    this.#buckets = Array.from({ length: this.#capacity }, () => []);
    this.#size = 0;
    // re-insert everything — bucket index changes because capacity changed
    for (const bucket of old) {
      for (const [k, v] of bucket) this.set(k, v);
    }
  }
}

export { HashMap };
