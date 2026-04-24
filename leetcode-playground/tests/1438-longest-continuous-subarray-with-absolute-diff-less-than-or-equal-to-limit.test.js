import { longestSubarray } from '../1438-longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit.js';

describe('1438-longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit', () => {
  it("longestSubarray([2, 7, 11, 15], 9)", () => {
    const result = longestSubarray([2, 7, 11, 15], 9);
    expect(result).toEqual(3);
  });

  it("longestSubarray([3, 2, 4], 6)", () => {
    const result = longestSubarray([3, 2, 4], 6);
    expect(result).toEqual(3);
  });

  it("longestSubarray([3, 3], 6)", () => {
    const result = longestSubarray([3, 3], 6);
    expect(result).toEqual(2);
  });

  it("longestSubarray([-1, -2, -3, -4, -5], -8)", () => {
    const result = longestSubarray([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("longestSubarray([1, 2], 3)", () => {
    const result = longestSubarray([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("longestSubarray([0, 4, 3, 0], 0)", () => {
    const result = longestSubarray([0, 4, 3, 0], 0);
    expect(result).toEqual(1);
  });
});
