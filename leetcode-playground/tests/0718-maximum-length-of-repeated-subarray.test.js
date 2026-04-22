import { findLength } from '../0718-maximum-length-of-repeated-subarray.js';

describe('0718-maximum-length-of-repeated-subarray', () => {
  it("findLength([1, 2, 3], [4, 5, 6])", () => {
    const result = findLength([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(0);
  });

  it("findLength([1], [1])", () => {
    const result = findLength([1], [1]);
    expect(result).toEqual(1);
  });

  it("findLength([1, 3], [2])", () => {
    const result = findLength([1, 3], [2]);
    expect(result).toEqual(0);
  });

  it("findLength([1, 2], [3, 4])", () => {
    const result = findLength([1, 2], [3, 4]);
    expect(result).toEqual(0);
  });
});
