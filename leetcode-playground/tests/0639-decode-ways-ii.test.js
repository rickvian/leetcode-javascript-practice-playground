import { numDecodings } from '../0639-decode-ways-ii.js';

describe('0639-decode-ways-ii', () => {
  it("numDecodings(\"abcabcbb\")", () => {
    const result = numDecodings("abcabcbb");
    expect(result).toEqual(1);
  });

  it("numDecodings(\"bbbbb\")", () => {
    const result = numDecodings("bbbbb");
    expect(result).toEqual(1);
  });

  it("numDecodings(\"pwwkew\")", () => {
    const result = numDecodings("pwwkew");
    expect(result).toEqual(1);
  });

  it("numDecodings(\"\")", () => {
    const result = numDecodings("");
    expect(result).toEqual(1);
  });

  it("numDecodings(\" \")", () => {
    const result = numDecodings(" ");
    expect(result).toEqual(0);
  });

  it("numDecodings(\"a\")", () => {
    const result = numDecodings("a");
    expect(result).toEqual(1);
  });

  it("numDecodings(\"aaaaaa\")", () => {
    const result = numDecodings("aaaaaa");
    expect(result).toEqual(1);
  });
});
