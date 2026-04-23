import { maxScoreSightseeingPair } from '../1014-best-sightseeing-pair.js';

describe('1014-best-sightseeing-pair', () => {
  it("maxScoreSightseeingPair([1, 2, 3, 4, 5])", () => {
    const result = maxScoreSightseeingPair([1, 2, 3, 4, 5]);
    expect(result).toEqual(8);
  });

  it("maxScoreSightseeingPair([])", () => {
    const result = maxScoreSightseeingPair([]);
    expect(result).toEqual(0);
  });

  it("maxScoreSightseeingPair([1])", () => {
    const result = maxScoreSightseeingPair([1]);
    expect(result).toEqual(0);
  });

  it("maxScoreSightseeingPair([1, 1])", () => {
    const result = maxScoreSightseeingPair([1, 1]);
    expect(result).toEqual(1);
  });

  it("maxScoreSightseeingPair([3, 1, 4, 1, 5])", () => {
    const result = maxScoreSightseeingPair([3, 1, 4, 1, 5]);
    expect(result).toEqual(7);
  });

  it("maxScoreSightseeingPair([-1, 0, 1])", () => {
    const result = maxScoreSightseeingPair([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
