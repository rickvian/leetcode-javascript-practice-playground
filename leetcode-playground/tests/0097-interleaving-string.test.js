import { isInterleave } from '../0097-interleaving-string.js';

describe('0097-interleaving-string', () => {
  it("isInterleave(\"aabcc\", \"dbbca\"...)", () => {
    const result = isInterleave("aabcc", "dbbca", "aadbbcbcac");
    expect(result).toEqual(true);
  });

  it("isInterleave(\"aabcc\", \"dbbca\"...)", () => {
    const result = isInterleave("aabcc", "dbbca", "aadbbbaccc");
    expect(result).toEqual(false);
  });

  it("isInterleave(\"\", \"\"...)", () => {
    const result = isInterleave("", "", "");
    expect(result).toEqual(true);
  });

  it("isInterleave(\"a\", \"\"...)", () => {
    const result = isInterleave("a", "", "a");
    expect(result).toEqual(true);
  });

  it("isInterleave(\"\", \"a\"...)", () => {
    const result = isInterleave("", "a", "a");
    expect(result).toEqual(true);
  });

  it("isInterleave(\"abc\", \"def\"...)", () => {
    const result = isInterleave("abc", "def", "adbcef");
    expect(result).toEqual(true);
  });
});
