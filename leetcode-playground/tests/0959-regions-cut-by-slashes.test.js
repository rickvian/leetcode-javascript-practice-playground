import { regionsBySlashes } from '../0959-regions-cut-by-slashes.js';

describe('0959-regions-cut-by-slashes', () => {
  it("regionsBySlashes([\"flower\", \"flow\", \"flight\"])", () => {
    const result = regionsBySlashes(["flower", "flow", "flight"]);
    expect(result).toEqual(1);
  });

  it("regionsBySlashes([\"a\", \"b\", \"c\"])", () => {
    const result = regionsBySlashes(["a", "b", "c"]);
    expect(result).toEqual(1);
  });

  it("regionsBySlashes([])", () => {
    const result = regionsBySlashes([]);
    expect(result).toEqual(0);
  });

  it("regionsBySlashes([\"\"])", () => {
    const result = regionsBySlashes([""]);
    expect(result).toEqual(1);
  });

  it("regionsBySlashes([\"ab\", \"a\", \"abc\"])", () => {
    const result = regionsBySlashes(["ab", "a", "abc"]);
    expect(result).toEqual(1);
  });
});
