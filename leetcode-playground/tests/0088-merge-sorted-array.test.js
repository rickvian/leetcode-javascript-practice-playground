import { merge } from '../0088-merge-sorted-array.js';

describe('0088-merge-sorted-array', () => {
  it("merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)", () => {
    const _nums0 = [1, 2, 3, 0, 0, 0];
    merge(_nums0, 3, [2, 5, 6], 3);
    expect(_nums0).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("merge([1], 1, [], 0)", () => {
    const _nums1 = [1];
    merge(_nums1, 1, [], 0);
    expect(_nums1).toEqual([1]);
  });

  it("merge([0], 0, [1], 1)", () => {
    const _nums2 = [0];
    merge(_nums2, 0, [1], 1);
    expect(_nums2).toEqual([1]);
  });

  it("merge([2, 0], 1, [1], 1)", () => {
    const _nums3 = [2, 0];
    merge(_nums3, 1, [1], 1);
    expect(_nums3).toEqual([1, 2]);
  });

  it("merge([1, 2, 0, 0, 0], 2, [3, 4, 5], 3)", () => {
    const _nums4 = [1, 2, 0, 0, 0];
    merge(_nums4, 2, [3, 4, 5], 3);
    expect(_nums4).toEqual([1, 2, 3, 4, 5]);
  });
});
