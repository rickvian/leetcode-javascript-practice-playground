import { nextPermutation } from '../0031-next-permutation.js';

describe('0031-next-permutation', () => {
  it("nextPermutation([1, 2, 3])", () => {
    const _nums0 = [1, 2, 3];
    nextPermutation(_nums0);
    expect(_nums0).toEqual([1, 3, 2]);
  });

  it("nextPermutation([3, 2, 1])", () => {
    const _nums1 = [3, 2, 1];
    nextPermutation(_nums1);
    expect(_nums1).toEqual([1, 2, 3]);
  });

  it("nextPermutation([1, 1, 5])", () => {
    const _nums2 = [1, 1, 5];
    nextPermutation(_nums2);
    expect(_nums2).toEqual([1, 5, 1]);
  });

  it("nextPermutation([1])", () => {
    const _nums3 = [1];
    nextPermutation(_nums3);
    expect(_nums3).toEqual([1]);
  });

  it("nextPermutation([1, 2])", () => {
    const _nums4 = [1, 2];
    nextPermutation(_nums4);
    expect(_nums4).toEqual([2, 1]);
  });

  it("nextPermutation([2, 3, 1])", () => {
    const _nums5 = [2, 3, 1];
    nextPermutation(_nums5);
    expect(_nums5).toEqual([3, 1, 2]);
  });
});
