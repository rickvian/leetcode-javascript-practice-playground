import { searchInsert } from "../0035-search-insert-position";

describe("0035-search-insert-position", () => {
  // LeetCode official examples
  it("should return index 2 when target 5 found in [1,3,5,6]", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  it("should return index 1 when target 2 inserted between 1 and 3 in [1,3,5,6]", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  it("should return index 4 when target 7 inserted after all elements in [1,3,5,6]", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  // Target found exactly
  it("should return 0 when target found at first position", () => {
    expect(searchInsert([1, 3, 5, 6], 1)).toBe(0);
  });

  it("should return 3 when target found at last position", () => {
    expect(searchInsert([1, 3, 5, 6], 6)).toBe(3);
  });

  it("should return 1 when target found in middle of odd-length array", () => {
    expect(searchInsert([1, 3, 5], 3)).toBe(1);
  });

  // Insert at index 0 — target smaller than all elements
  it("should return 0 when target is smaller than all elements", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });

  it("should return 0 when target smaller than first element in larger array", () => {
    expect(searchInsert([2, 4, 6, 8, 10], 1)).toBe(0);
  });

  // Insert at last index — target larger than all elements
  it("should return length when target is larger than all elements", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  it("should return 5 when target larger than all in 5-element array", () => {
    expect(searchInsert([2, 4, 6, 8, 10], 11)).toBe(5);
  });

  // Insert in the middle
  it("should return 2 when target inserted between index 1 and 2", () => {
    expect(searchInsert([1, 3, 5, 7], 4)).toBe(2);
  });

  it("should return 3 when target inserted at index 3 in [1,2,4,5,6]", () => {
    expect(searchInsert([1, 2, 4, 5, 6], 3)).toBe(2);
  });

  // Single-element array
  it("should return 0 when single element matches target", () => {
    expect(searchInsert([5], 5)).toBe(0);
  });

  it("should return 0 when target smaller than single element", () => {
    expect(searchInsert([5], 3)).toBe(0);
  });

  it("should return 1 when target larger than single element", () => {
    expect(searchInsert([5], 7)).toBe(1);
  });

  // Additional constraint cases
  it("should handle two-element array target between elements", () => {
    expect(searchInsert([1, 5], 3)).toBe(1);
  });

  it("should handle all-same values with exact match", () => {
    expect(searchInsert([5, 5, 5], 5)).toBe(0);
  });
});
