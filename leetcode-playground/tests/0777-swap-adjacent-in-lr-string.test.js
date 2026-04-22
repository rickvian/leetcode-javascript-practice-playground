import { canTransform } from '../0777-swap-adjacent-in-lr-string.js';

describe('0777-swap-adjacent-in-lr-string', () => {
  it("canTransform(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = canTransform("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("canTransform(\"a\", \"a\")", () => {
    const result = canTransform("a", "a");
    expect(result).toEqual(true);
  });

  it("canTransform(\"a\", \"aa\")", () => {
    const result = canTransform("a", "aa");
    expect(result).toEqual(false);
  });

  it("canTransform(\"\", \"A\")", () => {
    const result = canTransform("", "A");
    expect(result).toEqual(false);
  });
});
