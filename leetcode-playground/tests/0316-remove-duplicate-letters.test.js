import { removeDuplicateLetters } from '../0316-remove-duplicate-letters.js';

describe('0316-remove-duplicate-letters', () => {
  it("removeDuplicateLetters(\"abcabcbb\")", () => {
    const result = removeDuplicateLetters("abcabcbb");
    expect(result).toEqual("abc");
  });

  it("removeDuplicateLetters(\"bbbbb\")", () => {
    const result = removeDuplicateLetters("bbbbb");
    expect(result).toEqual("b");
  });

  it("removeDuplicateLetters(\"pwwkew\")", () => {
    const result = removeDuplicateLetters("pwwkew");
    expect(result).toEqual("pkew");
  });

  it("removeDuplicateLetters(\"\")", () => {
    const result = removeDuplicateLetters("");
    expect(result).toEqual("");
  });

  it("removeDuplicateLetters(\" \")", () => {
    const result = removeDuplicateLetters(" ");
    expect(result).toEqual(" ");
  });

  it("removeDuplicateLetters(\"a\")", () => {
    const result = removeDuplicateLetters("a");
    expect(result).toEqual("a");
  });

  it("removeDuplicateLetters(\"aaaaaa\")", () => {
    const result = removeDuplicateLetters("aaaaaa");
    expect(result).toEqual("a");
  });
});
