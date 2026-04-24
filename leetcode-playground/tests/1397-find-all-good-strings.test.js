import { findGoodStrings } from '../1397-find-all-good-strings.js';

describe('1397-find-all-good-strings', () => {
  it("findGoodStrings(2, \"aa\"...)", () => {
    const result = findGoodStrings(2, "aa", "da", "b");
    expect(result).toEqual(51);
  });

  it("findGoodStrings(8, \"leetcode\"...)", () => {
    const result = findGoodStrings(8, "leetcode", "leetcode", "leet");
    expect(result).toEqual(0);
  });

  it("findGoodStrings(2, \"aa\"...)", () => {
    const result = findGoodStrings(2, "aa", "aa", "a");
    expect(result).toEqual(0);
  });

  it("findGoodStrings(1, \"a\"...)", () => {
    const result = findGoodStrings(1, "a", "z", "b");
    expect(result).toEqual(25);
  });

  it("findGoodStrings(3, \"abc\"...)", () => {
    const result = findGoodStrings(3, "abc", "xyz", "bc");
    expect(result).toEqual(16120);
  });

  it("findGoodStrings(4, \"abcd\"...)", () => {
    const result = findGoodStrings(4, "abcd", "mnop", "bc");
    expect(result).toEqual(218015);
  });
});
