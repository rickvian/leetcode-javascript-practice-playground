import { kthSmallestPrimeFraction } from '../0786-k-th-smallest-prime-fraction.js';

describe('0786-k-th-smallest-prime-fraction', () => {
  it("kthSmallestPrimeFraction([2, 7, 11, 15], 9)", () => {
    const result = kthSmallestPrimeFraction([2, 7, 11, 15], 9);
    expect(result).toEqual([]);
  });

  it("kthSmallestPrimeFraction([3, 2, 4], 6)", () => {
    const result = kthSmallestPrimeFraction([3, 2, 4], 6);
    expect(result).toEqual([]);
  });

  it("kthSmallestPrimeFraction([3, 3], 6)", () => {
    const result = kthSmallestPrimeFraction([3, 3], 6);
    expect(result).toEqual([]);
  });

  it("kthSmallestPrimeFraction([-1, -2, -3, -4, -5], -8)", () => {
    const result = kthSmallestPrimeFraction([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual([]);
  });

  it("kthSmallestPrimeFraction([1, 2], 3)", () => {
    const result = kthSmallestPrimeFraction([1, 2], 3);
    expect(result).toEqual([]);
  });

  it("kthSmallestPrimeFraction([0, 4, 3, 0], 0)", () => {
    const result = kthSmallestPrimeFraction([0, 4, 3, 0], 0);
    expect(result).toEqual([]);
  });
});
