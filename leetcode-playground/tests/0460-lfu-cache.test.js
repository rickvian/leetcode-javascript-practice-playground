import { LFUCache } from '../0460-lfu-cache.js';

describe('0460-lfu-cache', () => {
  it("sequence 1", () => {
    const obj = new LFUCache(2);
    obj.put(1, 1);
    obj.put(2, 2);
    expect(obj.get(1)).toEqual(1);
    obj.put(3, 3);
    expect(obj.get(2)).toEqual(-1);
    obj.put(4, 4);
    expect(obj.get(1)).toEqual(1);
    expect(obj.get(3)).toEqual(-1);
    expect(obj.get(4)).toEqual(4);
  });

  it("sequence 2", () => {
    const obj = new LFUCache(1);
    obj.put(2, 1);
    expect(obj.get(2)).toEqual(1);
    obj.put(3, 2);
    expect(obj.get(2)).toEqual(-1);
    expect(obj.get(3)).toEqual(2);
  });
});
