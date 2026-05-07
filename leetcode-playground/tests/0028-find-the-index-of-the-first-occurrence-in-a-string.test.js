import { strStr } from "../0028-find-the-index-of-the-first-occurrence-in-a-string";

describe("0028-find-the-index-of-the-first-occurrence-in-a-string", () => {
  it("should return 0 for empty needle", () => {
    expect(strStr("hello", "")).toBe(0);
  });

  it("should return 0 when needle equals haystack", () => {
    expect(strStr("hello", "hello")).toBe(0);
  });

  it("should return -1 when needle not found", () => {
    expect(strStr("hello", "xyz")).toBe(-1);
  });

  it("should return 0 when needle at position 0", () => {
    expect(strStr("hello", "he")).toBe(0);
  });

  it("should return last position when needle at end", () => {
    expect(strStr("hello", "lo")).toBe(3);
  });

  it("should find needle in middle of haystack", () => {
    expect(strStr("hello", "ll")).toBe(2);
  });

  it("should return first occurrence with partial matches before", () => {
    expect(strStr("aabaaab", "aaab")).toBe(3);
  });

  it("should handle single character needle at start", () => {
    expect(strStr("hello", "h")).toBe(0);
  });

  it("should handle single character needle in middle", () => {
    expect(strStr("hello", "e")).toBe(1);
  });

  it("should handle single character needle at end", () => {
    expect(strStr("hello", "o")).toBe(4);
  });

  it("should handle single character needle not found", () => {
    expect(strStr("hello", "x")).toBe(-1);
  });

  it("should handle needle longer than haystack", () => {
    expect(strStr("hi", "hello")).toBe(-1);
  });

  it("should handle single character haystack with matching needle", () => {
    expect(strStr("a", "a")).toBe(0);
  });

  it("should handle single character haystack with non-matching needle", () => {
    expect(strStr("a", "b")).toBe(-1);
  });

  it("should handle haystack with repeated characters", () => {
    expect(strStr("aaaa", "aa")).toBe(0);
  });

  it("should find needle after repeated false starts", () => {
    expect(strStr("ababdababac", "ababac")).toBe(5);
  });

  it("should handle complex pattern with backtracking", () => {
    expect(strStr("mississippi", "issip")).toBe(4);
  });

  it("should handle spaces in strings", () => {
    expect(strStr("hello world", "o w")).toBe(4);
  });
});
