import { longestValidParentheses } from '../0032-longest-valid-parentheses.js';

describe('0032-longest-valid-parentheses', () => {
  it("longestValidParentheses(\"abcabcbb\")", () => {
    const result = longestValidParentheses("abcabcbb");
    expect(result).toEqual(0);
  });

  it("longestValidParentheses(\"bbbbb\")", () => {
    const result = longestValidParentheses("bbbbb");
    expect(result).toEqual(0);
  });

  it("longestValidParentheses(\"pwwkew\")", () => {
    const result = longestValidParentheses("pwwkew");
    expect(result).toEqual(0);
  });

  it("longestValidParentheses(\"\")", () => {
    const result = longestValidParentheses("");
    expect(result).toEqual(0);
  });

  it("longestValidParentheses(\" \")", () => {
    const result = longestValidParentheses(" ");
    expect(result).toEqual(0);
  });

  it("longestValidParentheses(\"a\")", () => {
    const result = longestValidParentheses("a");
    expect(result).toEqual(0);
  });

  it("longestValidParentheses(\"aaaaaa\")", () => {
    const result = longestValidParentheses("aaaaaa");
    expect(result).toEqual(0);
  });
});
