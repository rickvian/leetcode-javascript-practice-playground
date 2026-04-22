import { findTheDifference } from '../0389-find-the-difference.js';

describe('0389-find-the-difference', () => {
  it("findTheDifference(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = findTheDifference("ADOBECODEBANC", "ABC");
    expect(result).toEqual("A");
  });

  it("findTheDifference(\"a\", \"aa\")", () => {
    const result = findTheDifference("a", "aa");
    expect(result).toEqual("a");
  });

  it("findTheDifference(\"\", \"A\")", () => {
    const result = findTheDifference("", "A");
    expect(result).toEqual("A");
  });
});
