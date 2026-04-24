import { minSubsequence } from '../1403-minimum-subsequence-in-non-increasing-order.js';

describe('1403-minimum-subsequence-in-non-increasing-order', () => {
  it("minSubsequence([1, 2, 3, 4, 5])", () => {
    const result = minSubsequence([1, 2, 3, 4, 5]);
    expect(result).toEqual([5, 4]);
  });

  it("minSubsequence([])", () => {
    const result = minSubsequence([]);
    expect(result).toEqual([]);
  });

  it("minSubsequence([1])", () => {
    const result = minSubsequence([1]);
    expect(result).toEqual([1]);
  });

  it("minSubsequence([1, 1])", () => {
    const result = minSubsequence([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("minSubsequence([3, 1, 4, 1, 5])", () => {
    const result = minSubsequence([3, 1, 4, 1, 5]);
    expect(result).toEqual([5, 4]);
  });

  it("minSubsequence([-1, 0, 1])", () => {
    const result = minSubsequence([-1, 0, 1]);
    expect(result).toEqual([1]);
  });
});
