import { groupStrings } from '../0249-group-shifted-strings.js';

describe('0249-group-shifted-strings', () => {
  it("groupStrings([\"flower\", \"flow\", \"flight\"])", () => {
    const result = groupStrings(["flower", "flow", "flight"]);
    expect(result).toEqual([["flower"], ["flow"], ["flight"]]);
  });

  it("groupStrings([\"a\", \"b\", \"c\"])", () => {
    const result = groupStrings(["a", "b", "c"]);
    expect(result).toEqual([["a", "b", "c"]]);
  });

  it("groupStrings([])", () => {
    const result = groupStrings([]);
    expect(result).toEqual([]);
  });

  it("groupStrings([\"\"])", () => {
    const result = groupStrings([""]);
    expect(result).toEqual([[""]]);
  });

  it("groupStrings([\"ab\", \"a\", \"abc\"])", () => {
    const result = groupStrings(["ab", "a", "abc"]);
    expect(result).toEqual([["ab"], ["a"], ["abc"]]);
  });
});
