import { reverseOnlyLetters } from '../0917-reverse-only-letters.js';

describe('0917-reverse-only-letters', () => {
  it("reverseOnlyLetters(\"abcabcbb\")", () => {
    const result = reverseOnlyLetters("abcabcbb");
    expect(result).toEqual("bbcbacba");
  });

  it("reverseOnlyLetters(\"bbbbb\")", () => {
    const result = reverseOnlyLetters("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("reverseOnlyLetters(\"pwwkew\")", () => {
    const result = reverseOnlyLetters("pwwkew");
    expect(result).toEqual("wekwwp");
  });

  it("reverseOnlyLetters(\"\")", () => {
    const result = reverseOnlyLetters("");
    expect(result).toEqual("");
  });

  it("reverseOnlyLetters(\" \")", () => {
    const result = reverseOnlyLetters(" ");
    expect(result).toEqual(" ");
  });

  it("reverseOnlyLetters(\"a\")", () => {
    const result = reverseOnlyLetters("a");
    expect(result).toEqual("a");
  });

  it("reverseOnlyLetters(\"aaaaaa\")", () => {
    const result = reverseOnlyLetters("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
