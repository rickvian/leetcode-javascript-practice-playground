import { smallestDivisor } from '../1283-find-the-smallest-divisor-given-a-threshold.js';

describe('1283-find-the-smallest-divisor-given-a-threshold', () => {
  it("smallestDivisor([2, 7, 11, 15], 9)", () => {
    const result = smallestDivisor([2, 7, 11, 15], 9);
    expect(result).toEqual(5);
  });

  it("smallestDivisor([3, 2, 4], 6)", () => {
    const result = smallestDivisor([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("smallestDivisor([3, 3], 6)", () => {
    const result = smallestDivisor([3, 3], 6);
    expect(result).toEqual(1);
  });

  it("smallestDivisor([-1, -2, -3, -4, -5], -8)", () => {
    const result = smallestDivisor([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(1);
  });

  it("smallestDivisor([1, 2], 3)", () => {
    const result = smallestDivisor([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("smallestDivisor([0, 4, 3, 0], 0)", () => {
    const result = smallestDivisor([0, 4, 3, 0], 0);
    expect(result).toEqual(4);
  });
});
