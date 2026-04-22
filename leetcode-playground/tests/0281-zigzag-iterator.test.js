import { ZigzagIterator } from '../0281-zigzag-iterator.js';

describe('0281-zigzag-iterator', () => {
  it("sequence 1", () => {
    const obj = new ZigzagIterator([1, 3, 5], [2, 4, 6]);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(1);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(2);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(3);
  });

  it("sequence 2", () => {
    const obj = new ZigzagIterator([1], [2, 3]);
    expect(obj.next()).toEqual(1);
    expect(obj.hasNext()).toEqual(true);
    expect(obj.next()).toEqual(2);
    expect(obj.next()).toEqual(3);
    expect(obj.hasNext()).toEqual(false);
  });

  it("sequence 3", () => {
    const obj = new ZigzagIterator([], [1, 2, 3]);
    expect(obj.next()).toEqual(1);
    expect(obj.next()).toEqual(2);
    expect(obj.next()).toEqual(3);
    expect(obj.hasNext()).toEqual(false);
  });
});
