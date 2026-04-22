import { findWords } from '../0212-word-search-ii.js';

describe('0212-word-search-ii', () => {
  it("findWords([[\"o\", \"a\", \"a\", \"n\"], [\"e\", \"t\", \"a\", \"e\"], [\"i\", \"h\", \"k\", \"r\"], [\"i\", \"f\", \"l\", \"v\"]], [\"oath\", \"pea\", \"eat\", \"rain\"])", () => {
    const result = findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], ["oath", "pea", "eat", "rain"]);
    expect(result).toEqual(["oath", "eat"]);
  });

  it("findWords([[\"a\", \"b\"], [\"c\", \"d\"]], [\"abdc\", \"abcd\"])", () => {
    const result = findWords([["a", "b"], ["c", "d"]], ["abdc", "abcd"]);
    expect(result).toEqual(["abdc"]);
  });
});
