import { minimumDeleteSum } from '../0712-minimum-ascii-delete-sum-for-two-strings.js';

describe('0712-minimum-ascii-delete-sum-for-two-strings', () => {
  it("minimumDeleteSum(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = minimumDeleteSum("ADOBECODEBANC", "ABC");
    expect(result).toEqual(708);
  });

  it("minimumDeleteSum(\"a\", \"a\")", () => {
    const result = minimumDeleteSum("a", "a");
    expect(result).toEqual(0);
  });

  it("minimumDeleteSum(\"a\", \"aa\")", () => {
    const result = minimumDeleteSum("a", "aa");
    expect(result).toEqual(97);
  });

  it("minimumDeleteSum(\"\", \"A\")", () => {
    const result = minimumDeleteSum("", "A");
    expect(result).toEqual(65);
  });
});
