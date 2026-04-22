import { buddyStrings } from '../0859-buddy-strings.js';

describe('0859-buddy-strings', () => {
  it("buddyStrings(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = buddyStrings("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("buddyStrings(\"a\", \"a\")", () => {
    const result = buddyStrings("a", "a");
    expect(result).toEqual(false);
  });

  it("buddyStrings(\"a\", \"aa\")", () => {
    const result = buddyStrings("a", "aa");
    expect(result).toEqual(false);
  });

  it("buddyStrings(\"\", \"A\")", () => {
    const result = buddyStrings("", "A");
    expect(result).toEqual(false);
  });
});
