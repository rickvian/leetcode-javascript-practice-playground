import { RLEIterator } from '../0900-rle-iterator.js';

describe('0900-rle-iterator', () => {
  it("sequence 1", () => {
    const obj = new RLEIterator([3, 8, 0, 9, 2, 5]);
    expect(obj.next(2)).toEqual(8);
    expect(obj.next(1)).toEqual(8);
    expect(obj.next(1)).toEqual(5);
  });

  it("sequence 2", () => {
    const obj = new RLEIterator([1, 1, 2, 2]);
    expect(obj.next(1)).toEqual(1);
    expect(obj.next(2)).toEqual(2);
    expect(obj.next(1)).toEqual(-1);
  });

  it("sequence 3", () => {
    const obj = new RLEIterator([10, 5]);
    expect(obj.next(5)).toEqual(5);
    expect(obj.next(5)).toEqual(5);
    expect(obj.next(1)).toEqual(-1);
  });
});
