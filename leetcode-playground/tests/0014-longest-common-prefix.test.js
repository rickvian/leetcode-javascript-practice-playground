import { longestCommonPrefix } from "../0014-longest-common-prefix";

describe("0014-longest-common-prefix", () => {
  it('should find prefix "fl" in ["flower","flow","flight"]', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  it('should return "" for ["dog","racecar","car"] (no common prefix)', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  it('should return "a" for single-string array ["a"]', () => {
    expect(longestCommonPrefix(["a"])).toBe("a");
  });

  it('should return entire string for all identical strings ["abc","abc","abc"]', () => {
    expect(longestCommonPrefix(["abc", "abc", "abc"])).toBe("abc");
  });

  it('should return "a" when prefix is only first character ["a","ab","abc"]', () => {
    expect(longestCommonPrefix(["a", "ab", "abc"])).toBe("a");
  });

  it('should return "" when strings have different first characters ["abc","def"]', () => {
    expect(longestCommonPrefix(["abc", "def"])).toBe("");
  });

  it('should return "a" for all single-character strings ["a","a","a"]', () => {
    expect(longestCommonPrefix(["a", "a", "a"])).toBe("a");
  });

  it('should return full string "ab" for two identical strings ["ab","ab"]', () => {
    expect(longestCommonPrefix(["ab", "ab"])).toBe("ab");
  });

  it('should return "ab" for strings ["abab","abc","abcd"]', () => {
    expect(longestCommonPrefix(["abab", "abc", "abcd"])).toBe("ab");
  });

  it('should return "lee" for ["leets","leetcode","leet","leeds"]', () => {
    expect(longestCommonPrefix(["leets", "leetcode", "leet", "leeds"])).toBe(
      "lee",
    );
  });

  it('should return "" for first chars all different ["a","ba","caa"]', () => {
    expect(longestCommonPrefix(["a", "ba", "caa"])).toBe("");
  });

  it('should return "" for completely different strings ["cat","dog","bird"]', () => {
    expect(longestCommonPrefix(["cat", "dog", "bird"])).toBe("");
  });

  it('should handle single-character identical strings ["x","x","x"]', () => {
    expect(longestCommonPrefix(["x", "x", "x"])).toBe("x");
  });

  it('should return "" for single-character different strings ["a","b","c"]', () => {
    expect(longestCommonPrefix(["a", "b", "c"])).toBe("");
  });

  it('should find longer common prefix ["interspecies","interstellar","interstate"]', () => {
    expect(
      longestCommonPrefix(["interspecies", "interstellar", "interstate"]),
    ).toBe("inters");
  });

  it('should return entire string for two identical long strings ["abcdef","abcdef"]', () => {
    expect(longestCommonPrefix(["abcdef", "abcdef"])).toBe("abcdef");
  });
});
