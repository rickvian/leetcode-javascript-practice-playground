import { findWords } from '../0500-keyboard-row.js';

describe('0500-keyboard-row', () => {
  it("findWords([\"flower\", \"flow\", \"flight\"])", () => {
    const result = findWords(["flower", "flow", "flight"]);
    expect(result).toEqual([]);
  });

  it("findWords([\"a\", \"b\", \"c\"])", () => {
    const result = findWords(["a", "b", "c"]);
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("findWords([])", () => {
    const result = findWords([]);
    expect(result).toEqual([]);
  });

  it("findWords([\"\"])", () => {
    const result = findWords([""]);
    expect(result).toEqual([""]);
  });

  it("findWords([\"ab\", \"a\", \"abc\"])", () => {
    const result = findWords(["ab", "a", "abc"]);
    expect(result).toEqual(["a"]);
  });
});
