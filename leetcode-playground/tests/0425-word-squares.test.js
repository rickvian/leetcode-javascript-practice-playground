import { wordSquares } from '../0425-word-squares.js';

describe('0425-word-squares', () => {
  it("wordSquares([\"flower\", \"flow\", \"flight\"])", () => {
    const result = wordSquares(["flower", "flow", "flight"]);
    expect(result).toEqual([]);
  });

  it("wordSquares([\"a\", \"b\", \"c\"])", () => {
    const result = wordSquares(["a", "b", "c"]);
    expect(result).toEqual([["a"], ["b"], ["c"]]);
  });

  it("wordSquares([\"\"])", () => {
    const result = wordSquares([""]);
    expect(result).toEqual([]);
  });

  it("wordSquares([\"ab\", \"a\", \"abc\"])", () => {
    const result = wordSquares(["ab", "a", "abc"]);
    expect(result).toEqual([["a", "ab"], ["a", "a"], ["a", "abc"]]);
  });
});
