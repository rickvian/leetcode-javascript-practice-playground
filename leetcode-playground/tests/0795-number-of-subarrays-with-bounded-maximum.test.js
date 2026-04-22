import { numSubarrayBoundedMax } from '../0795-number-of-subarrays-with-bounded-maximum.js';

describe('0795-number-of-subarrays-with-bounded-maximum', () => {
  it("numSubarrayBoundedMax([1, 2, 3])", () => {
    const result = numSubarrayBoundedMax([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("numSubarrayBoundedMax([])", () => {
    const result = numSubarrayBoundedMax([]);
    expect(result).toEqual(0);
  });

  it("numSubarrayBoundedMax([0])", () => {
    const result = numSubarrayBoundedMax([0]);
    expect(result).toEqual(0);
  });

  it("numSubarrayBoundedMax([-1, 0, 1])", () => {
    const result = numSubarrayBoundedMax([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
