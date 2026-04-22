import { lengthOfLongestSubstringKDistinct } from '../0340-longest-substring-with-at-most-k-distinct-characters.js';

describe('0340-longest-substring-with-at-most-k-distinct-characters', () => {
  it("lengthOfLongestSubstringKDistinct(\"abcdef\", 2)", () => {
    const result = lengthOfLongestSubstringKDistinct("abcdef", 2);
    expect(result).toEqual(2);
  });

  it("lengthOfLongestSubstringKDistinct(\"\", 1)", () => {
    const result = lengthOfLongestSubstringKDistinct("", 1);
    expect(result).toEqual(0);
  });

  it("lengthOfLongestSubstringKDistinct(\"a\", 1)", () => {
    const result = lengthOfLongestSubstringKDistinct("a", 1);
    expect(result).toEqual(1);
  });

  it("lengthOfLongestSubstringKDistinct(\"abba\", 3)", () => {
    const result = lengthOfLongestSubstringKDistinct("abba", 3);
    expect(result).toEqual(4);
  });

  it("lengthOfLongestSubstringKDistinct(\"  hello  \", 2)", () => {
    const result = lengthOfLongestSubstringKDistinct("  hello  ", 2);
    expect(result).toEqual(3);
  });
});
