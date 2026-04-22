import { isSubsequence } from '../0392-is-subsequence.js';

describe('0392-is-subsequence', () => {
  it("isSubsequence(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = isSubsequence("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("isSubsequence(\"a\", \"a\")", () => {
    const result = isSubsequence("a", "a");
    expect(result).toEqual(true);
  });

  it("isSubsequence(\"a\", \"aa\")", () => {
    const result = isSubsequence("a", "aa");
    expect(result).toEqual(true);
  });

  it("isSubsequence(\"\", \"A\")", () => {
    const result = isSubsequence("", "A");
    expect(result).toEqual(true);
  });
});
