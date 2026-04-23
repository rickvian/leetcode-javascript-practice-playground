import { calculateTime } from '../1165-single-row-keyboard.js';

describe('1165-single-row-keyboard', () => {
  it("calculateTime(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = calculateTime("ADOBECODEBANC", "ABC");
    expect(result).toEqual(14);
  });

  it("calculateTime(\"a\", \"a\")", () => {
    const result = calculateTime("a", "a");
    expect(result).toEqual(0);
  });

  it("calculateTime(\"a\", \"aa\")", () => {
    const result = calculateTime("a", "aa");
    expect(result).toEqual(0);
  });
});
