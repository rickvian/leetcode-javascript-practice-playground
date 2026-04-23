import { expand } from '../1087-brace-expansion.js';

describe('1087-brace-expansion', () => {
  it("expand(\"abcabcbb\")", () => {
    const result = expand("abcabcbb");
    expect(result).toEqual(["abcabcbb"]);
  });

  it("expand(\"bbbbb\")", () => {
    const result = expand("bbbbb");
    expect(result).toEqual(["bbbbb"]);
  });

  it("expand(\"pwwkew\")", () => {
    const result = expand("pwwkew");
    expect(result).toEqual(["pwwkew"]);
  });

  it("expand(\"\")", () => {
    const result = expand("");
    expect(result).toEqual([""]);
  });

  it("expand(\" \")", () => {
    const result = expand(" ");
    expect(result).toEqual([" "]);
  });

  it("expand(\"a\")", () => {
    const result = expand("a");
    expect(result).toEqual(["a"]);
  });

  it("expand(\"aaaaaa\")", () => {
    const result = expand("aaaaaa");
    expect(result).toEqual(["aaaaaa"]);
  });
});
