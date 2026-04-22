import { validWordAbbreviation } from '../0408-valid-word-abbreviation.js';

describe('0408-valid-word-abbreviation', () => {
  it("validWordAbbreviation(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = validWordAbbreviation("ADOBECODEBANC", "ABC");
    expect(result).toEqual(false);
  });

  it("validWordAbbreviation(\"a\", \"a\")", () => {
    const result = validWordAbbreviation("a", "a");
    expect(result).toEqual(true);
  });

  it("validWordAbbreviation(\"a\", \"aa\")", () => {
    const result = validWordAbbreviation("a", "aa");
    expect(result).toEqual(false);
  });

  it("validWordAbbreviation(\"\", \"A\")", () => {
    const result = validWordAbbreviation("", "A");
    expect(result).toEqual(false);
  });
});
