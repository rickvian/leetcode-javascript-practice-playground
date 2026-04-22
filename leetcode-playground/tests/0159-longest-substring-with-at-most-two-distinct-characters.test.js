import { lengthOfLongestSubstringTwoDistinct } from '../0159-longest-substring-with-at-most-two-distinct-characters.js';

describe('0159-longest-substring-with-at-most-two-distinct-characters', () => {
  it("lengthOfLongestSubstringTwoDistinct(\"abcabcbb\")", () => {
    const result = lengthOfLongestSubstringTwoDistinct("abcabcbb");
    expect(result).toEqual(4);
  });

  it("lengthOfLongestSubstringTwoDistinct(\"bbbbb\")", () => {
    const result = lengthOfLongestSubstringTwoDistinct("bbbbb");
    expect(result).toEqual(5);
  });

  it("lengthOfLongestSubstringTwoDistinct(\"pwwkew\")", () => {
    const result = lengthOfLongestSubstringTwoDistinct("pwwkew");
    expect(result).toEqual(3);
  });

  it("lengthOfLongestSubstringTwoDistinct(\"\")", () => {
    const result = lengthOfLongestSubstringTwoDistinct("");
    expect(result).toEqual(0);
  });

  it("lengthOfLongestSubstringTwoDistinct(\" \")", () => {
    const result = lengthOfLongestSubstringTwoDistinct(" ");
    expect(result).toEqual(1);
  });

  it("lengthOfLongestSubstringTwoDistinct(\"a\")", () => {
    const result = lengthOfLongestSubstringTwoDistinct("a");
    expect(result).toEqual(1);
  });

  it("lengthOfLongestSubstringTwoDistinct(\"aaaaaa\")", () => {
    const result = lengthOfLongestSubstringTwoDistinct("aaaaaa");
    expect(result).toEqual(6);
  });
});
