import { spellchecker } from '../0966-vowel-spellchecker.js';

describe('0966-vowel-spellchecker', () => {
  it("spellchecker([\"KiTe\", \"KiTtY\", \"hELLo\"], [\"kite\", \"kitty\", \"hello\", \"kite\"])", () => {
    const result = spellchecker(["KiTe", "KiTtY", "hELLo"], ["kite", "kitty", "hello", "kite"]);
    expect(result).toEqual(["KiTe", "KiTtY", "hELLo", "KiTe"]);
  });

  it("spellchecker([\"yellow\"], [\"YellOw\", \"yolow\", \"yello\", \"yells\"])", () => {
    const result = spellchecker(["yellow"], ["YellOw", "yolow", "yello", "yells"]);
    expect(result).toEqual(["yellow", "", "", ""]);
  });

  it("spellchecker([\"ae\", \"aa\"], [\"Ae\", \"aE\", \"ae\"])", () => {
    const result = spellchecker(["ae", "aa"], ["Ae", "aE", "ae"]);
    expect(result).toEqual(["ae", "ae", "ae"]);
  });

  it("spellchecker([\"word\"], [\"word\", \"Word\", \"wOrd\"])", () => {
    const result = spellchecker(["word"], ["word", "Word", "wOrd"]);
    expect(result).toEqual(["word", "word", "word"]);
  });

  it("spellchecker([\"a\"], [\"a\", \"A\", \"b\"])", () => {
    const result = spellchecker(["a"], ["a", "A", "b"]);
    expect(result).toEqual(["a", "a", ""]);
  });

  it("spellchecker([], [\"hello\"])", () => {
    const result = spellchecker([], ["hello"]);
    expect(result).toEqual([""]);
  });
});
