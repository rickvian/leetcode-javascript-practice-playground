import { numMatchingSubseq } from '../0792-number-of-matching-subsequences.js';

describe('0792-number-of-matching-subsequences', () => {
  it("numMatchingSubseq(\"abcde\", [\"a\", \"bb\", \"acd\", \"ace\"])", () => {
    const result = numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]);
    expect(result).toEqual(3);
  });

  it("numMatchingSubseq(\"dsahjpjauf\", [\"ahjpjau\", \"ja\", \"ahbwzgqnuk\", \"tnmlanowax\"])", () => {
    const result = numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]);
    expect(result).toEqual(2);
  });

  it("numMatchingSubseq(\"a\", [\"a\", \"b\"])", () => {
    const result = numMatchingSubseq("a", ["a", "b"]);
    expect(result).toEqual(1);
  });

  it("numMatchingSubseq(\"\", [\"a\", \"b\"])", () => {
    const result = numMatchingSubseq("", ["a", "b"]);
    expect(result).toEqual(0);
  });

  it("numMatchingSubseq(\"abc\", [\"abc\", \"ab\", \"a\"])", () => {
    const result = numMatchingSubseq("abc", ["abc", "ab", "a"]);
    expect(result).toEqual(3);
  });

  it("numMatchingSubseq(\"aaa\", [\"aaa\", \"aa\", \"a\"])", () => {
    const result = numMatchingSubseq("aaa", ["aaa", "aa", "a"]);
    expect(result).toEqual(3);
  });
});
