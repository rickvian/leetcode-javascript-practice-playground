import { numDistinct } from '../0115-distinct-subsequences.js';

describe('0115-distinct-subsequences', () => {
  it("numDistinct(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = numDistinct("ADOBECODEBANC", "ABC");
    expect(result).toEqual(3);
  });

  it("numDistinct(\"a\", \"a\")", () => {
    const result = numDistinct("a", "a");
    expect(result).toEqual(1);
  });

  it("numDistinct(\"a\", \"aa\")", () => {
    const result = numDistinct("a", "aa");
    expect(result).toEqual(0);
  });

  it("numDistinct(\"\", \"A\")", () => {
    const result = numDistinct("", "A");
    expect(result).toEqual(0);
  });
});
