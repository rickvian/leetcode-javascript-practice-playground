import { stringMatching } from '../1408-string-matching-in-an-array.js';

describe('1408-string-matching-in-an-array', () => {
  it("stringMatching([\"flower\", \"flow\", \"flight\"])", () => {
    const result = stringMatching(["flower", "flow", "flight"]);
    expect(result).toEqual(["flow"]);
  });

  it("stringMatching([\"a\", \"b\", \"c\"])", () => {
    const result = stringMatching(["a", "b", "c"]);
    expect(result).toEqual([]);
  });

  it("stringMatching([])", () => {
    const result = stringMatching([]);
    expect(result).toEqual([]);
  });

  it("stringMatching([\"\"])", () => {
    const result = stringMatching([""]);
    expect(result).toEqual([]);
  });

  it("stringMatching([\"ab\", \"a\", \"abc\"])", () => {
    const result = stringMatching(["ab", "a", "abc"]);
    expect(result).toEqual(["ab", "a"]);
  });
});
