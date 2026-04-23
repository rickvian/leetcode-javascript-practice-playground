import { smallestRepunitDivByK } from '../1015-smallest-integer-divisible-by-k.js';

describe('1015-smallest-integer-divisible-by-k', () => {
  it("smallestRepunitDivByK(121)", () => {
    const result = smallestRepunitDivByK(121);
    expect(result).toEqual(22);
  });

  it("smallestRepunitDivByK(-121)", () => {
    const result = smallestRepunitDivByK(-121);
    expect(result).toEqual(-1);
  });

  it("smallestRepunitDivByK(10)", () => {
    const result = smallestRepunitDivByK(10);
    expect(result).toEqual(-1);
  });

  it("smallestRepunitDivByK(0)", () => {
    const result = smallestRepunitDivByK(0);
    expect(result).toEqual(-1);
  });

  it("smallestRepunitDivByK(-1)", () => {
    const result = smallestRepunitDivByK(-1);
    expect(result).toEqual(-1);
  });

  it("smallestRepunitDivByK(1534236469)", () => {
    const result = smallestRepunitDivByK(1534236469);
    expect(result).toEqual(8207100);
  });
});
