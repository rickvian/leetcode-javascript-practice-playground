import { encode } from '../0471-encode-string-with-shortest-length.js';

describe('0471-encode-string-with-shortest-length', () => {
  it("encode(\"abcabcbb\")", () => {
    const result = encode("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("encode(\"bbbbb\")", () => {
    const result = encode("bbbbb");
    expect(result).toEqual("5[b]");
  });

  it("encode(\"pwwkew\")", () => {
    const result = encode("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("encode(\" \")", () => {
    const result = encode(" ");
    expect(result).toEqual(" ");
  });

  it("encode(\"a\")", () => {
    const result = encode("a");
    expect(result).toEqual("a");
  });

  it("encode(\"aaaaaa\")", () => {
    const result = encode("aaaaaa");
    expect(result).toEqual("6[a]");
  });
});
