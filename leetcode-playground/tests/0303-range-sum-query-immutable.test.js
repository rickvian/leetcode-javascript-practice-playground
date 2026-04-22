import { NumArray } from '../0303-range-sum-query-immutable.js';

describe('0303-range-sum-query-immutable', () => {
  it("sequence 1", () => {
    const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
    expect(obj.sumRange(0, 2)).toEqual(1);
    expect(obj.sumRange(2, 5)).toEqual(-1);
    expect(obj.sumRange(0, 5)).toEqual(-3);
  });

  it("sequence 2", () => {
    const obj = new NumArray([1, 2, 3]);
    expect(obj.sumRange(0, 0)).toEqual(1);
    expect(obj.sumRange(1, 2)).toEqual(5);
  });
});
