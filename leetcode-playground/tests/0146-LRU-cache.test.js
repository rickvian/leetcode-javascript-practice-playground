import { LRUCache } from "../0146-LRU-cache";

describe("146 LRU Cache", () => {
  test("Example 1: basic get and put operations", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3); // evicts key 2
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    cache.put(4, 4); // evicts key 1
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  test("get returns -1 for non-existent key", () => {
    const cache = new LRUCache(1);
    expect(cache.get(1)).toBe(-1);
  });

  test("put updates existing key value", () => {
    const cache = new LRUCache(2);
    cache.put(1, 10);
    cache.put(1, 20);
    expect(cache.get(1)).toBe(20);
  });

  test("updating existing key refreshes its usage", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(1, 10); // refreshes key 1
    cache.put(3, 3); // should evict key 2, not key 1
    expect(cache.get(1)).toBe(10);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(3);
  });

  test("get refreshes key usage", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1); // refreshes key 1
    cache.put(3, 3); // should evict key 2
    expect(cache.get(1)).toBe(1);
    expect(cache.get(2)).toBe(-1);
  });

  test("capacity of 1", () => {
    const cache = new LRUCache(1);
    cache.put(1, 1);
    cache.put(2, 2); // evicts key 1
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(2);
  });
});
