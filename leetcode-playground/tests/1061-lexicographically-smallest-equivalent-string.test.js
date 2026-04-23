import { smallestEquivalentString } from '../1061-lexicographically-smallest-equivalent-string.js';

describe('1061-lexicographically-smallest-equivalent-string', () => {
  it("smallestEquivalentString(\"aabcc\", \"dbbca\"...)", () => {
    const result = smallestEquivalentString("aabcc", "dbbca", "aadbbcbcac");
    expect(result).toEqual("aaaaaaaaaa");
  });

  it("smallestEquivalentString(\"aabcc\", \"dbbca\"...)", () => {
    const result = smallestEquivalentString("aabcc", "dbbca", "aadbbbaccc");
    expect(result).toEqual("aaaaaaaaaa");
  });

  it("smallestEquivalentString(\"\", \"\"...)", () => {
    const result = smallestEquivalentString("", "", "");
    expect(result).toEqual("");
  });

  it("smallestEquivalentString(\"a\", \"\"...)", () => {
    const result = smallestEquivalentString("a", "", "a");
    expect(result).toEqual("a");
  });

  it("smallestEquivalentString(\"\", \"a\"...)", () => {
    const result = smallestEquivalentString("", "a", "a");
    expect(result).toEqual("a");
  });

  it("smallestEquivalentString(\"abc\", \"def\"...)", () => {
    const result = smallestEquivalentString("abc", "def", "adbcef");
    expect(result).toEqual("aabcbc");
  });
});
