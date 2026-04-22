import { parseTernary } from '../0439-ternary-expression-parser.js';

describe('0439-ternary-expression-parser', () => {
  it("parseTernary(\"abcabcbb\")", () => {
    const result = parseTernary("abcabcbb");
    expect(result).toEqual("b");
  });

  it("parseTernary(\"bbbbb\")", () => {
    const result = parseTernary("bbbbb");
    expect(result).toEqual("b");
  });

  it("parseTernary(\"pwwkew\")", () => {
    const result = parseTernary("pwwkew");
    expect(result).toEqual("w");
  });

  it("parseTernary(\" \")", () => {
    const result = parseTernary(" ");
    expect(result).toEqual(" ");
  });

  it("parseTernary(\"a\")", () => {
    const result = parseTernary("a");
    expect(result).toEqual("a");
  });

  it("parseTernary(\"aaaaaa\")", () => {
    const result = parseTernary("aaaaaa");
    expect(result).toEqual("a");
  });
});
