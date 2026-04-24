import { reformat } from '../1417-reformat-the-string.js';

describe('1417-reformat-the-string', () => {
  it("reformat(\"abcabcbb\")", () => {
    const result = reformat("abcabcbb");
    expect(result).toEqual("");
  });

  it("reformat(\"bbbbb\")", () => {
    const result = reformat("bbbbb");
    expect(result).toEqual("");
  });

  it("reformat(\"pwwkew\")", () => {
    const result = reformat("pwwkew");
    expect(result).toEqual("");
  });

  it("reformat(\"\")", () => {
    const result = reformat("");
    expect(result).toEqual("");
  });

  it("reformat(\" \")", () => {
    const result = reformat(" ");
    expect(result).toEqual(" ");
  });

  it("reformat(\"a\")", () => {
    const result = reformat("a");
    expect(result).toEqual("a");
  });

  it("reformat(\"aaaaaa\")", () => {
    const result = reformat("aaaaaa");
    expect(result).toEqual("");
  });
});
