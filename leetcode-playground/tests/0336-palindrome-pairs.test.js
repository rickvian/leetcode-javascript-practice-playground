import { palindromePairs } from '../0336-palindrome-pairs.js';

describe('0336-palindrome-pairs', () => {
  it("palindromePairs([\"flower\", \"flow\", \"flight\"])", () => {
    const result = palindromePairs(["flower", "flow", "flight"]);
    expect(result).toEqual([]);
  });

  it("palindromePairs([\"a\", \"b\", \"c\"])", () => {
    const result = palindromePairs(["a", "b", "c"]);
    expect(result).toEqual([]);
  });

  it("palindromePairs([])", () => {
    const result = palindromePairs([]);
    expect(result).toEqual([]);
  });

  it("palindromePairs([\"\"])", () => {
    const result = palindromePairs([""]);
    expect(result).toEqual([]);
  });

  it("palindromePairs([\"ab\", \"a\", \"abc\"])", () => {
    const result = palindromePairs(["ab", "a", "abc"]);
    expect(result).toEqual([[0, 1]]);
  });
});
