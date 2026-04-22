import { splitLoopedString } from '../0555-split-concatenated-strings.js';

describe('0555-split-concatenated-strings', () => {
  it("splitLoopedString([\"flower\", \"flow\", \"flight\"])", () => {
    const result = splitLoopedString(["flower", "flow", "flight"]);
    expect(result).toEqual("wthgilfrewolfflo");
  });

  it("splitLoopedString([\"a\", \"b\", \"c\"])", () => {
    const result = splitLoopedString(["a", "b", "c"]);
    expect(result).toEqual("cab");
  });

  it("splitLoopedString([])", () => {
    const result = splitLoopedString([]);
    expect(result).toEqual("");
  });

  it("splitLoopedString([\"\"])", () => {
    const result = splitLoopedString([""]);
    expect(result).toEqual("");
  });

  it("splitLoopedString([\"ab\", \"a\", \"abc\"])", () => {
    const result = splitLoopedString(["ab", "a", "abc"]);
    expect(result).toEqual("cbabaa");
  });
});
