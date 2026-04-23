import { shortestCommonSupersequence } from '../1092-shortest-common-supersequence.js';

describe('1092-shortest-common-supersequence', () => {
  it("shortestCommonSupersequence(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = shortestCommonSupersequence("ADOBECODEBANC", "ABC");
    expect(result).toEqual("ADOBECODEBANC");
  });

  it("shortestCommonSupersequence(\"a\", \"a\")", () => {
    const result = shortestCommonSupersequence("a", "a");
    expect(result).toEqual("a");
  });

  it("shortestCommonSupersequence(\"a\", \"aa\")", () => {
    const result = shortestCommonSupersequence("a", "aa");
    expect(result).toEqual("aa");
  });

  it("shortestCommonSupersequence(\"\", \"A\")", () => {
    const result = shortestCommonSupersequence("", "A");
    expect(result).toEqual("A");
  });
});
