import { strobogrammaticInRange } from '../0248-strobogrammatic-number-iii.js';

describe('0248-strobogrammatic-number-iii', () => {
  it("strobogrammaticInRange(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = strobogrammaticInRange("ADOBECODEBANC", "ABC");
    expect(result).toEqual(0);
  });

  it("strobogrammaticInRange(\"a\", \"a\")", () => {
    const result = strobogrammaticInRange("a", "a");
    expect(result).toEqual(0);
  });

  it("strobogrammaticInRange(\"a\", \"aa\")", () => {
    const result = strobogrammaticInRange("a", "aa");
    expect(result).toEqual(4);
  });

  it("strobogrammaticInRange(\"\", \"A\")", () => {
    const result = strobogrammaticInRange("", "A");
    expect(result).toEqual(4);
  });
});
