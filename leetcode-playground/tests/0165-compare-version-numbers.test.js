import { compareVersion } from '../0165-compare-version-numbers.js';

describe('0165-compare-version-numbers', () => {
  it("compareVersion(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = compareVersion("ADOBECODEBANC", "ABC");
    expect(result).toEqual(0);
  });

  it("compareVersion(\"a\", \"a\")", () => {
    const result = compareVersion("a", "a");
    expect(result).toEqual(0);
  });

  it("compareVersion(\"a\", \"aa\")", () => {
    const result = compareVersion("a", "aa");
    expect(result).toEqual(0);
  });

  it("compareVersion(\"\", \"A\")", () => {
    const result = compareVersion("", "A");
    expect(result).toEqual(0);
  });
});
