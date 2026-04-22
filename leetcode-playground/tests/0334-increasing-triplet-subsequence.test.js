import { increasingTriplet } from '../0334-increasing-triplet-subsequence.js';

describe('0334-increasing-triplet-subsequence', () => {
  it("increasingTriplet([1, 2, 3, 4, 5])", () => {
    const result = increasingTriplet([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("increasingTriplet([])", () => {
    const result = increasingTriplet([]);
    expect(result).toEqual(false);
  });

  it("increasingTriplet([1])", () => {
    const result = increasingTriplet([1]);
    expect(result).toEqual(false);
  });

  it("increasingTriplet([1, 1])", () => {
    const result = increasingTriplet([1, 1]);
    expect(result).toEqual(false);
  });

  it("increasingTriplet([3, 1, 4, 1, 5])", () => {
    const result = increasingTriplet([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("increasingTriplet([-1, 0, 1])", () => {
    const result = increasingTriplet([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
