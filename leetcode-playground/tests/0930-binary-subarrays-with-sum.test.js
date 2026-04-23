import { numSubarraysWithSum } from '../0930-binary-subarrays-with-sum.js';

describe('0930-binary-subarrays-with-sum', () => {
  it("numSubarraysWithSum([2, 7, 11, 15], 9)", () => {
    const result = numSubarraysWithSum([2, 7, 11, 15], 9);
    expect(result).toEqual(1);
  });

  it("numSubarraysWithSum([3, 2, 4], 6)", () => {
    const result = numSubarraysWithSum([3, 2, 4], 6);
    expect(result).toEqual(1);
  });

  it("numSubarraysWithSum([3, 3], 6)", () => {
    const result = numSubarraysWithSum([3, 3], 6);
    expect(result).toEqual(1);
  });

  it("numSubarraysWithSum([-1, -2, -3, -4, -5], -8)", () => {
    const result = numSubarraysWithSum([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("numSubarraysWithSum([1, 2], 3)", () => {
    const result = numSubarraysWithSum([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("numSubarraysWithSum([0, 4, 3, 0], 0)", () => {
    const result = numSubarraysWithSum([0, 4, 3, 0], 0);
    expect(result).toEqual(2);
  });
});
