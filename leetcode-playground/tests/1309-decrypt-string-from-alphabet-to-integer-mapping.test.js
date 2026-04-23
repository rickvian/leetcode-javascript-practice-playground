import { freqAlphabets } from '../1309-decrypt-string-from-alphabet-to-integer-mapping.js';

describe('1309-decrypt-string-from-alphabet-to-integer-mapping', () => {
  it("freqAlphabets(\"abcabcbb\")", () => {
    const result = freqAlphabets("abcabcbb");
    expect(result).toEqual("abcabcbb");
  });

  it("freqAlphabets(\"bbbbb\")", () => {
    const result = freqAlphabets("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("freqAlphabets(\"pwwkew\")", () => {
    const result = freqAlphabets("pwwkew");
    expect(result).toEqual("pwwkew");
  });

  it("freqAlphabets(\"\")", () => {
    const result = freqAlphabets("");
    expect(result).toEqual("");
  });

  it("freqAlphabets(\" \")", () => {
    const result = freqAlphabets(" ");
    expect(result).toEqual(" ");
  });

  it("freqAlphabets(\"a\")", () => {
    const result = freqAlphabets("a");
    expect(result).toEqual("a");
  });

  it("freqAlphabets(\"aaaaaa\")", () => {
    const result = freqAlphabets("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
