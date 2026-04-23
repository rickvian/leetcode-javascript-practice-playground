import { movesToStamp } from '../0936-stamping-the-sequence.js';

describe('0936-stamping-the-sequence', () => {
  it("movesToStamp(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = movesToStamp("ADOBECODEBANC", "ABC");
    expect(result).toEqual([]);
  });

  it("movesToStamp(\"a\", \"a\")", () => {
    const result = movesToStamp("a", "a");
    expect(result).toEqual([0]);
  });

  it("movesToStamp(\"a\", \"aa\")", () => {
    const result = movesToStamp("a", "aa");
    expect(result).toEqual([1, 0]);
  });

  it("movesToStamp(\"\", \"A\")", () => {
    const result = movesToStamp("", "A");
    expect(result).toEqual([]);
  });
});
