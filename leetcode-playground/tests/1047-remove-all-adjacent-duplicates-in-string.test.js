import { removeDuplicates } from '../1047-remove-all-adjacent-duplicates-in-string.js';

describe('1047-remove-all-adjacent-duplicates-in-string', () => {
  it("removeDuplicates(\"abcabcbb\")", () => {
    const result = removeDuplicates("abcabcbb");
    expect(result).toEqual("abcabc");
  });

  it("removeDuplicates(\"bbbbb\")", () => {
    const result = removeDuplicates("bbbbb");
    expect(result).toEqual("b");
  });

  it("removeDuplicates(\"pwwkew\")", () => {
    const result = removeDuplicates("pwwkew");
    expect(result).toEqual("pkew");
  });

  it("removeDuplicates(\"\")", () => {
    const result = removeDuplicates("");
    expect(result).toEqual("");
  });

  it("removeDuplicates(\" \")", () => {
    const result = removeDuplicates(" ");
    expect(result).toEqual(" ");
  });

  it("removeDuplicates(\"a\")", () => {
    const result = removeDuplicates("a");
    expect(result).toEqual("a");
  });

  it("removeDuplicates(\"aaaaaa\")", () => {
    const result = removeDuplicates("aaaaaa");
    expect(result).toEqual("");
  });
});
