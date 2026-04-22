import { uncommonFromSentences } from '../0884-uncommon-words-from-two-sentences.js';

describe('0884-uncommon-words-from-two-sentences', () => {
  it("uncommonFromSentences(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = uncommonFromSentences("ADOBECODEBANC", "ABC");
    expect(result).toEqual(["ADOBECODEBANC", "ABC"]);
  });

  it("uncommonFromSentences(\"a\", \"a\")", () => {
    const result = uncommonFromSentences("a", "a");
    expect(result).toEqual([]);
  });

  it("uncommonFromSentences(\"a\", \"aa\")", () => {
    const result = uncommonFromSentences("a", "aa");
    expect(result).toEqual(["a", "aa"]);
  });

  it("uncommonFromSentences(\"\", \"A\")", () => {
    const result = uncommonFromSentences("", "A");
    expect(result).toEqual(["", "A"]);
  });
});
