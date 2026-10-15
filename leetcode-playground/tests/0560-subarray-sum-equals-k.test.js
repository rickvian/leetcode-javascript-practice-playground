import { subarraySum } from "../0560-subarray-sum-equals-k.js";

describe("0560-subarray-sum-equals-k", () => {
  it("should handle LeetCode example 1", () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2);
  });

  it("should handle LeetCode example 2", () => {
    expect(subarraySum([1, 2, 3], 3)).toBe(2);
  });

  it("should count subarrays containing negative numbers", () => {
    expect(subarraySum([1, -1, 0], 0)).toBe(3);
  });

  it("should count overlapping subarrays", () => {
    expect(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7)).toBe(4);
  });

  it("should count every zero-sum subarray", () => {
    expect(subarraySum([0, 0, 0, 0], 0)).toBe(10);
  });

  it("should handle a single-element array", () => {
    expect(subarraySum([5], 5)).toBe(1);
  });

  it("should return zero when no subarray matches", () => {
    expect(subarraySum([1, 2, 3], 10)).toBe(0);
  });

  it("should handle a negative target", () => {
    expect(subarraySum([-1, -1, 1], -2)).toBe(1);
  });

  it("should handle values at the constraint boundary", () => {
    expect(subarraySum([1000, -1000, 1000], 1000)).toBe(3);
  });
});
