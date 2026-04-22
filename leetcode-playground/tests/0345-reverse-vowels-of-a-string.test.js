import { reverseVowels } from '../0345-reverse-vowels-of-a-string.js';

describe('0345-reverse-vowels-of-a-string', () => {
  it("reverseVowels(\"abcabcbb\")", () => {
    const result = reverseVowels("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("reverseVowels(\"bbbbb\")", () => {
    const result = reverseVowels("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("reverseVowels(\"pwwkew\")", () => {
    const result = reverseVowels("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("reverseVowels(\"\")", () => {
    const result = reverseVowels("");
    expect(result).toEqual("");
  });

  it("reverseVowels(\" \")", () => {
    const result = reverseVowels(" ");
    expect(result).toEqual(" ");
  });

  it("reverseVowels(\"a\")", () => {
    const result = reverseVowels("a");
    expect(result).toEqual("a");
  });

  it("reverseVowels(\"aaaaaa\")", () => {
    const result = reverseVowels("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
