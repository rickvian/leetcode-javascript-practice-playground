import { decodeString } from "../0394-decode-string";

describe("0394-decode-string", () => {
  it("should decode simple repetition", () => {
    expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
  });

  it("should decode nested brackets", () => {
    expect(decodeString("3[a2[c]]")).toBe("accaccacc");
  });

  it("should decode multiple nested levels", () => {
    expect(decodeString("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
  });

  it("should decode deeply nested brackets", () => {
    expect(decodeString("2[3[a]b]")).toBe("aaabaaab");
  });

  it("should handle single character repetition", () => {
    expect(decodeString("10[a]")).toBe("aaaaaaaaaa");
  });

  it("should handle string with no brackets", () => {
    expect(decodeString("abc")).toBe("abc");
  });

  it("should handle letters outside brackets", () => {
    expect(decodeString("ab3[c]")).toBe("abccc");
  });

  it("should handle letters after closing bracket", () => {
    expect(decodeString("3[a]bc")).toBe("aaabc");
  });

  it("should handle letters between bracket groups", () => {
    expect(decodeString("2[a]x3[b]")).toBe("aaxbbb");
  });

  it("should handle triple nested brackets", () => {
    expect(decodeString("2[3[2[a]]]")).toBe("aaaaaaaaaaaa");
  });

  it("should handle large repetition count", () => {
    expect(decodeString("100[a]")).toBe("a".repeat(100));
  });

  it("should handle multi-character string in deeply nested bracket", () => {
    expect(decodeString("2[3[ab]]")).toBe("abababababab");
  });

  it("should handle adjacent nested groups", () => {
    expect(decodeString("2[3[a]4[b]]")).toBe("aaabbbbaaabbbb");
  });

  it("should handle repetition of 1", () => {
    expect(decodeString("1[abc]")).toBe("abc");
  });

  it("should handle prefix and suffix letters with nested brackets", () => {
    expect(decodeString("x2[y3[z]]w")).toBe("xyzzzyzzzw");
  });

  it("should handle empty string", () => {
    expect(decodeString("")).toBe("");
  });

  it("should handle multiple levels of nesting with varying repetitions", () => {
    expect(decodeString("3[2[1[a]b]c]")).toBe("ababcababcababc");
  });

  it("should handle many sequential groups (long input, moderate output)", () => {
    // 50 groups of "1[ab]" → "ab" repeated 50 times
    const input = "1[ab]".repeat(50);
    const expected = "ab".repeat(50);
    expect(decodeString(input)).toBe(expected);
  });

  it("should handle large k producing very long output", () => {
    // 5000-char output
    expect(decodeString("1000[abcde]")).toBe("abcde".repeat(1000));
  });

  it("should handle deeply nested encoding with exponential expansion", () => {
    // 5[5[5[5[a]]]] = 5^4 = 625 a's
    expect(decodeString("5[5[5[5[a]]]]")).toBe("a".repeat(625));
  });

  it("should handle long input with mixed literals and many groups", () => {
    // 30 groups each like "3[ab]x" → "ababab" + "x" repeated 30 times
    const input = "3[ab]x".repeat(30);
    const expected = ("ababab" + "x").repeat(30);
    expect(decodeString(input)).toBe(expected);
  });

  it("should handle 4-digit repetition count", () => {
    expect(decodeString("9999[a]")).toBe("a".repeat(9999));
  });

  it("should handle long literal string inside brackets", () => {
    // 100-char literal inside brackets repeated 10 times
    const inner = "abcdefghij".repeat(10); // 100 chars
    const input = `5[${inner}]`;
    const expected = inner.repeat(5);
    expect(decodeString(input)).toBe(expected);
  });
});
