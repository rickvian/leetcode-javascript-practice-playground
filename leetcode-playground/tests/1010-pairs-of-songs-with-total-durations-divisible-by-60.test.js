import { numPairsDivisibleBy60 } from '../1010-pairs-of-songs-with-total-durations-divisible-by-60.js';

describe('1010-pairs-of-songs-with-total-durations-divisible-by-60', () => {
  it("numPairsDivisibleBy60([1, 2, 3, 4, 5])", () => {
    const result = numPairsDivisibleBy60([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("numPairsDivisibleBy60([])", () => {
    const result = numPairsDivisibleBy60([]);
    expect(result).toEqual(0);
  });

  it("numPairsDivisibleBy60([1])", () => {
    const result = numPairsDivisibleBy60([1]);
    expect(result).toEqual(0);
  });

  it("numPairsDivisibleBy60([1, 1])", () => {
    const result = numPairsDivisibleBy60([1, 1]);
    expect(result).toEqual(0);
  });

  it("numPairsDivisibleBy60([3, 1, 4, 1, 5])", () => {
    const result = numPairsDivisibleBy60([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("numPairsDivisibleBy60([-1, 0, 1])", () => {
    const result = numPairsDivisibleBy60([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
