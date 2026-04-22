import { wiggleSort } from '../0280-wiggle-sort.js';

describe('0280-wiggle-sort', () => {
  it("wiggleSort([3, 5, 2, 1, 6, 4])", () => {
    const _nums0 = [3, 5, 2, 1, 6, 4];
    wiggleSort(_nums0);
    expect(_nums0).toEqual([3, 5, 1, 6, 2, 4]);
  });

  it("wiggleSort([1, 1, 2, 2, 3, 3])", () => {
    const _nums1 = [1, 1, 2, 2, 3, 3];
    wiggleSort(_nums1);
    expect(_nums1).toEqual([1, 2, 1, 3, 2, 3]);
  });

  it("wiggleSort([1])", () => {
    const _nums2 = [1];
    wiggleSort(_nums2);
    expect(_nums2).toEqual([1]);
  });

  it("wiggleSort([2, 1])", () => {
    const _nums3 = [2, 1];
    wiggleSort(_nums3);
    expect(_nums3).toEqual([1, 2]);
  });

  it("wiggleSort([1, 2, 3, 4, 5])", () => {
    const _nums4 = [1, 2, 3, 4, 5];
    wiggleSort(_nums4);
    expect(_nums4).toEqual([1, 3, 2, 5, 4]);
  });
});
