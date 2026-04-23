import { pathsWithMaxScore } from '../1301-number-of-paths-with-max-score.js';

describe('1301-number-of-paths-with-max-score', () => {
  it("pathsWithMaxScore([\"flower\", \"flow\", \"flight\"])", () => {
    const result = pathsWithMaxScore(["flower", "flow", "flight"]);
    expect(result).toEqual([0, 0]);
  });

  it("pathsWithMaxScore([\"a\", \"b\", \"c\"])", () => {
    const result = pathsWithMaxScore(["a", "b", "c"]);
    expect(result).toEqual([0, 0]);
  });

  it("pathsWithMaxScore([\"\"])", () => {
    const result = pathsWithMaxScore([""]);
    expect(result).toEqual([0, 1]);
  });

  it("pathsWithMaxScore([\"ab\", \"a\", \"abc\"])", () => {
    const result = pathsWithMaxScore(["ab", "a", "abc"]);
    expect(result).toEqual([0, 0]);
  });
});
