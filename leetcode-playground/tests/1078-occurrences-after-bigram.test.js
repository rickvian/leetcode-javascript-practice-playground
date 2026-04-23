import { findOcurrences } from '../1078-occurrences-after-bigram.js';

describe('1078-occurrences-after-bigram', () => {
  it("findOcurrences(\"aabcc\", \"dbbca\"...)", () => {
    const result = findOcurrences("aabcc", "dbbca", "aadbbcbcac");
    expect(result).toEqual([]);
  });

  it("findOcurrences(\"aabcc\", \"dbbca\"...)", () => {
    const result = findOcurrences("aabcc", "dbbca", "aadbbbaccc");
    expect(result).toEqual([]);
  });

  it("findOcurrences(\"\", \"\"...)", () => {
    const result = findOcurrences("", "", "");
    expect(result).toEqual([]);
  });

  it("findOcurrences(\"a\", \"\"...)", () => {
    const result = findOcurrences("a", "", "a");
    expect(result).toEqual([]);
  });

  it("findOcurrences(\"\", \"a\"...)", () => {
    const result = findOcurrences("", "a", "a");
    expect(result).toEqual([]);
  });

  it("findOcurrences(\"abc\", \"def\"...)", () => {
    const result = findOcurrences("abc", "def", "adbcef");
    expect(result).toEqual([]);
  });
});
