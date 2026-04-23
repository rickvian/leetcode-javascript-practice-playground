import { duplicateZeros } from '../1089-duplicate-zeros.js';

describe('1089-duplicate-zeros', () => {
  it("duplicateZeros([1, 2, 3, 4, 5])", () => {
    const _nums0 = [1, 2, 3, 4, 5];
    duplicateZeros(_nums0);
    expect(_nums0).toEqual([1, 2, 3, 4, 5]);
  });

  it("duplicateZeros([])", () => {
    const _nums1 = [];
    duplicateZeros(_nums1);
    expect(_nums1).toEqual([]);
  });

  it("duplicateZeros([1])", () => {
    const _nums2 = [1];
    duplicateZeros(_nums2);
    expect(_nums2).toEqual([1]);
  });
});
