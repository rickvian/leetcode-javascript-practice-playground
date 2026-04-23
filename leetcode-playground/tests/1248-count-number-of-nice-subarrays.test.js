import { numberOfSubarrays } from '../1248-count-number-of-nice-subarrays.js';

describe('1248-count-number-of-nice-subarrays', () => {
  it("numberOfSubarrays([2, 7, 11, 15], 9)", () => {
    const result = numberOfSubarrays([2, 7, 11, 15], 9);
    expect(result).toEqual(0);
  });

  it("numberOfSubarrays([3, 2, 4], 6)", () => {
    const result = numberOfSubarrays([3, 2, 4], 6);
    expect(result).toEqual(0);
  });

  it("numberOfSubarrays([3, 3], 6)", () => {
    const result = numberOfSubarrays([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("numberOfSubarrays([-1, -2, -3, -4, -5], -8)", () => {
    const result = numberOfSubarrays([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("numberOfSubarrays([1, 2], 3)", () => {
    const result = numberOfSubarrays([1, 2], 3);
    expect(result).toEqual(0);
  });

  it("numberOfSubarrays([0, 4, 3, 0], 0)", () => {
    const result = numberOfSubarrays([0, 4, 3, 0], 0);
    expect(result).toEqual(4);
  });
});
