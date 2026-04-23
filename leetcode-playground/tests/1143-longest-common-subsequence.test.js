import { longestCommonSubsequence } from '../1143-longest-common-subsequence.js';

describe('1143-longest-common-subsequence', () => {
  it("longestCommonSubsequence(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = longestCommonSubsequence("ADOBECODEBANC", "ABC");
    expect(result).toEqual(3);
  });

  it("longestCommonSubsequence(\"a\", \"a\")", () => {
    const result = longestCommonSubsequence("a", "a");
    expect(result).toEqual(1);
  });

  it("longestCommonSubsequence(\"a\", \"aa\")", () => {
    const result = longestCommonSubsequence("a", "aa");
    expect(result).toEqual(1);
  });

  it("longestCommonSubsequence(\"\", \"A\")", () => {
    const result = longestCommonSubsequence("", "A");
    expect(result).toEqual(0);
  });
});
