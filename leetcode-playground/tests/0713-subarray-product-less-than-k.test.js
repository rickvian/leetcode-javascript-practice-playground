import { numSubarrayProductLessThanK } from '../0713-subarray-product-less-than-k.js';

describe('0713-subarray-product-less-than-k', () => {
  it("numSubarrayProductLessThanK([2, 7, 11, 15], 9)", () => {
    const result = numSubarrayProductLessThanK([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("numSubarrayProductLessThanK([3, 2, 4], 6)", () => {
    const result = numSubarrayProductLessThanK([3, 2, 4], 6);
    expect(result).toEqual(3);
  });

  it("numSubarrayProductLessThanK([3, 3], 6)", () => {
    const result = numSubarrayProductLessThanK([3, 3], 6);
    expect(result).toEqual(2);
  });

  it("numSubarrayProductLessThanK([-1, -2, -3, -4, -5], -8)", () => {
    const result = numSubarrayProductLessThanK([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("numSubarrayProductLessThanK([1, 2], 3)", () => {
    const result = numSubarrayProductLessThanK([1, 2], 3);
    expect(result).toEqual(3);
  });

  it("numSubarrayProductLessThanK([0, 4, 3, 0], 0)", () => {
    const result = numSubarrayProductLessThanK([0, 4, 3, 0], 0);
    expect(result).toEqual(6);
  });
});
