import { findNumOfValidWords } from '../1178-number-of-valid-words-for-each-puzzle.js';

describe('1178-number-of-valid-words-for-each-puzzle', () => {
  it("findNumOfValidWords([\"aaaa\", \"asas\", \"able\", \"ability\", \"actt\", \"actor\", \"access\"], [\"aboveyz\", \"abrodyz\", \"abslute\", \"absoryz\", \"actresz\", \"gaswxyz\"])", () => {
    const result = findNumOfValidWords(["aaaa", "asas", "able", "ability", "actt", "actor", "access"], ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"]);
    expect(result).toEqual([1, 1, 3, 2, 4, 0]);
  });

  it("findNumOfValidWords([\"apple\", \"pleas\", \"please\"], [\"aelps\", \"aelpz\", \"aelpsz\"])", () => {
    const result = findNumOfValidWords(["apple", "pleas", "please"], ["aelps", "aelpz", "aelpsz"]);
    expect(result).toEqual([3, 1, 3]);
  });

  it("findNumOfValidWords([], [\"abcdefg\"])", () => {
    const result = findNumOfValidWords([], ["abcdefg"]);
    expect(result).toEqual([0]);
  });

  it("findNumOfValidWords([\"a\", \"b\", \"c\"], [\"abc\", \"def\"])", () => {
    const result = findNumOfValidWords(["a", "b", "c"], ["abc", "def"]);
    expect(result).toEqual([1, 0]);
  });

  it("findNumOfValidWords([\"hello\", \"world\"], [\"helo\", \"wrd\"])", () => {
    const result = findNumOfValidWords(["hello", "world"], ["helo", "wrd"]);
    expect(result).toEqual([1, 0]);
  });
});
