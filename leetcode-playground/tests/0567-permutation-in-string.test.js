import { checkInclusion } from '../0567-permutation-in-string.js';

describe('0567-permutation-in-string', () => {
  it("checkInclusion(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = checkInclusion("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("checkInclusion(\"a\", \"a\")", () => {
    const result = checkInclusion("a", "a");
    expect(result).toEqual(true);
  });

  it("checkInclusion(\"a\", \"aa\")", () => {
    const result = checkInclusion("a", "aa");
    expect(result).toEqual(true);
  });

  it("checkInclusion(\"\", \"A\")", () => {
    const result = checkInclusion("", "A");
    expect(result).toEqual(true);
  });
});
