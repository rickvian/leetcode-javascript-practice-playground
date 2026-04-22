import { longestSubstring } from '../0395-longest-substring-with-at-least-k-repeating-characters.js';

describe('0395-longest-substring-with-at-least-k-repeating-characters', () => {
  it("longestSubstring(\"abcdef\", 2)", () => {
    const result = longestSubstring("abcdef", 2);
    expect(result).toEqual(0);
  });

  it("longestSubstring(\"\", 1)", () => {
    const result = longestSubstring("", 1);
    expect(result).toEqual(0);
  });

  it("longestSubstring(\"a\", 1)", () => {
    const result = longestSubstring("a", 1);
    expect(result).toEqual(1);
  });

  it("longestSubstring(\"abba\", 3)", () => {
    const result = longestSubstring("abba", 3);
    expect(result).toEqual(0);
  });

  it("longestSubstring(\"  hello  \", 2)", () => {
    const result = longestSubstring("  hello  ", 2);
    expect(result).toEqual(2);
  });
});
