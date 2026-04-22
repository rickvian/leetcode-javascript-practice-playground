import { reverseWords } from '../0151-reverse-words-in-a-string.js';

describe('0151-reverse-words-in-a-string', () => {
  it("reverseWords(\"abcabcbb\")", () => {
    const result = reverseWords("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("reverseWords(\"bbbbb\")", () => {
    const result = reverseWords("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("reverseWords(\"pwwkew\")", () => {
    const result = reverseWords("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("reverseWords(\"\")", () => {
    const result = reverseWords("");
    expect(result).toEqual("");
  });

  it("reverseWords(\" \")", () => {
    const result = reverseWords(" ");
    expect(result).toEqual("");
  });

  it("reverseWords(\"a\")", () => {
    const result = reverseWords("a");
    expect(result).toEqual("a");
  });

  it("reverseWords(\"aaaaaa\")", () => {
    const result = reverseWords("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
