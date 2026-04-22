import { kSimilarity } from '../0854-k-similar-strings.js';

describe('0854-k-similar-strings', () => {
  it("kSimilarity(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = kSimilarity("ADOBECODEBANC", "ABC");
    expect(result).toEqual(3);
  });

  it("kSimilarity(\"a\", \"a\")", () => {
    const result = kSimilarity("a", "a");
    expect(result).toEqual(0);
  });

  it("kSimilarity(\"a\", \"aa\")", () => {
    const result = kSimilarity("a", "aa");
    expect(result).toEqual(1);
  });

  it("kSimilarity(\"\", \"A\")", () => {
    const result = kSimilarity("", "A");
    expect(result).toEqual(1);
  });
});
