import { countSubstrings } from '../0647-palindromic-substrings.js';

describe('0647-palindromic-substrings', () => {
  it("countSubstrings(\"abcabcbb\")", () => {
    const result = countSubstrings("abcabcbb");
    expect(result).toEqual(10);
  });

  it("countSubstrings(\"bbbbb\")", () => {
    const result = countSubstrings("bbbbb");
    expect(result).toEqual(15);
  });

  it("countSubstrings(\"pwwkew\")", () => {
    const result = countSubstrings("pwwkew");
    expect(result).toEqual(7);
  });

  it("countSubstrings(\"\")", () => {
    const result = countSubstrings("");
    expect(result).toEqual(0);
  });

  it("countSubstrings(\" \")", () => {
    const result = countSubstrings(" ");
    expect(result).toEqual(1);
  });

  it("countSubstrings(\"a\")", () => {
    const result = countSubstrings("a");
    expect(result).toEqual(1);
  });

  it("countSubstrings(\"aaaaaa\")", () => {
    const result = countSubstrings("aaaaaa");
    expect(result).toEqual(21);
  });
});
