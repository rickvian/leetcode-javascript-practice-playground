import { longestRepeatingSubstring } from '../1062-longest-repeating-substring.js';

describe('1062-longest-repeating-substring', () => {
  it("longestRepeatingSubstring(\"abcabcbb\")", () => {
    const result = longestRepeatingSubstring("abcabcbb");
    expect(result).toEqual(3);
  });

  it("longestRepeatingSubstring(\"bbbbb\")", () => {
    const result = longestRepeatingSubstring("bbbbb");
    expect(result).toEqual(4);
  });

  it("longestRepeatingSubstring(\"pwwkew\")", () => {
    const result = longestRepeatingSubstring("pwwkew");
    expect(result).toEqual(1);
  });

  it("longestRepeatingSubstring(\"\")", () => {
    const result = longestRepeatingSubstring("");
    expect(result).toEqual(0);
  });

  it("longestRepeatingSubstring(\" \")", () => {
    const result = longestRepeatingSubstring(" ");
    expect(result).toEqual(0);
  });

  it("longestRepeatingSubstring(\"a\")", () => {
    const result = longestRepeatingSubstring("a");
    expect(result).toEqual(0);
  });

  it("longestRepeatingSubstring(\"aaaaaa\")", () => {
    const result = longestRepeatingSubstring("aaaaaa");
    expect(result).toEqual(5);
  });
});
