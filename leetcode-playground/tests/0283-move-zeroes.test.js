import { moveZeroes } from '../0283-move-zeroes.js';

describe('0283-move-zeroes', () => {
  it("moveZeroes([0, 1, 0, 3, 12])", () => {
    const _nums0 = [0, 1, 0, 3, 12];
    moveZeroes(_nums0);
    expect(_nums0).toEqual([1, 3, 12, 0, 0]);
  });

  it("moveZeroes([0])", () => {
    const _nums1 = [0];
    moveZeroes(_nums1);
    expect(_nums1).toEqual([0]);
  });

  it("moveZeroes([1])", () => {
    const _nums2 = [1];
    moveZeroes(_nums2);
    expect(_nums2).toEqual([1]);
  });

  it("moveZeroes([0, 0, 1])", () => {
    const _nums3 = [0, 0, 1];
    moveZeroes(_nums3);
    expect(_nums3).toEqual([1, 0, 0]);
  });
});
