import { minCut } from '../0132-palindrome-partitioning-ii.js';

describe('0132-palindrome-partitioning-ii', () => {
  it("minCut(\"abcabcbb\")", () => {
    const result = minCut("abcabcbb");
    expect(result).toEqual(5);
  });

  it("minCut(\"bbbbb\")", () => {
    const result = minCut("bbbbb");
    expect(result).toEqual(0);
  });

  it("minCut(\"pwwkew\")", () => {
    const result = minCut("pwwkew");
    expect(result).toEqual(4);
  });

  it("minCut(\" \")", () => {
    const result = minCut(" ");
    expect(result).toEqual(0);
  });

  it("minCut(\"a\")", () => {
    const result = minCut("a");
    expect(result).toEqual(0);
  });

  it("minCut(\"aaaaaa\")", () => {
    const result = minCut("aaaaaa");
    expect(result).toEqual(0);
  });
});
