import { maxSubarraySumCircular } from '../0918-maximum-sum-circular-subarray.js';

describe('0918-maximum-sum-circular-subarray', () => {
  it("maxSubarraySumCircular([1, 2, 3, 4, 5])", () => {
    const result = maxSubarraySumCircular([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });

  it("maxSubarraySumCircular([1])", () => {
    const result = maxSubarraySumCircular([1]);
    expect(result).toEqual(1);
  });

  it("maxSubarraySumCircular([1, 1])", () => {
    const result = maxSubarraySumCircular([1, 1]);
    expect(result).toEqual(2);
  });

  it("maxSubarraySumCircular([3, 1, 4, 1, 5])", () => {
    const result = maxSubarraySumCircular([3, 1, 4, 1, 5]);
    expect(result).toEqual(14);
  });

  it("maxSubarraySumCircular([-1, 0, 1])", () => {
    const result = maxSubarraySumCircular([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
