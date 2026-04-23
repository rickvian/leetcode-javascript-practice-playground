import { maxSumTwoNoOverlap } from '../1031-maximum-sum-of-two-non-overlapping-subarrays.js';

describe('1031-maximum-sum-of-two-non-overlapping-subarrays', () => {
  it("maxSumTwoNoOverlap([1, 2, 3])", () => {
    const result = maxSumTwoNoOverlap([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("maxSumTwoNoOverlap([])", () => {
    const result = maxSumTwoNoOverlap([]);
    expect(result).toEqual(0);
  });

  it("maxSumTwoNoOverlap([0])", () => {
    const result = maxSumTwoNoOverlap([0]);
    expect(result).toEqual(0);
  });

  it("maxSumTwoNoOverlap([-1, 0, 1])", () => {
    const result = maxSumTwoNoOverlap([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
