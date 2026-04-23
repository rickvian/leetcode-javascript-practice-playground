import { lastSubstring } from '../1163-last-substring-in-lexicographical-order.js';

describe('1163-last-substring-in-lexicographical-order', () => {
  it("lastSubstring(\"abcabcbb\")", () => {
    const result = lastSubstring("abcabcbb");
    expect(result).toEqual("cbb");
  });

  it("lastSubstring(\"bbbbb\")", () => {
    const result = lastSubstring("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("lastSubstring(\"pwwkew\")", () => {
    const result = lastSubstring("pwwkew");
    expect(result).toEqual("wwkew");
  });

  it("lastSubstring(\"\")", () => {
    const result = lastSubstring("");
    expect(result).toEqual("");
  });

  it("lastSubstring(\" \")", () => {
    const result = lastSubstring(" ");
    expect(result).toEqual(" ");
  });

  it("lastSubstring(\"a\")", () => {
    const result = lastSubstring("a");
    expect(result).toEqual("a");
  });

  it("lastSubstring(\"aaaaaa\")", () => {
    const result = lastSubstring("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
