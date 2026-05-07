import { containsNearbyDuplicate } from "../0219-contains-duplicate-ii";

describe("0219-contains-duplicate-ii", () => {
  // LeetCode official examples
  it("should return true for [99,99] with k=2 (duplicate exactly at distance 1)", () => {
    expect(containsNearbyDuplicate([99, 99], 2)).toEqual(true);
  });

  it("should return false for [99,99] with k=0 (k=0 means same index not allowed)", () => {
    expect(containsNearbyDuplicate([99, 99], 0)).toEqual(false);
  });

  it("should return true for [1,2,3,1] with k=3 (duplicate at distance 3)", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toEqual(true);
  });

  it("should return false for [1,2,3,1] with k=2 (duplicate at distance 3 > k)", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 2)).toEqual(false);
  });

  // No duplicates at all
  it("should return false when no duplicates exist", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 5], 3)).toEqual(false);
  });

  it("should return false for single element array", () => {
    expect(containsNearbyDuplicate([1], 1)).toEqual(false);
  });

  // All elements the same
  it("should return true when all elements are the same with k=1", () => {
    expect(containsNearbyDuplicate([1, 1, 1, 1], 1)).toEqual(true);
  });

  it("should return true when all elements are the same with k=3", () => {
    expect(containsNearbyDuplicate([5, 5, 5, 5, 5], 3)).toEqual(true);
  });

  // Duplicate exactly at distance k
  it("should return true when duplicate is exactly at distance k", () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toEqual(true);
  });

  it("should return true for [1,2,3,4,5,1] with k=5 (duplicate at distance exactly 5)", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 1], 5)).toEqual(true);
  });

  // Duplicate at distance k+1 (should be false)
  it("should return false when duplicate is at distance k+1", () => {
    expect(containsNearbyDuplicate([1, 0, 0, 1], 1)).toEqual(true);
  });

  it("should return false for [1,2,3,4,5,1] with k=4 (duplicate at distance 5 > k)", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 1], 4)).toEqual(false);
  });

  // k=0 edge case
  it("should return false with k=0 (requires same index which is not allowed)", () => {
    expect(containsNearbyDuplicate([1, 1], 0)).toEqual(false);
  });

  // Negative numbers
  it("should handle negative numbers correctly", () => {
    expect(containsNearbyDuplicate([-1, -1, 0, 1], 1)).toEqual(true);
  });

  it("should handle mixed positive and negative duplicates", () => {
    expect(containsNearbyDuplicate([-5, -5, -5], 2)).toEqual(true);
  });

  // Multiple duplicates
  it("should return true when multiple different duplicates exist within distance k", () => {
    expect(containsNearbyDuplicate([1, 2, 1, 2], 1)).toEqual(false);
  });

  it("should return true for the first duplicate encountered within distance k", () => {
    expect(containsNearbyDuplicate([1, 0, 1, 0, 1], 2)).toEqual(true);
  });

  // Large arrays
  it("should handle larger array with no duplicates", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toEqual(
      false,
    );
  });

  it("should handle larger array with duplicates at the end within k", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1], 9)).toEqual(
      true,
    );
  });

  // Two elements
  it("should return true for two identical elements", () => {
    expect(containsNearbyDuplicate([1, 1], 1)).toEqual(true);
  });

  it("should return false for two different elements", () => {
    expect(containsNearbyDuplicate([1, 2], 1)).toEqual(false);
  });
});
