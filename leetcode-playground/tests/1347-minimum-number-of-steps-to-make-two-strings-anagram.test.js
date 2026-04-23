import { minSteps } from '../1347-minimum-number-of-steps-to-make-two-strings-anagram.js';

describe('1347-minimum-number-of-steps-to-make-two-strings-anagram', () => {
  it("minSteps(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = minSteps("ADOBECODEBANC", "ABC");
    expect(result).toEqual(0);
  });

  it("minSteps(\"a\", \"a\")", () => {
    const result = minSteps("a", "a");
    expect(result).toEqual(0);
  });

  it("minSteps(\"a\", \"aa\")", () => {
    const result = minSteps("a", "aa");
    expect(result).toEqual(0);
  });

  it("minSteps(\"\", \"A\")", () => {
    const result = minSteps("", "A");
    expect(result).toEqual(0);
  });
});
