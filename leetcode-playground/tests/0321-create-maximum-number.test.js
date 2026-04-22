import { maxNumber } from '../0321-create-maximum-number.js';

describe('0321-create-maximum-number', () => {
  it("maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3]...)", () => {
    const result = maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5);
    expect(result).toEqual([9, 8, 6, 5, 3]);
  });

  it("maxNumber([6, 7], [6, 0, 4]...)", () => {
    const result = maxNumber([6, 7], [6, 0, 4], 5);
    expect(result).toEqual([6, 7, 6, 0, 4]);
  });

  it("maxNumber([3, 9], [8, 9]...)", () => {
    const result = maxNumber([3, 9], [8, 9], 3);
    expect(result).toEqual([9, 8, 9]);
  });

  it("maxNumber([2, 1], [9, 3, 1, 8, 2, 8, 8]...)", () => {
    const result = maxNumber([2, 1], [9, 3, 1, 8, 2, 8, 8], 3);
    expect(result).toEqual([9, 8, 8]);
  });

  it("maxNumber([], [1, 2, 3]...)", () => {
    const result = maxNumber([], [1, 2, 3], 2);
    expect(result).toEqual([2, 3]);
  });

  it("maxNumber([1], []...)", () => {
    const result = maxNumber([1], [], 1);
    expect(result).toEqual([1]);
  });
});
