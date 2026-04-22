import { maxSubArray } from '../0053-maximum-subarray.js';

describe('0053-maximum-subarray', () => {
  it("maxSubArray([1, 2, 3, 4, 5])", () => {
    const result = maxSubArray([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });

  it("maxSubArray([1])", () => {
    const result = maxSubArray([1]);
    expect(result).toEqual(1);
  });

  it("maxSubArray([1, 1])", () => {
    const result = maxSubArray([1, 1]);
    expect(result).toEqual(2);
  });

  it("maxSubArray([3, 1, 4, 1, 5])", () => {
    const result = maxSubArray([3, 1, 4, 1, 5]);
    expect(result).toEqual(14);
  });

  it("maxSubArray([-1, 0, 1])", () => {
    const result = maxSubArray([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
