import { atMostNGivenDigitSet } from '../0902-numbers-at-most-n-given-digit-set.js';

describe('0902-numbers-at-most-n-given-digit-set', () => {
  it("atMostNGivenDigitSet([\"1\", \"3\", \"5\", \"7\"], 100)", () => {
    const result = atMostNGivenDigitSet(["1", "3", "5", "7"], 100);
    expect(result).toEqual(20);
  });

  it("atMostNGivenDigitSet([\"1\", \"4\", \"9\"], 1000000000)", () => {
    const result = atMostNGivenDigitSet(["1", "4", "9"], 1000000000);
    expect(result).toEqual(29523);
  });

  it("atMostNGivenDigitSet([\"7\"], 8)", () => {
    const result = atMostNGivenDigitSet(["7"], 8);
    expect(result).toEqual(1);
  });

  it("atMostNGivenDigitSet([\"1\"], 1)", () => {
    const result = atMostNGivenDigitSet(["1"], 1);
    expect(result).toEqual(1);
  });

  it("atMostNGivenDigitSet([\"1\", \"2\", \"3\"], 27)", () => {
    const result = atMostNGivenDigitSet(["1", "2", "3"], 27);
    expect(result).toEqual(9);
  });

  it("atMostNGivenDigitSet([\"9\"], 9)", () => {
    const result = atMostNGivenDigitSet(["9"], 9);
    expect(result).toEqual(1);
  });
});
