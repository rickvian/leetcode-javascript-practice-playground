import { findLUSlength } from '../0522-longest-uncommon-subsequence-ii.js';

describe('0522-longest-uncommon-subsequence-ii', () => {
  it("findLUSlength([\"flower\", \"flow\", \"flight\"])", () => {
    const result = findLUSlength(["flower", "flow", "flight"]);
    expect(result).toEqual(6);
  });

  it("findLUSlength([\"a\", \"b\", \"c\"])", () => {
    const result = findLUSlength(["a", "b", "c"]);
    expect(result).toEqual(1);
  });

  it("findLUSlength([])", () => {
    const result = findLUSlength([]);
    expect(result).toEqual(-1);
  });

  it("findLUSlength([\"\"])", () => {
    const result = findLUSlength([""]);
    expect(result).toEqual(0);
  });

  it("findLUSlength([\"ab\", \"a\", \"abc\"])", () => {
    const result = findLUSlength(["ab", "a", "abc"]);
    expect(result).toEqual(3);
  });
});
