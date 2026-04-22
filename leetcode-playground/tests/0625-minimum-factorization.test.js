import { smallestFactorization } from '../0625-minimum-factorization.js';

describe('0625-minimum-factorization', () => {
  it("smallestFactorization(121)", () => {
    const result = smallestFactorization(121);
    expect(result).toEqual(0);
  });

  it("smallestFactorization(-121)", () => {
    const result = smallestFactorization(-121);
    expect(result).toEqual(-121);
  });

  it("smallestFactorization(10)", () => {
    const result = smallestFactorization(10);
    expect(result).toEqual(25);
  });

  it("smallestFactorization(0)", () => {
    const result = smallestFactorization(0);
    expect(result).toEqual(0);
  });

  it("smallestFactorization(-1)", () => {
    const result = smallestFactorization(-1);
    expect(result).toEqual(-1);
  });

  it("smallestFactorization(1534236469)", () => {
    const result = smallestFactorization(1534236469);
    expect(result).toEqual(0);
  });
});
