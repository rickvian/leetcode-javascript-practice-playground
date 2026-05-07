import { characterReplacement } from "../0424-longest-repeating-character-replacement";

describe("0424-longest-repeating-character-replacement", () => {
  // LeetCode example 1: s = "ABAB", k = 2 => 4
  it("should return 4 for ABAB with k=2", () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
  });

  // LeetCode example 2: s = "AABABBA", k = 1 => 4
  it("should return 4 for AABABBA with k=1", () => {
    expect(characterReplacement("AABABBA", 1)).toBe(4);
  });

  // All same characters
  it("should return full length when all chars are same", () => {
    expect(characterReplacement("AAAA", 0)).toBe(4);
  });

  // k=0: no replacements allowed
  it("should return length of longest run with k=0", () => {
    expect(characterReplacement("AABBA", 0)).toBe(2);
  });

  // Single character string
  it("should return 1 for single character", () => {
    expect(characterReplacement("A", 0)).toBe(1);
  });

  // k >= string length: entire string is valid
  it("should return full length when k >= length", () => {
    expect(characterReplacement("ABCDE", 5)).toBe(5);
  });

  // Two different characters alternating
  it("should handle two alternating characters", () => {
    expect(characterReplacement("ABABABABAB", 4)).toBe(9);
  });

  // All different characters, k=2
  it("should handle all different characters with k=2", () => {
    expect(characterReplacement("ABCDE", 2)).toBe(3);
  });

  // Long same prefix
  it("should handle string with long same prefix", () => {
    expect(characterReplacement("AAAAAB", 1)).toBe(6);
  });

  // k=0 with entire string same
  it("should return string length when all same and k=0", () => {
    expect(characterReplacement("BBBB", 0)).toBe(4);
  });

  // Tricky: empty string edge case
  it("should return 0 for empty string", () => {
    expect(characterReplacement("", 0)).toBe(0);
  });

  // Tricky: empty string with non-zero k
  it("should return 0 for empty string even with k > 0", () => {
    expect(characterReplacement("", 5)).toBe(0);
  });

  // Tricky: k far exceeds string length
  it("should return 1 for single char with very large k", () => {
    expect(characterReplacement("A", 100)).toBe(1);
  });

  // Tricky: two different chars, k=0 — must pick one
  it("should return 1 for two different chars with k=0", () => {
    expect(characterReplacement("AB", 0)).toBe(1);
  });

  // Tricky: repetitive long run of identical characters
  it("should handle long sequence of identical characters", () => {
    expect(characterReplacement("AAAAAAAAAA", 0)).toBe(10);
  });

  // Tricky: off-by-one — window must shrink correctly when count drops
  it("should handle ABAA with k=0 (longest run = 2)", () => {
    expect(characterReplacement("ABAA", 0)).toBe(2);
  });

  // Tricky: ensure best window is not always at start/end
  it("should find best window in the middle (BABBA, k=1)", () => {
    expect(characterReplacement("BABBA", 1)).toBe(4);
  });

  // Tricky: tail-heavy repetition with leading noise
  it("should extend window into long tail run (XYZAAAAA, k=2)", () => {
    expect(characterReplacement("XYZAAAAA", 2)).toBe(7);
  });

  // Tricky: balanced distribution forces partial window
  it("should handle evenly distributed chars (AABBCCDD, k=2)", () => {
    expect(characterReplacement("AABBCCDD", 2)).toBe(4);
  });

  // Tricky: cyclic pattern with k less than required full conversion
  it("should handle cyclic ABCABC with k=3", () => {
    expect(characterReplacement("ABCABC", 3)).toBe(5);
  });

  // Tricky: maxCount stale but window still valid (classic sliding-window pitfall)
  it("should handle AABABBA with k=2 (entire string convertible)", () => {
    expect(characterReplacement("AABABBA", 3)).toBe(7);
  });

  // Tricky: k=1, run on both sides of single different char
  it("should bridge two runs across one differing char (AAABAAA, k=1)", () => {
    expect(characterReplacement("AAABAAA", 1)).toBe(7);
  });

  // Tricky: k=1, cannot bridge two differing chars
  it("should not bridge two differing chars with k=1 (AAABBAAA, k=1)", () => {
    expect(characterReplacement("AAABBAAA", 1)).toBe(4);
  });
});
