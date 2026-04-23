import { longestSubsequence } from '../1218-longest-arithmetic-subsequence-of-given-difference.js';

describe('1218-longest-arithmetic-subsequence-of-given-difference', () => {
  it("longestSubsequence([2, 7, 11, 15], 9)", () => {
    const result = longestSubsequence([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("longestSubsequence([3, 2, 4], 6)", () => {
    const result = longestSubsequence([3, 2, 4], 6);
    expect(result).toEqual(1);
  });

  it("longestSubsequence([3, 3], 6)", () => {
    const result = longestSubsequence([3, 3], 6);
    expect(result).toEqual(1);
  });

  it("longestSubsequence([-1, -2, -3, -4, -5], -8)", () => {
    const result = longestSubsequence([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(1);
  });

  it("longestSubsequence([1, 2], 3)", () => {
    const result = longestSubsequence([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("longestSubsequence([0, 4, 3, 0], 0)", () => {
    const result = longestSubsequence([0, 4, 3, 0], 0);
    expect(result).toEqual(2);
  });
});
