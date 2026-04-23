import { equationsPossible } from '../0990-satisfiability-of-equality-equations.js';

describe('0990-satisfiability-of-equality-equations', () => {
  it("equationsPossible([\"flower\", \"flow\", \"flight\"])", () => {
    const result = equationsPossible(["flower", "flow", "flight"]);
    expect(result).toEqual(true);
  });

  it("equationsPossible([\"a\", \"b\", \"c\"])", () => {
    const result = equationsPossible(["a", "b", "c"]);
    expect(result).toEqual(true);
  });

  it("equationsPossible([])", () => {
    const result = equationsPossible([]);
    expect(result).toEqual(true);
  });

  it("equationsPossible([\"\"])", () => {
    const result = equationsPossible([""]);
    expect(result).toEqual(true);
  });

  it("equationsPossible([\"ab\", \"a\", \"abc\"])", () => {
    const result = equationsPossible(["ab", "a", "abc"]);
    expect(result).toEqual(true);
  });
});
