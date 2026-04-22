import { threeSum } from '../0015-3sum.js';

describe('0015-3sum', () => {
  it("threeSum([1, 2, 3, 4, 5])", () => {
    const result = threeSum([1, 2, 3, 4, 5]);
    expect(result).toEqual([]);
  });

  it("threeSum([])", () => {
    const result = threeSum([]);
    expect(result).toEqual([]);
  });

  it("threeSum([1])", () => {
    const result = threeSum([1]);
    expect(result).toEqual([]);
  });

  it("threeSum([1, 1])", () => {
    const result = threeSum([1, 1]);
    expect(result).toEqual([]);
  });

  it("threeSum([1, 1, 3, 4, 5])", () => {
    const result = threeSum([1, 1, 3, 4, 5]);
    expect(result).toEqual([]);
  });

  it("threeSum([-1, 0, 1])", () => {
    const result = threeSum([-1, 0, 1]);
    expect(result).toEqual([[-1, 0, 1]]);
  });
});
