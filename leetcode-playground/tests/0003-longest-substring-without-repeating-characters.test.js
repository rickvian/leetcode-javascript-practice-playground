import { lengthOfLongestSubstring } from '../0003-longest-substring-without-repeating-characters.js';

describe('0003-longest-substring-without-repeating-characters', () => {
  it("lengthOfLongestSubstring(\"abcabcbb\")", () => {
    const result = lengthOfLongestSubstring("abcabcbb");
    expect(result).toEqual(3);
  });

  it("lengthOfLongestSubstring(\"bbbbb\")", () => {
    const result = lengthOfLongestSubstring("bbbbb");
    expect(result).toEqual(1);
  });

  it("lengthOfLongestSubstring(\"pwwkew\")", () => {
    const result = lengthOfLongestSubstring("pwwkew");
    expect(result).toEqual(3);
  });

  it("lengthOfLongestSubstring(\"\")", () => {
    const result = lengthOfLongestSubstring("");
    expect(result).toEqual(0);
  });

  it("lengthOfLongestSubstring(\" \")", () => {
    const result = lengthOfLongestSubstring(" ");
    expect(result).toEqual(1);
  });

  it("lengthOfLongestSubstring(\"a\")", () => {
    const result = lengthOfLongestSubstring("a");
    expect(result).toEqual(1);
  });

  it("lengthOfLongestSubstring(\"aaaaaa\")", () => {
    const result = lengthOfLongestSubstring("aaaaaa");
    expect(result).toEqual(1);
  });
});
