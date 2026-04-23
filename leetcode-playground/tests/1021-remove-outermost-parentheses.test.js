import { removeOuterParentheses } from '../1021-remove-outermost-parentheses.js';

describe('1021-remove-outermost-parentheses', () => {
  it("removeOuterParentheses(\"abcabcbb\")", () => {
    const result = removeOuterParentheses("abcabcbb");
    expect(result).toEqual("");
  });

  it("removeOuterParentheses(\"bbbbb\")", () => {
    const result = removeOuterParentheses("bbbbb");
    expect(result).toEqual("");
  });

  it("removeOuterParentheses(\"pwwkew\")", () => {
    const result = removeOuterParentheses("pwwkew");
    expect(result).toEqual("");
  });

  it("removeOuterParentheses(\"\")", () => {
    const result = removeOuterParentheses("");
    expect(result).toEqual("");
  });

  it("removeOuterParentheses(\" \")", () => {
    const result = removeOuterParentheses(" ");
    expect(result).toEqual("");
  });

  it("removeOuterParentheses(\"a\")", () => {
    const result = removeOuterParentheses("a");
    expect(result).toEqual("");
  });

  it("removeOuterParentheses(\"aaaaaa\")", () => {
    const result = removeOuterParentheses("aaaaaa");
    expect(result).toEqual("");
  });
});
