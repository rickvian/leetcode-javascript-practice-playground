import { isOneEditDistance } from '../0161-one-edit-distance.js';

describe('0161-one-edit-distance', () => {
  it("isOneEditDistance(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = isOneEditDistance("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("isOneEditDistance(\"a\", \"a\")", () => {
    const result = isOneEditDistance("a", "a");
    expect(result).toEqual(false);
  });

  it("isOneEditDistance(\"a\", \"aa\")", () => {
    const result = isOneEditDistance("a", "aa");
    expect(result).toEqual(true);
  });

  it("isOneEditDistance(\"\", \"A\")", () => {
    const result = isOneEditDistance("", "A");
    expect(result).toEqual(true);
  });
});
