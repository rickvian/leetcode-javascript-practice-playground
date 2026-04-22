import { toLowerCase } from '../0709-to-lower-case.js';

describe('0709-to-lower-case', () => {
  it("toLowerCase(\"abcabcbb\")", () => {
    const result = toLowerCase("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("toLowerCase(\"bbbbb\")", () => {
    const result = toLowerCase("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("toLowerCase(\"pwwkew\")", () => {
    const result = toLowerCase("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("toLowerCase(\"\")", () => {
    const result = toLowerCase("");
    expect(result).toEqual("");
  });

  it("toLowerCase(\" \")", () => {
    const result = toLowerCase(" ");
    expect(result).toEqual(" ");
  });

  it("toLowerCase(\"a\")", () => {
    const result = toLowerCase("a");
    expect(result).toEqual("a");
  });

  it("toLowerCase(\"aaaaaa\")", () => {
    const result = toLowerCase("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
