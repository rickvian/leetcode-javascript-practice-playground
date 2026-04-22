import { sumSubarrayMins } from '../0907-sum-of-subarray-minimums.js';

describe('0907-sum-of-subarray-minimums', () => {
  it("sumSubarrayMins([1, 2, 3, 4, 5])", () => {
    const result = sumSubarrayMins([1, 2, 3, 4, 5]);
    expect(result).toEqual(35);
  });

  it("sumSubarrayMins([])", () => {
    const result = sumSubarrayMins([]);
    expect(result).toEqual(0);
  });

  it("sumSubarrayMins([1])", () => {
    const result = sumSubarrayMins([1]);
    expect(result).toEqual(1);
  });

  it("sumSubarrayMins([1, 1])", () => {
    const result = sumSubarrayMins([1, 1]);
    expect(result).toEqual(3);
  });

  it("sumSubarrayMins([3, 1, 4, 1, 5])", () => {
    const result = sumSubarrayMins([3, 1, 4, 1, 5]);
    expect(result).toEqual(24);
  });

  it("sumSubarrayMins([-1, 0, 1])", () => {
    const result = sumSubarrayMins([-1, 0, 1]);
    expect(result).toEqual(-2);
  });
});
