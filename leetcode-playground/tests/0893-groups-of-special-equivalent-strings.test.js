import { numSpecialEquivGroups } from '../0893-groups-of-special-equivalent-strings.js';

describe('0893-groups-of-special-equivalent-strings', () => {
  it("numSpecialEquivGroups([\"flower\", \"flow\", \"flight\"])", () => {
    const result = numSpecialEquivGroups(["flower", "flow", "flight"]);
    expect(result).toEqual(3);
  });

  it("numSpecialEquivGroups([\"a\", \"b\", \"c\"])", () => {
    const result = numSpecialEquivGroups(["a", "b", "c"]);
    expect(result).toEqual(3);
  });

  it("numSpecialEquivGroups([])", () => {
    const result = numSpecialEquivGroups([]);
    expect(result).toEqual(0);
  });

  it("numSpecialEquivGroups([\"\"])", () => {
    const result = numSpecialEquivGroups([""]);
    expect(result).toEqual(1);
  });

  it("numSpecialEquivGroups([\"ab\", \"a\", \"abc\"])", () => {
    const result = numSpecialEquivGroups(["ab", "a", "abc"]);
    expect(result).toEqual(3);
  });
});
