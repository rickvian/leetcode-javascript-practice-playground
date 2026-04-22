import { fourSum } from '../0018-4sum.js';

describe('0018-4sum', () => {
  it("fourSum([2, 7, 11, 15], 9)", () => {
    const result = fourSum([2, 7, 11, 15], 9);
    expect(result).toEqual([]);
  });

  it("fourSum([2, 3, 4], 6)", () => {
    const result = fourSum([2, 3, 4], 6);
    expect(result).toEqual([]);
  });

  it("fourSum([3, 3], 6)", () => {
    const result = fourSum([3, 3], 6);
    expect(result).toEqual([]);
  });

  it("fourSum([-5, -4, -3, -2, -1], -8)", () => {
    const result = fourSum([-5, -4, -3, -2, -1], -8);
    expect(result).toEqual([]);
  });

  it("fourSum([1, 2], 3)", () => {
    const result = fourSum([1, 2], 3);
    expect(result).toEqual([]);
  });

  it("fourSum([0, 0, 3, 4], 0)", () => {
    const result = fourSum([0, 0, 3, 4], 0);
    expect(result).toEqual([]);
  });
});
