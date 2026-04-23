import { reverseParentheses } from '../1190-reverse-substrings-between-each-pair-of-parentheses.js';

describe('1190-reverse-substrings-between-each-pair-of-parentheses', () => {
  it("reverseParentheses(\"abcabcbb\")", () => {
    const result = reverseParentheses("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("reverseParentheses(\"bbbbb\")", () => {
    const result = reverseParentheses("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("reverseParentheses(\"pwwkew\")", () => {
    const result = reverseParentheses("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("reverseParentheses(\"\")", () => {
    const result = reverseParentheses("");
    expect(result).toEqual("");
  });

  it("reverseParentheses(\" \")", () => {
    const result = reverseParentheses(" ");
    expect(result).toEqual(" ");
  });

  it("reverseParentheses(\"a\")", () => {
    const result = reverseParentheses("a");
    expect(result).toEqual("a");
  });

  it("reverseParentheses(\"aaaaaa\")", () => {
    const result = reverseParentheses("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
