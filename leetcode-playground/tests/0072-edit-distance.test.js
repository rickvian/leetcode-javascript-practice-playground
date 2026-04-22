import { minDistance } from '../0072-edit-distance.js';

describe('0072-edit-distance', () => {
  it("minDistance(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = minDistance("ADOBECODEBANC", "ABC");
    expect(result).toEqual(10);
  });

  it("minDistance(\"a\", \"a\")", () => {
    const result = minDistance("a", "a");
    expect(result).toEqual(0);
  });

  it("minDistance(\"a\", \"aa\")", () => {
    const result = minDistance("a", "aa");
    expect(result).toEqual(1);
  });

  it("minDistance(\"\", \"A\")", () => {
    const result = minDistance("", "A");
    expect(result).toEqual(1);
  });
});
