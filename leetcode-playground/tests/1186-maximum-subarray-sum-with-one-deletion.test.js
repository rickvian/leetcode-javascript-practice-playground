import { maximumSum } from '../1186-maximum-subarray-sum-with-one-deletion.js';

describe('1186-maximum-subarray-sum-with-one-deletion', () => {
  it("maximumSum([1, 2, 3, 4, 5])", () => {
    const result = maximumSum([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });

  it("maximumSum([1])", () => {
    const result = maximumSum([1]);
    expect(result).toEqual(1);
  });

  it("maximumSum([1, 1])", () => {
    const result = maximumSum([1, 1]);
    expect(result).toEqual(2);
  });

  it("maximumSum([3, 1, 4, 1, 5])", () => {
    const result = maximumSum([3, 1, 4, 1, 5]);
    expect(result).toEqual(14);
  });

  it("maximumSum([-1, 0, 1])", () => {
    const result = maximumSum([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
