import { wordsAbbreviation } from '../0527-word-abbreviation.js';

describe('0527-word-abbreviation', () => {
  it("wordsAbbreviation([\"flower\", \"flow\", \"flight\"])", () => {
    const result = wordsAbbreviation(["flower", "flow", "flight"]);
    expect(result).toEqual(["f4r", "f2w", "f4t"]);
  });

  it("wordsAbbreviation([\"a\", \"b\", \"c\"])", () => {
    const result = wordsAbbreviation(["a", "b", "c"]);
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("wordsAbbreviation([])", () => {
    const result = wordsAbbreviation([]);
    expect(result).toEqual([]);
  });

  it("wordsAbbreviation([\"\"])", () => {
    const result = wordsAbbreviation([""]);
    expect(result).toEqual([""]);
  });

  it("wordsAbbreviation([\"ab\", \"a\", \"abc\"])", () => {
    const result = wordsAbbreviation(["ab", "a", "abc"]);
    expect(result).toEqual(["ab", "a", "abc"]);
  });
});
