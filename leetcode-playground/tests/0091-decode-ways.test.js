import { numDecodings } from '../0091-decode-ways.js';

describe('0091-decode-ways', () => {
  it("numDecodings(\"abcabcbb\")", () => {
    const result = numDecodings("abcabcbb");
    expect(result).toEqual(0);
  });

  it("numDecodings(\"bbbbb\")", () => {
    const result = numDecodings("bbbbb");
    expect(result).toEqual(0);
  });

  it("numDecodings(\"pwwkew\")", () => {
    const result = numDecodings("pwwkew");
    expect(result).toEqual(0);
  });

  it("numDecodings(\"\")", () => {
    const result = numDecodings("");
    expect(result).toEqual(0);
  });

  it("numDecodings(\" \")", () => {
    const result = numDecodings(" ");
    expect(result).toEqual(1);
  });

  it("numDecodings(\"a\")", () => {
    const result = numDecodings("a");
    expect(result).toEqual(1);
  });

  it("numDecodings(\"aaaaaa\")", () => {
    const result = numDecodings("aaaaaa");
    expect(result).toEqual(0);
  });
});
