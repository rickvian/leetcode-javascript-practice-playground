import { removePalindromeSub } from '../1332-remove-palindromic-subsequences.js';

describe('1332-remove-palindromic-subsequences', () => {
  it("removePalindromeSub(\"abcabcbb\")", () => {
    const result = removePalindromeSub("abcabcbb");
    expect(result).toEqual(2);
  });

  it("removePalindromeSub(\"bbbbb\")", () => {
    const result = removePalindromeSub("bbbbb");
    expect(result).toEqual(1);
  });

  it("removePalindromeSub(\"pwwkew\")", () => {
    const result = removePalindromeSub("pwwkew");
    expect(result).toEqual(2);
  });

  it("removePalindromeSub(\"\")", () => {
    const result = removePalindromeSub("");
    expect(result).toEqual(0);
  });

  it("removePalindromeSub(\" \")", () => {
    const result = removePalindromeSub(" ");
    expect(result).toEqual(1);
  });

  it("removePalindromeSub(\"a\")", () => {
    const result = removePalindromeSub("a");
    expect(result).toEqual(1);
  });

  it("removePalindromeSub(\"aaaaaa\")", () => {
    const result = removePalindromeSub("aaaaaa");
    expect(result).toEqual(1);
  });
});
