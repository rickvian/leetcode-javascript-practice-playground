import { removeVowels } from '../1119-remove-vowels-from-a-string.js';

describe('1119-remove-vowels-from-a-string', () => {
  it("removeVowels(\"abcabcbb\")", () => {
    const result = removeVowels("abcabcbb");
    expect(result).toEqual("bcbcbb");
  });

  it("removeVowels(\"bbbbb\")", () => {
    const result = removeVowels("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("removeVowels(\"pwwkew\")", () => {
    const result = removeVowels("pwwkew");
    expect(result).toEqual("pwwkw");
  });

  it("removeVowels(\"\")", () => {
    const result = removeVowels("");
    expect(result).toEqual("");
  });

  it("removeVowels(\" \")", () => {
    const result = removeVowels(" ");
    expect(result).toEqual(" ");
  });

  it("removeVowels(\"a\")", () => {
    const result = removeVowels("a");
    expect(result).toEqual("");
  });

  it("removeVowels(\"aaaaaa\")", () => {
    const result = removeVowels("aaaaaa");
    expect(result).toEqual("");
  });
});
