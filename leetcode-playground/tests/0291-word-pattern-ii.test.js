import { wordPatternMatch } from '../0291-word-pattern-ii.js';

describe('0291-word-pattern-ii', () => {
  it("wordPatternMatch(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = wordPatternMatch("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("wordPatternMatch(\"a\", \"a\")", () => {
    const result = wordPatternMatch("a", "a");
    expect(result).toEqual(true);
  });

  it("wordPatternMatch(\"a\", \"aa\")", () => {
    const result = wordPatternMatch("a", "aa");
    expect(result).toEqual(true);
  });

  it("wordPatternMatch(\"\", \"A\")", () => {
    const result = wordPatternMatch("", "A");
    expect(result).toEqual(false);
  });
});
