import { numJewelsInStones } from '../0771-jewels-and-stones.js';

describe('0771-jewels-and-stones', () => {
  it("numJewelsInStones(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = numJewelsInStones("ADOBECODEBANC", "ABC");
    expect(result).toEqual(3);
  });

  it("numJewelsInStones(\"a\", \"a\")", () => {
    const result = numJewelsInStones("a", "a");
    expect(result).toEqual(1);
  });

  it("numJewelsInStones(\"a\", \"aa\")", () => {
    const result = numJewelsInStones("a", "aa");
    expect(result).toEqual(2);
  });

  it("numJewelsInStones(\"\", \"A\")", () => {
    const result = numJewelsInStones("", "A");
    expect(result).toEqual(0);
  });
});
