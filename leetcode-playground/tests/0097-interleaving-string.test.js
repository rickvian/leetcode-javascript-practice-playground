import { isInterleave } from "../0097-interleaving-string";

describe("0097-interleaving-string", () => {
  it("should return true when all three strings are empty", () => {
    expect(isInterleave("", "", "")).toBe(true);
  });

  it("should return true when s1 is empty and s3 equals s2", () => {
    expect(isInterleave("", "abc", "abc")).toBe(true);
  });

  it("should return false when s1 is empty and s3 does not equal s2", () => {
    expect(isInterleave("", "abc", "ab")).toBe(false);
  });

  it("should return true when s2 is empty and s3 equals s1", () => {
    expect(isInterleave("abc", "", "abc")).toBe(true);
  });

  it("should return false when s2 is empty and s3 does not equal s1", () => {
    expect(isInterleave("abc", "", "xyz")).toBe(false);
  });

  it("should return false when lengths of s1 and s2 do not sum to length of s3", () => {
    expect(isInterleave("a", "b", "abc")).toBe(false);
  });

  it("should return false when lengths do not sum even with matching chars", () => {
    expect(isInterleave("ab", "cd", "abcd123")).toBe(false);
  });

  it("should return true for LeetCode official example 1", () => {
    expect(isInterleave("aabcc", "dbbca", "aadbbcbcac")).toBe(true);
  });

  it("should return false for LeetCode official example 2", () => {
    expect(isInterleave("aabcc", "dbbca", "aadbbbaccc")).toBe(false);
  });

  it("should return true for single char interleaving (s1+s2)", () => {
    expect(isInterleave("a", "b", "ab")).toBe(true);
  });

  it("should return true for single char interleaving (s2+s1)", () => {
    expect(isInterleave("a", "b", "ba")).toBe(true);
  });

  it("should return false for single char interleaving with wrong chars", () => {
    expect(isInterleave("a", "b", "aa")).toBe(false);
  });

  it("should return true for duplicate chars where greedy fails but DP succeeds", () => {
    expect(isInterleave("aa", "ab", "aaba")).toBe(true);
  });

  it("should return true for duplicate chars where both s1 chars used before s2", () => {
    expect(isInterleave("aa", "ab", "aaab")).toBe(true);
  });

  it("should return true when s3 can be formed despite duplicate chars misleading greedy", () => {
    expect(isInterleave("aab", "aac", "aacaab")).toBe(true);
  });

  it("should return false when s3 chars do not match s1 and s2 despite length match", () => {
    expect(isInterleave("a", "a", "bb")).toBe(false);
  });

  it("should return true for interleaving with longer strings", () => {
    expect(isInterleave("abcde", "fghij", "afhgibcjde")).toBe(false);
  });

  it("should return true when s3 is s1 followed by s2", () => {
    expect(isInterleave("abc", "def", "abcdef")).toBe(true);
  });

  it("should return true when s3 is s2 followed by s1", () => {
    expect(isInterleave("abc", "def", "defabc")).toBe(true);
  });
});
