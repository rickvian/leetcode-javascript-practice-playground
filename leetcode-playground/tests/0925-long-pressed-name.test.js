import { isLongPressedName } from '../0925-long-pressed-name.js';

describe('0925-long-pressed-name', () => {
  it("isLongPressedName(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = isLongPressedName("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("isLongPressedName(\"a\", \"a\")", () => {
    const result = isLongPressedName("a", "a");
    expect(result).toEqual(true);
  });

  it("isLongPressedName(\"a\", \"aa\")", () => {
    const result = isLongPressedName("a", "aa");
    expect(result).toEqual(true);
  });

  it("isLongPressedName(\"\", \"A\")", () => {
    const result = isLongPressedName("", "A");
    expect(result).toEqual(true);
  });
});
