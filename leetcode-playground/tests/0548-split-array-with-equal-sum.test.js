import { splitArray } from '../0548-split-array-with-equal-sum.js';

describe('0548-split-array-with-equal-sum', () => {
  it("splitArray([1, 2, 3, 4, 5])", () => {
    const result = splitArray([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("splitArray([])", () => {
    const result = splitArray([]);
    expect(result).toEqual(false);
  });

  it("splitArray([1])", () => {
    const result = splitArray([1]);
    expect(result).toEqual(false);
  });

  it("splitArray([1, 1])", () => {
    const result = splitArray([1, 1]);
    expect(result).toEqual(false);
  });

  it("splitArray([3, 1, 4, 1, 5])", () => {
    const result = splitArray([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("splitArray([-1, 0, 1])", () => {
    const result = splitArray([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
