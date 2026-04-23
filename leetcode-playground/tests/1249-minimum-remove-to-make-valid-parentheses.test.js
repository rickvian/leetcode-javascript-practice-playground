import { minRemoveToMakeValid } from '../1249-minimum-remove-to-make-valid-parentheses.js';

describe('1249-minimum-remove-to-make-valid-parentheses', () => {
  it("minRemoveToMakeValid(\"abcabcbb\")", () => {
    const result = minRemoveToMakeValid("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("minRemoveToMakeValid(\"bbbbb\")", () => {
    const result = minRemoveToMakeValid("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("minRemoveToMakeValid(\"pwwkew\")", () => {
    const result = minRemoveToMakeValid("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("minRemoveToMakeValid(\"\")", () => {
    const result = minRemoveToMakeValid("");
    expect(result).toEqual("");
  });

  it("minRemoveToMakeValid(\" \")", () => {
    const result = minRemoveToMakeValid(" ");
    expect(result).toEqual(" ");
  });

  it("minRemoveToMakeValid(\"a\")", () => {
    const result = minRemoveToMakeValid("a");
    expect(result).toEqual("a");
  });

  it("minRemoveToMakeValid(\"aaaaaa\")", () => {
    const result = minRemoveToMakeValid("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
