import { bitwiseComplement } from '../1009-complement-of-base-10-integer.js';

describe('1009-complement-of-base-10-integer', () => {
  it("bitwiseComplement(121)", () => {
    const result = bitwiseComplement(121);
    expect(result).toEqual(6);
  });

  it("bitwiseComplement(-121)", () => {
    const result = bitwiseComplement(-121);
    expect(result).toEqual(134);
  });

  it("bitwiseComplement(10)", () => {
    const result = bitwiseComplement(10);
    expect(result).toEqual(5);
  });

  it("bitwiseComplement(0)", () => {
    const result = bitwiseComplement(0);
    expect(result).toEqual(1);
  });

  it("bitwiseComplement(-1)", () => {
    const result = bitwiseComplement(-1);
    expect(result).toEqual(2);
  });

  it("bitwiseComplement(1534236469)", () => {
    const result = bitwiseComplement(1534236469);
    expect(result).toEqual(613247178);
  });
});
