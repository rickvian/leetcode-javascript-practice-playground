import { superpalindromesInRange } from '../0906-super-palindromes.js';

describe('0906-super-palindromes', () => {
  it("superpalindromesInRange(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = superpalindromesInRange("ADOBECODEBANC", "ABC");
    expect(result).toEqual(0);
  });

  it("superpalindromesInRange(\"a\", \"a\")", () => {
    const result = superpalindromesInRange("a", "a");
    expect(result).toEqual(0);
  });

  it("superpalindromesInRange(\"a\", \"aa\")", () => {
    const result = superpalindromesInRange("a", "aa");
    expect(result).toEqual(0);
  });

  it("superpalindromesInRange(\"\", \"A\")", () => {
    const result = superpalindromesInRange("", "A");
    expect(result).toEqual(69);
  });
});
