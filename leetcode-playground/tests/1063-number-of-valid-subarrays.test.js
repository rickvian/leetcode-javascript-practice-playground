import { validSubarrays } from '../1063-number-of-valid-subarrays.js';

describe('1063-number-of-valid-subarrays', () => {
  it("validSubarrays([1, 2, 3, 4, 5])", () => {
    const result = validSubarrays([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });

  it("validSubarrays([])", () => {
    const result = validSubarrays([]);
    expect(result).toEqual(0);
  });

  it("validSubarrays([1])", () => {
    const result = validSubarrays([1]);
    expect(result).toEqual(1);
  });

  it("validSubarrays([1, 1])", () => {
    const result = validSubarrays([1, 1]);
    expect(result).toEqual(3);
  });

  it("validSubarrays([3, 1, 4, 1, 5])", () => {
    const result = validSubarrays([3, 1, 4, 1, 5]);
    expect(result).toEqual(9);
  });

  it("validSubarrays([-1, 0, 1])", () => {
    const result = validSubarrays([-1, 0, 1]);
    expect(result).toEqual(6);
  });
});
