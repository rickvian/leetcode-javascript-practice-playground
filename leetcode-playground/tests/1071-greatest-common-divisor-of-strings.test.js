import { gcdOfStrings } from '../1071-greatest-common-divisor-of-strings.js';

describe('1071-greatest-common-divisor-of-strings', () => {
  it("gcdOfStrings(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = gcdOfStrings("ADOBECODEBANC", "ABC");
    expect(result).toEqual("");
  });

  it("gcdOfStrings(\"a\", \"a\")", () => {
    const result = gcdOfStrings("a", "a");
    expect(result).toEqual("a");
  });

  it("gcdOfStrings(\"a\", \"aa\")", () => {
    const result = gcdOfStrings("a", "aa");
    expect(result).toEqual("a");
  });

  it("gcdOfStrings(\"\", \"A\")", () => {
    const result = gcdOfStrings("", "A");
    expect(result).toEqual("");
  });
});
