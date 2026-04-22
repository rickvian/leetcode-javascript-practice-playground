import { isScramble } from '../0087-scramble-string.js';

describe('0087-scramble-string', () => {
  it("isScramble(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = isScramble("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("isScramble(\"a\", \"a\")", () => {
    const result = isScramble("a", "a");
    expect(result).toEqual(true);
  });

  it("isScramble(\"a\", \"aa\")", () => {
    const result = isScramble("a", "aa");
    expect(result).toEqual(true);
  });
});
