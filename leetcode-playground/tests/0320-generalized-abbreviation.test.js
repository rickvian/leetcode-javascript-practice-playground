import { generateAbbreviations } from '../0320-generalized-abbreviation.js';

describe('0320-generalized-abbreviation', () => {
  it("generateAbbreviations(\"abcabcbb\")", () => {
    const result = generateAbbreviations("abcabcbb");
    expect(result).toEqual(["abcabcbb", "abcabcb1", "abcabc1b", "abcabc2", "abcab1bb", "abcab1b1", "abcab2b", "abcab3", "abca1cbb", "abca1cb1", "abca1c1b", "abca1c2", "abca2bb", "abca2b1", "abca3b", "abca4", "abc1bcbb", "abc1bcb1", "abc1bc1b", "abc1bc2", "abc1b1bb", "abc1b1b1", "abc1b2b", "abc1b3", "abc2cbb", "abc2cb1", "abc2c1b", "abc2c2", "abc3bb", "abc3b1", "abc4b", "abc5", "ab1abcbb", "ab1abcb1", "ab1abc1b", "ab1abc2", "ab1ab1bb", "ab1ab1b1", "ab1ab2b", "ab1ab3", "ab1a1cbb", "ab1a1cb1", "ab1a1c1b", "ab1a1c2", "ab1a2bb", "ab1a2b1", "ab1a3b", "ab1a4", "ab2bcbb", "ab2bcb1", "ab2bc1b", "ab2bc2", "ab2b1bb", "ab2b1b1", "ab2b2b", "ab2b3", "ab3cbb", "ab3cb1", "ab3c1b", "ab3c2", "ab4bb", "ab4b1", "ab5b", "ab6", "a1cabcbb", "a1cabcb1", "a1cabc1b", "a1cabc2", "a1cab1bb", "a1cab1b1", "a1cab2b", "a1cab3", "a1ca1cbb", "a1ca1cb1", "a1ca1c1b", "a1ca1c2", "a1ca2bb", "a1ca2b1", "a1ca3b", "a1ca4", "a1c1bcbb", "a1c1bcb1", "a1c1bc1b", "a1c1bc2", "a1c1b1bb", "a1c1b1b1", "a1c1b2b", "a1c1b3", "a1c2cbb", "a1c2cb1", "a1c2c1b", "a1c2c2", "a1c3bb", "a1c3b1", "a1c4b", "a1c5", "a2abcbb", "a2abcb1", "a2abc1b", "a2abc2", "a2ab1bb", "a2ab1b1", "a2ab2b", "a2ab3", "a2a1cbb", "a2a1cb1", "a2a1c1b", "a2a1c2", "a2a2bb", "a2a2b1", "a2a3b", "a2a4", "a3bcbb", "a3bcb1", "a3bc1b", "a3bc2", "a3b1bb", "a3b1b1", "a3b2b", "a3b3", "a4cbb", "a4cb1", "a4c1b", "a4c2", "a5bb", "a5b1", "a6b", "a7", "1bcabcbb", "1bcabcb1", "1bcabc1b", "1bcabc2", "1bcab1bb", "1bcab1b1", "1bcab2b", "1bcab3", "1bca1cbb", "1bca1cb1", "1bca1c1b", "1bca1c2", "1bca2bb", "1bca2b1", "1bca3b", "1bca4", "1bc1bcbb", "1bc1bcb1", "1bc1bc1b", "1bc1bc2", "1bc1b1bb", "1bc1b1b1", "1bc1b2b", "1bc1b3", "1bc2cbb", "1bc2cb1", "1bc2c1b", "1bc2c2", "1bc3bb", "1bc3b1", "1bc4b", "1bc5", "1b1abcbb", "1b1abcb1", "1b1abc1b", "1b1abc2", "1b1ab1bb", "1b1ab1b1", "1b1ab2b", "1b1ab3", "1b1a1cbb", "1b1a1cb1", "1b1a1c1b", "1b1a1c2", "1b1a2bb", "1b1a2b1", "1b1a3b", "1b1a4", "1b2bcbb", "1b2bcb1", "1b2bc1b", "1b2bc2", "1b2b1bb", "1b2b1b1", "1b2b2b", "1b2b3", "1b3cbb", "1b3cb1", "1b3c1b", "1b3c2", "1b4bb", "1b4b1", "1b5b", "1b6", "2cabcbb", "2cabcb1", "2cabc1b", "2cabc2", "2cab1bb", "2cab1b1", "2cab2b", "2cab3", "2ca1cbb", "2ca1cb1", "2ca1c1b", "2ca1c2", "2ca2bb", "2ca2b1", "2ca3b", "2ca4", "2c1bcbb", "2c1bcb1", "2c1bc1b", "2c1bc2", "2c1b1bb", "2c1b1b1", "2c1b2b", "2c1b3", "2c2cbb", "2c2cb1", "2c2c1b", "2c2c2", "2c3bb", "2c3b1", "2c4b", "2c5", "3abcbb", "3abcb1", "3abc1b", "3abc2", "3ab1bb", "3ab1b1", "3ab2b", "3ab3", "3a1cbb", "3a1cb1", "3a1c1b", "3a1c2", "3a2bb", "3a2b1", "3a3b", "3a4", "4bcbb", "4bcb1", "4bc1b", "4bc2", "4b1bb", "4b1b1", "4b2b", "4b3", "5cbb", "5cb1", "5c1b", "5c2", "6bb", "6b1", "7b", "8"]);
  });

  it("generateAbbreviations(\"bbbbb\")", () => {
    const result = generateAbbreviations("bbbbb");
    expect(result).toEqual(["bbbbb", "bbbb1", "bbb1b", "bbb2", "bb1bb", "bb1b1", "bb2b", "bb3", "b1bbb", "b1bb1", "b1b1b", "b1b2", "b2bb", "b2b1", "b3b", "b4", "1bbbb", "1bbb1", "1bb1b", "1bb2", "1b1bb", "1b1b1", "1b2b", "1b3", "2bbb", "2bb1", "2b1b", "2b2", "3bb", "3b1", "4b", "5"]);
  });

  it("generateAbbreviations(\"pwwkew\")", () => {
    const result = generateAbbreviations("pwwkew");
    expect(result).toEqual(["pwwkew", "pwwke1", "pwwk1w", "pwwk2", "pww1ew", "pww1e1", "pww2w", "pww3", "pw1kew", "pw1ke1", "pw1k1w", "pw1k2", "pw2ew", "pw2e1", "pw3w", "pw4", "p1wkew", "p1wke1", "p1wk1w", "p1wk2", "p1w1ew", "p1w1e1", "p1w2w", "p1w3", "p2kew", "p2ke1", "p2k1w", "p2k2", "p3ew", "p3e1", "p4w", "p5", "1wwkew", "1wwke1", "1wwk1w", "1wwk2", "1ww1ew", "1ww1e1", "1ww2w", "1ww3", "1w1kew", "1w1ke1", "1w1k1w", "1w1k2", "1w2ew", "1w2e1", "1w3w", "1w4", "2wkew", "2wke1", "2wk1w", "2wk2", "2w1ew", "2w1e1", "2w2w", "2w3", "3kew", "3ke1", "3k1w", "3k2", "4ew", "4e1", "5w", "6"]);
  });

  it("generateAbbreviations(\"\")", () => {
    const result = generateAbbreviations("");
    expect(result).toEqual([""]);
  });

  it("generateAbbreviations(\" \")", () => {
    const result = generateAbbreviations(" ");
    expect(result).toEqual([" ", "1"]);
  });

  it("generateAbbreviations(\"a\")", () => {
    const result = generateAbbreviations("a");
    expect(result).toEqual(["a", "1"]);
  });

  it("generateAbbreviations(\"aaaaaa\")", () => {
    const result = generateAbbreviations("aaaaaa");
    expect(result).toEqual(["aaaaaa", "aaaaa1", "aaaa1a", "aaaa2", "aaa1aa", "aaa1a1", "aaa2a", "aaa3", "aa1aaa", "aa1aa1", "aa1a1a", "aa1a2", "aa2aa", "aa2a1", "aa3a", "aa4", "a1aaaa", "a1aaa1", "a1aa1a", "a1aa2", "a1a1aa", "a1a1a1", "a1a2a", "a1a3", "a2aaa", "a2aa1", "a2a1a", "a2a2", "a3aa", "a3a1", "a4a", "a5", "1aaaaa", "1aaaa1", "1aaa1a", "1aaa2", "1aa1aa", "1aa1a1", "1aa2a", "1aa3", "1a1aaa", "1a1aa1", "1a1a1a", "1a1a2", "1a2aa", "1a2a1", "1a3a", "1a4", "2aaaa", "2aaa1", "2aa1a", "2aa2", "2a1aa", "2a1a1", "2a2a", "2a3", "3aaa", "3aa1", "3a1a", "3a2", "4aa", "4a1", "5a", "6"]);
  });
});
