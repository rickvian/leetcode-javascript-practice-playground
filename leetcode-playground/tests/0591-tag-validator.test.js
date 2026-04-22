import { isValid } from '../0591-tag-validator.js';

describe('0591-tag-validator', () => {
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
    expect(result).toEqual(true);
  });

  it("isValid(\"a\")", () => {
    const result = isValid("a");
    expect(result).toEqual(true);
  });

  it("isValid(\"aaaaaa\")", () => {
    const result = isValid("aaaaaa");
    expect(result).toEqual(false);
  });
});
