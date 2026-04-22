import { validWordSquare } from '../0422-valid-word-square.js';

describe('0422-valid-word-square', () => {
  it("validWordSquare([\"flower\", \"flow\", \"flight\"])", () => {
    const result = validWordSquare(["flower", "flow", "flight"]);
    expect(result).toEqual(false);
  });

  it("validWordSquare([\"a\", \"b\", \"c\"])", () => {
    const result = validWordSquare(["a", "b", "c"]);
    expect(result).toEqual(false);
  });

  it("validWordSquare([])", () => {
    const result = validWordSquare([]);
    expect(result).toEqual(true);
  });

  it("validWordSquare([\"\"])", () => {
    const result = validWordSquare([""]);
    expect(result).toEqual(true);
  });

  it("validWordSquare([\"ab\", \"a\", \"abc\"])", () => {
    const result = validWordSquare(["ab", "a", "abc"]);
    expect(result).toEqual(false);
  });
});
