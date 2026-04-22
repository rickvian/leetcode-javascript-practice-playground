import { trailingZeroes } from '../0172-factorial-trailing-zeroes.js';

describe('0172-factorial-trailing-zeroes', () => {
  it("trailingZeroes(121)", () => {
    const result = trailingZeroes(121);
    expect(result).toEqual(28);
  });

  it("trailingZeroes(-121)", () => {
    const result = trailingZeroes(-121);
    expect(result).toEqual(0);
  });

  it("trailingZeroes(10)", () => {
    const result = trailingZeroes(10);
    expect(result).toEqual(2);
  });

  it("trailingZeroes(0)", () => {
    const result = trailingZeroes(0);
    expect(result).toEqual(0);
  });

  it("trailingZeroes(-1)", () => {
    const result = trailingZeroes(-1);
    expect(result).toEqual(0);
  });

  it("trailingZeroes(1534236469)", () => {
    const result = trailingZeroes(1534236469);
    expect(result).toEqual(383559111);
  });
});
