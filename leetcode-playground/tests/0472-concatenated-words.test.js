import { findAllConcatenatedWordsInADict } from '../0472-concatenated-words.js';

describe('0472-concatenated-words', () => {
  it("findAllConcatenatedWordsInADict([\"flower\", \"flow\", \"flight\"])", () => {
    const result = findAllConcatenatedWordsInADict(["flower", "flow", "flight"]);
    expect(result).toEqual([]);
  });

  it("findAllConcatenatedWordsInADict([\"a\", \"b\", \"c\"])", () => {
    const result = findAllConcatenatedWordsInADict(["a", "b", "c"]);
    expect(result).toEqual([]);
  });

  it("findAllConcatenatedWordsInADict([])", () => {
    const result = findAllConcatenatedWordsInADict([]);
    expect(result).toEqual([]);
  });

  it("findAllConcatenatedWordsInADict([\"\"])", () => {
    const result = findAllConcatenatedWordsInADict([""]);
    expect(result).toEqual([]);
  });

  it("findAllConcatenatedWordsInADict([\"ab\", \"a\", \"abc\"])", () => {
    const result = findAllConcatenatedWordsInADict(["ab", "a", "abc"]);
    expect(result).toEqual([]);
  });
});
