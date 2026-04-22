import { findComplement } from '../0476-number-complement.js';

describe('0476-number-complement', () => {
  it("findComplement(121)", () => {
    const result = findComplement(121);
    expect(result).toEqual(6);
  });

  it("findComplement(10)", () => {
    const result = findComplement(10);
    expect(result).toEqual(5);
  });

  it("findComplement(0)", () => {
    const result = findComplement(0);
    expect(result).toEqual(1);
  });

  it("findComplement(1534236469)", () => {
    const result = findComplement(1534236469);
    expect(result).toEqual(613247178);
  });
});
