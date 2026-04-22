import { removeInvalidParentheses } from '../0301-remove-invalid-parentheses.js';

describe('0301-remove-invalid-parentheses', () => {
  it("removeInvalidParentheses(\"abcabcbb\")", () => {
    const result = removeInvalidParentheses("abcabcbb");
    expect(result).toEqual(["abcabcbb"]);
  });

  it("removeInvalidParentheses(\"bbbbb\")", () => {
    const result = removeInvalidParentheses("bbbbb");
    expect(result).toEqual(["bbbbb"]);
  });

  it("removeInvalidParentheses(\"pwwkew\")", () => {
    const result = removeInvalidParentheses("pwwkew");
    expect(result).toEqual(["pwwkew"]);
  });

  it("removeInvalidParentheses(\"\")", () => {
    const result = removeInvalidParentheses("");
    expect(result).toEqual([""]);
  });

  it("removeInvalidParentheses(\" \")", () => {
    const result = removeInvalidParentheses(" ");
    expect(result).toEqual([" "]);
  });

  it("removeInvalidParentheses(\"a\")", () => {
    const result = removeInvalidParentheses("a");
    expect(result).toEqual(["a"]);
  });

  it("removeInvalidParentheses(\"aaaaaa\")", () => {
    const result = removeInvalidParentheses("aaaaaa");
    expect(result).toEqual(["aaaaaa"]);
  });
});
