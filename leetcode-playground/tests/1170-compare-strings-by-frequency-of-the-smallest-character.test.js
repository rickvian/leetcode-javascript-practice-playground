import { numSmallerByFrequency } from '../1170-compare-strings-by-frequency-of-the-smallest-character.js';

describe('1170-compare-strings-by-frequency-of-the-smallest-character', () => {
  it("numSmallerByFrequency([\"cbd\"], [\"zaaaz\"])", () => {
    const result = numSmallerByFrequency(["cbd"], ["zaaaz"]);
    expect(result).toEqual([1]);
  });

  it("numSmallerByFrequency([\"bbb\", \"cc\"], [\"a\", \"aa\", \"aaa\", \"aaaa\"])", () => {
    const result = numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]);
    expect(result).toEqual([1, 2]);
  });

  it("numSmallerByFrequency([\"a\"], [\"a\", \"aa\", \"aaa\"])", () => {
    const result = numSmallerByFrequency(["a"], ["a", "aa", "aaa"]);
    expect(result).toEqual([2]);
  });

  it("numSmallerByFrequency([], [\"a\"])", () => {
    const result = numSmallerByFrequency([], ["a"]);
    expect(result).toEqual([]);
  });

  it("numSmallerByFrequency([\"dc\"], [\"dc\"])", () => {
    const result = numSmallerByFrequency(["dc"], ["dc"]);
    expect(result).toEqual([0]);
  });

  it("numSmallerByFrequency([\"zzz\"], [\"a\", \"b\"])", () => {
    const result = numSmallerByFrequency(["zzz"], ["a", "b"]);
    expect(result).toEqual([0]);
  });
});
