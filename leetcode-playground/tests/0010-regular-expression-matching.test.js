import { isMatch } from '../0010-regular-expression-matching.js';

describe('0010-regular-expression-matching', () => {
  it("isMatch(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = isMatch("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("isMatch(\"a\", \"a\")", () => {
    const result = isMatch("a", "a");
    expect(result).toEqual(true);
  });

  it("isMatch(\"a\", \"aa\")", () => {
    const result = isMatch("a", "aa");
    expect(result).toEqual(false);
  });

  it("isMatch(\"\", \"A\")", () => {
    const result = isMatch("", "A");
    expect(result).toEqual(false);
  });
});
