import { entityParser } from '../1410-html-entity-parser.js';

describe('1410-html-entity-parser', () => {
  it("entityParser(\"abcabcbb\")", () => {
    const result = entityParser("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("entityParser(\"bbbbb\")", () => {
    const result = entityParser("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("entityParser(\"pwwkew\")", () => {
    const result = entityParser("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("entityParser(\"\")", () => {
    const result = entityParser("");
    expect(result).toEqual("");
  });

  it("entityParser(\" \")", () => {
    const result = entityParser(" ");
    expect(result).toEqual(" ");
  });

  it("entityParser(\"a\")", () => {
    const result = entityParser("a");
    expect(result).toEqual("a");
  });

  it("entityParser(\"aaaaaa\")", () => {
    const result = entityParser("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
