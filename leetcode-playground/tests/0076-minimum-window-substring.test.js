import { minWindow } from "../0076-minimum-window-substring";

describe("0076-minimum-window-substring", () => {
  it('should return "BANC" for s="ADOBECODEBANC", t="ABC"', () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
  });

  it('should return "a" for s="a", t="a"', () => {
    expect(minWindow("a", "a")).toBe("a");
  });

  it('should return "" for s="a", t="aa" (not enough characters)', () => {
    expect(minWindow("a", "aa")).toBe("");
  });

  it('should return "aa" for s="aa", t="aa"', () => {
    expect(minWindow("aa", "aa")).toBe("aa");
  });

  it('should return "" for empty t', () => {
    expect(minWindow("ADOBECODEBANC", "")).toBe("");
  });

  it('should return "AA" for s="AAAAAA", t="AA"', () => {
    expect(minWindow("AAAAAA", "AA")).toBe("AA");
  });

  it('should return "abc" for s="abc", t="cba"', () => {
    expect(minWindow("abc", "cba")).toBe("abc");
  });

  it('should return "aab" for s="aab", t="aab"', () => {
    expect(minWindow("aab", "aab")).toBe("aab");
  });
});
