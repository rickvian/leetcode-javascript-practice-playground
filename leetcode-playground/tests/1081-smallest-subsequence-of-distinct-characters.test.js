import { smallestSubsequence } from '../1081-smallest-subsequence-of-distinct-characters.js';

describe('1081-smallest-subsequence-of-distinct-characters', () => {
  it("smallestSubsequence(\"abcabcbb\")", () => {
    const result = smallestSubsequence("abcabcbb");
    expect(result).toEqual("abc");
  });

  it("smallestSubsequence(\"bbbbb\")", () => {
    const result = smallestSubsequence("bbbbb");
    expect(result).toEqual("b");
  });

  it("smallestSubsequence(\"pwwkew\")", () => {
    const result = smallestSubsequence("pwwkew");
    expect(result).toEqual("pkew");
  });

  it("smallestSubsequence(\"\")", () => {
    const result = smallestSubsequence("");
    expect(result).toEqual("");
  });

  it("smallestSubsequence(\" \")", () => {
    const result = smallestSubsequence(" ");
    expect(result).toEqual(" ");
  });

  it("smallestSubsequence(\"a\")", () => {
    const result = smallestSubsequence("a");
    expect(result).toEqual("a");
  });

  it("smallestSubsequence(\"aaaaaa\")", () => {
    const result = smallestSubsequence("aaaaaa");
    expect(result).toEqual("a");
  });
});
