import { addStrings } from '../0415-add-strings.js';

describe('0415-add-strings', () => {
  it("addStrings(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = addStrings("ADOBECODEBANC", "ABC");
    expect(result).toEqual("19330323231918");
  });

  it("addStrings(\"a\", \"a\")", () => {
    const result = addStrings("a", "a");
    expect(result).toEqual("8");
  });

  it("addStrings(\"a\", \"aa\")", () => {
    const result = addStrings("a", "aa");
    expect(result).toEqual("88");
  });

  it("addStrings(\"\", \"A\")", () => {
    const result = addStrings("", "A");
    expect(result).toEqual("17");
  });
});
