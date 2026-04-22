import { smallestDistancePair } from '../0719-find-k-th-smallest-pair-distance.js';

describe('0719-find-k-th-smallest-pair-distance', () => {
  it("smallestDistancePair([2, 7, 11, 15], 9)", () => {
    const result = smallestDistancePair([2, 7, 11, 15], 9);
    expect(result).toEqual(13);
  });

  it("smallestDistancePair([3, 2, 4], 6)", () => {
    const result = smallestDistancePair([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("smallestDistancePair([3, 3], 6)", () => {
    const result = smallestDistancePair([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("smallestDistancePair([-1, -2, -3, -4, -5], -8)", () => {
    const result = smallestDistancePair([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("smallestDistancePair([1, 2], 3)", () => {
    const result = smallestDistancePair([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("smallestDistancePair([0, 4, 3, 0], 0)", () => {
    const result = smallestDistancePair([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
