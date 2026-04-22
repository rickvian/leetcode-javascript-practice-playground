import { isAnagram } from '../0242-valid-anagram.js';

describe('0242-valid-anagram', () => {
  it("isAnagram(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = isAnagram("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("isAnagram(\"a\", \"a\")", () => {
    const result = isAnagram("a", "a");
    expect(result).toEqual(true);
  });

  it("isAnagram(\"a\", \"aa\")", () => {
    const result = isAnagram("a", "aa");
    expect(result).toEqual(false);
  });

  it("isAnagram(\"\", \"A\")", () => {
    const result = isAnagram("", "A");
    expect(result).toEqual(false);
  });
});
