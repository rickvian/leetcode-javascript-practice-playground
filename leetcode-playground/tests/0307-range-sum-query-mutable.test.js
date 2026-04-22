import { NumArray } from '../0307-range-sum-query-mutable.js';

describe('0307-range-sum-query-mutable', () => {
  it("sequence 1", () => {
    const obj = new NumArray([1, 3, 5, 7, 9, 11]);
    expect(obj.sumRange(0, 2)).toEqual(9);
    obj.update(1, 2);
    expect(obj.sumRange(0, 2)).toEqual(8);
  });

  it("sequence 2", () => {
    const obj = new NumArray([1, 2, 3, 4, 5]);
    expect(obj.sumRange(0, 4)).toEqual(15);
    obj.update(2, 10);
    expect(obj.sumRange(0, 4)).toEqual(22);
  });
});
