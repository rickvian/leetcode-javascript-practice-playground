import { commonChars } from '../1002-find-common-characters.js';

describe('1002-find-common-characters', () => {
  it("commonChars([\"flower\", \"flow\", \"flight\"])", () => {
    const result = commonChars(["flower", "flow", "flight"]);
    expect(result).toEqual(["f", "l"]);
  });

  it("commonChars([\"a\", \"b\", \"c\"])", () => {
    const result = commonChars(["a", "b", "c"]);
    expect(result).toEqual([]);
  });

  it("commonChars([\"\"])", () => {
    const result = commonChars([""]);
    expect(result).toEqual([]);
  });

  it("commonChars([\"ab\", \"a\", \"abc\"])", () => {
    const result = commonChars(["ab", "a", "abc"]);
    expect(result).toEqual(["a"]);
  });
});
