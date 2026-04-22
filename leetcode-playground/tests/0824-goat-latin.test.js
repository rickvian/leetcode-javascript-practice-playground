import { toGoatLatin } from '../0824-goat-latin.js';

describe('0824-goat-latin', () => {
  it("toGoatLatin(\"abcabcbb\")", () => {
    const result = toGoatLatin("abcabcbb");
    expect(result).toEqual("abcabcbbmaa");
  });

  it("toGoatLatin(\"bbbbb\")", () => {
    const result = toGoatLatin("bbbbb");
    expect(result).toEqual("bbbbbmaa");
  });

  it("toGoatLatin(\"pwwkew\")", () => {
    const result = toGoatLatin("pwwkew");
    expect(result).toEqual("wwkewpmaa");
  });

  it("toGoatLatin(\"\")", () => {
    const result = toGoatLatin("");
    expect(result).toEqual("maa");
  });

  it("toGoatLatin(\" \")", () => {
    const result = toGoatLatin(" ");
    expect(result).toEqual("maa maaa");
  });

  it("toGoatLatin(\"a\")", () => {
    const result = toGoatLatin("a");
    expect(result).toEqual("amaa");
  });

  it("toGoatLatin(\"aaaaaa\")", () => {
    const result = toGoatLatin("aaaaaa");
    expect(result).toEqual("aaaaaamaa");
  });
});
