import { rotate } from '../0189-rotate-array.js';

describe('0189-rotate-array', () => {
  it("rotate([1, 2, 3, 4, 5, 6, 7], 3)", () => {
    const _nums0 = [1, 2, 3, 4, 5, 6, 7];
    rotate(_nums0, 3);
    expect(_nums0).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("rotate([-1, -100, 3, 99], 2)", () => {
    const _nums1 = [-1, -100, 3, 99];
    rotate(_nums1, 2);
    expect(_nums1).toEqual([3, 99, -1, -100]);
  });

  it("rotate([1], 0)", () => {
    const _nums2 = [1];
    rotate(_nums2, 0);
    expect(_nums2).toEqual([1]);
  });

  it("rotate([1, 2], 3)", () => {
    const _nums3 = [1, 2];
    rotate(_nums3, 3);
    expect(_nums3).toEqual([2, 1]);
  });
});
