import { countVowelPermutation } from '../1220-count-vowels-permutation.js';

describe('1220-count-vowels-permutation', () => {
  it("countVowelPermutation(121)", () => {
    const result = countVowelPermutation(121);
    expect(result).toEqual(986238803);
  });

  it("countVowelPermutation(-121)", () => {
    const result = countVowelPermutation(-121);
    expect(result).toEqual(5);
  });

  it("countVowelPermutation(10)", () => {
    const result = countVowelPermutation(10);
    expect(result).toEqual(1739);
  });

  it("countVowelPermutation(0)", () => {
    const result = countVowelPermutation(0);
    expect(result).toEqual(5);
  });

  it("countVowelPermutation(-1)", () => {
    const result = countVowelPermutation(-1);
    expect(result).toEqual(5);
  });

  it("countVowelPermutation(1534236469)", () => {
    const result = countVowelPermutation(1534236469);
    expect(result).toEqual(312598514);
  });
});
