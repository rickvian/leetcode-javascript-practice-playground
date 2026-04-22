import { decodeString } from '../0394-decode-string.js';

describe('0394-decode-string', () => {
  it("decodeString(\"abcabcbb\")", () => {
    const result = decodeString("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("decodeString(\"bbbbb\")", () => {
    const result = decodeString("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("decodeString(\"pwwkew\")", () => {
    const result = decodeString("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("decodeString(\"\")", () => {
    const result = decodeString("");
    expect(result).toEqual("");
  });

  it("decodeString(\" \")", () => {
    const result = decodeString(" ");
    expect(result).toEqual("");
  });

  it("decodeString(\"a\")", () => {
    const result = decodeString("a");
    expect(result).toEqual("a");
  });

  it("decodeString(\"aaaaaa\")", () => {
    const result = decodeString("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
