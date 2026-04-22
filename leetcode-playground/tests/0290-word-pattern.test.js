import { wordPattern } from '../0290-word-pattern.js';

describe('0290-word-pattern', () => {
  it("wordPattern(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = wordPattern("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("wordPattern(\"a\", \"a\")", () => {
    const result = wordPattern("a", "a");
    expect(result).toEqual(true);
  });

  it("wordPattern(\"a\", \"aa\")", () => {
    const result = wordPattern("a", "aa");
    expect(result).toEqual(true);
  });

  it("wordPattern(\"\", \"A\")", () => {
    const result = wordPattern("", "A");
    expect(result).toEqual(false);
  });
});
