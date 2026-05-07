import { merge } from "../0088-merge-sorted-array";

describe("0088-merge-sorted-array", () => {
  it("should merge example 1: [1,2,3] and [2,5,6]", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("should merge example 2: [1] and []", () => {
    const nums1 = [1];
    merge(nums1, 1, [], 0);
    expect(nums1).toEqual([1]);
  });

  it("should merge example 3: [] and [1]", () => {
    const nums1 = [0];
    merge(nums1, 0, [1], 1);
    expect(nums1).toEqual([1]);
  });

  it("should handle m=0 — nums1 is all zeros, result equals nums2", () => {
    const nums1 = [0, 0, 0];
    merge(nums1, 0, [2, 5, 6], 3);
    expect(nums1).toEqual([2, 5, 6]);
  });

  it("should handle n=0 — nums1 remains unchanged", () => {
    const nums1 = [1, 2, 3];
    merge(nums1, 3, [], 0);
    expect(nums1).toEqual([1, 2, 3]);
  });

  it("should handle all nums2 elements smaller than nums1", () => {
    const nums1 = [5, 6, 7, 0, 0, 0];
    merge(nums1, 3, [1, 2, 3], 3);
    expect(nums1).toEqual([1, 2, 3, 5, 6, 7]);
  });

  it("should handle all nums2 elements larger than nums1", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [4, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle interleaved values from both arrays", () => {
    const nums1 = [1, 3, 5, 0, 0, 0];
    merge(nums1, 3, [2, 4, 6], 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle single-element merge into single-element array", () => {
    const nums1 = [2, 0];
    merge(nums1, 1, [1], 1);
    expect(nums1).toEqual([1, 2]);
  });

  it("should handle equal elements across both arrays", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [1, 2, 3], 3);
    expect(nums1).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it("should handle negative numbers", () => {
    const nums1 = [-3, -1, 0, 0, 0];
    merge(nums1, 3, [-2, 2], 2);
    expect(nums1).toEqual([-3, -2, -1, 0, 2]);
  });

  it("should handle m=1 and n=1", () => {
    const nums1 = [1, 0];
    merge(nums1, 1, [2], 1);
    expect(nums1).toEqual([1, 2]);
  });

  it("should handle nums1 single element smaller than all of nums2", () => {
    const nums1 = [1, 0, 0, 0];
    merge(nums1, 1, [2, 3, 4], 3);
    expect(nums1).toEqual([1, 2, 3, 4]);
  });

  it("should handle nums1 single element larger than all of nums2", () => {
    const nums1 = [4, 0, 0, 0];
    merge(nums1, 1, [1, 2, 3], 3);
    expect(nums1).toEqual([1, 2, 3, 4]);
  });

  it("should handle duplicate values across both arrays", () => {
    const nums1 = [2, 2, 2, 0, 0, 0];
    merge(nums1, 3, [2, 2, 2], 3);
    expect(nums1).toEqual([2, 2, 2, 2, 2, 2]);
  });
});
