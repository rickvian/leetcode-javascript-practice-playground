import { getMaxRepetitions } from '../0466-count-the-repetitions.js';

describe('0466-count-the-repetitions', () => {
  it("getMaxRepetitions(\"acb\", 4...)", () => {
    const result = getMaxRepetitions("acb", 4, "ab", 2);
    expect(result).toEqual(2);
  });

  it("getMaxRepetitions(\"a\", 1...)", () => {
    const result = getMaxRepetitions("a", 1, "b", 1);
    expect(result).toEqual(0);
  });

  it("getMaxRepetitions(\"abc\", 3...)", () => {
    const result = getMaxRepetitions("abc", 3, "abc", 1);
    expect(result).toEqual(3);
  });

  it("getMaxRepetitions(\"aaa\", 3...)", () => {
    const result = getMaxRepetitions("aaa", 3, "aa", 1);
    expect(result).toEqual(4);
  });

  it("getMaxRepetitions(\"a\", 2...)", () => {
    const result = getMaxRepetitions("a", 2, "a", 2);
    expect(result).toEqual(1);
  });
});
