import { longestWord } from '../0720-longest-word-in-dictionary.js';

describe('0720-longest-word-in-dictionary', () => {
  it("longestWord([\"flower\", \"flow\", \"flight\"])", () => {
    const result = longestWord(["flower", "flow", "flight"]);
    expect(result).toEqual("");
  });

  it("longestWord([\"a\", \"b\", \"c\"])", () => {
    const result = longestWord(["a", "b", "c"]);
    expect(result).toEqual("a");
  });

  it("longestWord([])", () => {
    const result = longestWord([]);
    expect(result).toEqual("");
  });

  it("longestWord([\"\"])", () => {
    const result = longestWord([""]);
    expect(result).toEqual("");
  });

  it("longestWord([\"ab\", \"a\", \"abc\"])", () => {
    const result = longestWord(["ab", "a", "abc"]);
    expect(result).toEqual("abc");
  });
});
