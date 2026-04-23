import { numOfSubarrays } from '../1343-number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold.js';

describe('1343-number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold', () => {
  it("numOfSubarrays([1, 2, 3])", () => {
    const result = numOfSubarrays([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("numOfSubarrays([])", () => {
    const result = numOfSubarrays([]);
    expect(result).toEqual(0);
  });

  it("numOfSubarrays([0])", () => {
    const result = numOfSubarrays([0]);
    expect(result).toEqual(0);
  });

  it("numOfSubarrays([-1, 0, 1])", () => {
    const result = numOfSubarrays([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
