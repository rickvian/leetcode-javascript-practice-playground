import { findLUSlength } from '../0521-longest-uncommon-subsequence-i.js';

describe('0521-longest-uncommon-subsequence-i', () => {
  it("findLUSlength(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = findLUSlength("ADOBECODEBANC", "ABC");
    expect(result).toEqual(13);
  });

  it("findLUSlength(\"a\", \"a\")", () => {
    const result = findLUSlength("a", "a");
    expect(result).toEqual(-1);
  });

  it("findLUSlength(\"a\", \"aa\")", () => {
    const result = findLUSlength("a", "aa");
    expect(result).toEqual(2);
  });

  it("findLUSlength(\"\", \"A\")", () => {
    const result = findLUSlength("", "A");
    expect(result).toEqual(1);
  });
});
