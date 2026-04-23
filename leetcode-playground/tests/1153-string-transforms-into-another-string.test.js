import { canConvert } from '../1153-string-transforms-into-another-string.js';

describe('1153-string-transforms-into-another-string', () => {
  it("canConvert(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = canConvert("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("canConvert(\"a\", \"a\")", () => {
    const result = canConvert("a", "a");
    expect(result).toEqual(true);
  });

  it("canConvert(\"a\", \"aa\")", () => {
    const result = canConvert("a", "aa");
    expect(result).toEqual(true);
  });

  it("canConvert(\"\", \"A\")", () => {
    const result = canConvert("", "A");
    expect(result).toEqual(true);
  });
});
