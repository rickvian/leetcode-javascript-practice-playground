import { splitArray } from '../0410-split-array-largest-sum.js';

describe('0410-split-array-largest-sum', () => {
  it("splitArray([2, 7, 11, 15], 9)", () => {
    const result = splitArray([2, 7, 11, 15], 9);
    expect(result).toEqual(15);
  });

  it("splitArray([3, 2, 4], 6)", () => {
    const result = splitArray([3, 2, 4], 6);
    expect(result).toEqual(4);
  });

  it("splitArray([3, 3], 6)", () => {
    const result = splitArray([3, 3], 6);
    expect(result).toEqual(3);
  });

  it("splitArray([-1, -2, -3, -4, -5], -8)", () => {
    const result = splitArray([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-1);
  });

  it("splitArray([1, 2], 3)", () => {
    const result = splitArray([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("splitArray([0, 4, 3, 0], 0)", () => {
    const result = splitArray([0, 4, 3, 0], 0);
    expect(result).toEqual(7);
  });
});
