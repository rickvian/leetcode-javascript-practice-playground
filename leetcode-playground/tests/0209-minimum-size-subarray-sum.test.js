import { minSubArrayLen } from '../0209-minimum-size-subarray-sum.js';

describe('0209-minimum-size-subarray-sum', () => {
  it("minSubArrayLen(2, [3, 2, 6, 5, 0, 3])", () => {
    const result = minSubArrayLen(2, [3, 2, 6, 5, 0, 3]);
    expect(result).toEqual(1);
  });

  it("minSubArrayLen(2, [2, 1])", () => {
    const result = minSubArrayLen(2, [2, 1]);
    expect(result).toEqual(1);
  });

  it("minSubArrayLen(0, [3, 2, 6])", () => {
    const result = minSubArrayLen(0, [3, 2, 6]);
    expect(result).toEqual(0);
  });

  it("minSubArrayLen(1, [1, 2, 3])", () => {
    const result = minSubArrayLen(1, [1, 2, 3]);
    expect(result).toEqual(1);
  });

  it("minSubArrayLen(3, [1, 2, 3, 4, 5])", () => {
    const result = minSubArrayLen(3, [1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("minSubArrayLen(1, [7, 6, 4, 3, 1])", () => {
    const result = minSubArrayLen(1, [7, 6, 4, 3, 1]);
    expect(result).toEqual(1);
  });
});
