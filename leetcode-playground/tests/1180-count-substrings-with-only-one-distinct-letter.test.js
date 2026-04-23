import { countLetters } from '../1180-count-substrings-with-only-one-distinct-letter.js';

describe('1180-count-substrings-with-only-one-distinct-letter', () => {
  it("countLetters(\"abcabcbb\")", () => {
    const result = countLetters("abcabcbb");
    expect(result).toEqual(9);
  });

  it("countLetters(\"bbbbb\")", () => {
    const result = countLetters("bbbbb");
    expect(result).toEqual(15);
  });

  it("countLetters(\"pwwkew\")", () => {
    const result = countLetters("pwwkew");
    expect(result).toEqual(7);
  });

  it("countLetters(\"\")", () => {
    const result = countLetters("");
    expect(result).toEqual(1);
  });

  it("countLetters(\" \")", () => {
    const result = countLetters(" ");
    expect(result).toEqual(1);
  });

  it("countLetters(\"a\")", () => {
    const result = countLetters("a");
    expect(result).toEqual(1);
  });

  it("countLetters(\"aaaaaa\")", () => {
    const result = countLetters("aaaaaa");
    expect(result).toEqual(21);
  });
});
