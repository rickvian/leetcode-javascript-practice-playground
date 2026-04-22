import { repeatedStringMatch } from '../0686-repeated-string-match.js';

describe('0686-repeated-string-match', () => {
  it("repeatedStringMatch(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = repeatedStringMatch("ADOBECODEBANC", "ABC");
    expect(result).toEqual(-1);
  });

  it("repeatedStringMatch(\"a\", \"a\")", () => {
    const result = repeatedStringMatch("a", "a");
    expect(result).toEqual(1);
  });

  it("repeatedStringMatch(\"a\", \"aa\")", () => {
    const result = repeatedStringMatch("a", "aa");
    expect(result).toEqual(2);
  });
});
