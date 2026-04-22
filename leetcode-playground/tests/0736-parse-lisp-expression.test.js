import { evaluate } from '../0736-parse-lisp-expression.js';

describe('0736-parse-lisp-expression', () => {
  it("evaluate(\"abcabcbb\")", () => {
    const result = evaluate("abcabcbb");
    expect(result).toEqual(0);
  });

  it("evaluate(\"bbbbb\")", () => {
    const result = evaluate("bbbbb");
    expect(result).toEqual(0);
  });

  it("evaluate(\"pwwkew\")", () => {
    const result = evaluate("pwwkew");
    expect(result).toEqual(0);
  });

  it("evaluate(\"a\")", () => {
    const result = evaluate("a");
    expect(result).toEqual(0);
  });

  it("evaluate(\"aaaaaa\")", () => {
    const result = evaluate("aaaaaa");
    expect(result).toEqual(0);
  });
});
