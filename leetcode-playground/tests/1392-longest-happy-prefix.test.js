import { longestPrefix } from '../1392-longest-happy-prefix.js';

describe('1392-longest-happy-prefix', () => {
  it("longestPrefix(\"abcabcbb\")", () => {
    const result = longestPrefix("abcabcbb");
    expect(result).toEqual("");
  });

  it("longestPrefix(\"bbbbb\")", () => {
    const result = longestPrefix("bbbbb");
    expect(result).toEqual("bbbb");
  });

  it("longestPrefix(\"pwwkew\")", () => {
    const result = longestPrefix("pwwkew");
    expect(result).toEqual("");
  });

  it("longestPrefix(\"\")", () => {
    const result = longestPrefix("");
    expect(result).toEqual("");
  });

  it("longestPrefix(\" \")", () => {
    const result = longestPrefix(" ");
    expect(result).toEqual("");
  });

  it("longestPrefix(\"a\")", () => {
    const result = longestPrefix("a");
    expect(result).toEqual("");
  });

  it("longestPrefix(\"aaaaaa\")", () => {
    const result = longestPrefix("aaaaaa");
    expect(result).toEqual("aaaaa");
  });
});
