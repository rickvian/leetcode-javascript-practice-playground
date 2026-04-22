import { isValid } from '../0020-valid-parentheses.js';

describe('0020-valid-parentheses', () => {
  it("isValid(\"abcabcbb\")", () => {
    const result = isValid("abcabcbb");
    expect(result).toEqual(false);
  });

  it("isValid(\"bbbbb\")", () => {
    const result = isValid("bbbbb");
    expect(result).toEqual(false);
  });

  it("isValid(\"pwwkew\")", () => {
    const result = isValid("pwwkew");
    expect(result).toEqual(false);
  });

  it("isValid(\"\")", () => {
    const result = isValid("");
    expect(result).toEqual(true);
  });

  it("isValid(\" \")", () => {
    const result = isValid(" ");
    expect(result).toEqual(false);
  });

  it("isValid(\"a\")", () => {
    const result = isValid("a");
    expect(result).toEqual(false);
  });

  it("isValid(\"aaaaaa\")", () => {
    const result = isValid("aaaaaa");
    expect(result).toEqual(false);
  });
});
