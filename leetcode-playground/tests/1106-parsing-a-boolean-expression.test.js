import { parseBoolExpr } from '../1106-parsing-a-boolean-expression.js';

describe('1106-parsing-a-boolean-expression', () => {
  it("parseBoolExpr(\"abcabcbb\")", () => {
    const result = parseBoolExpr("abcabcbb");
    expect(result).toEqual("a");
  });

  it("parseBoolExpr(\"bbbbb\")", () => {
    const result = parseBoolExpr("bbbbb");
    expect(result).toEqual("b");
  });

  it("parseBoolExpr(\"pwwkew\")", () => {
    const result = parseBoolExpr("pwwkew");
    expect(result).toEqual("p");
  });

  it("parseBoolExpr(\" \")", () => {
    const result = parseBoolExpr(" ");
    expect(result).toEqual(" ");
  });

  it("parseBoolExpr(\"a\")", () => {
    const result = parseBoolExpr("a");
    expect(result).toEqual("a");
  });

  it("parseBoolExpr(\"aaaaaa\")", () => {
    const result = parseBoolExpr("aaaaaa");
    expect(result).toEqual("a");
  });
});
