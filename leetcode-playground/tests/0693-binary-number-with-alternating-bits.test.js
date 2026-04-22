import { hasAlternatingBits } from '../0693-binary-number-with-alternating-bits.js';

describe('0693-binary-number-with-alternating-bits', () => {
  it("hasAlternatingBits(121)", () => {
    const result = hasAlternatingBits(121);
    expect(result).toEqual(false);
  });

  it("hasAlternatingBits(-121)", () => {
    const result = hasAlternatingBits(-121);
    expect(result).toEqual(false);
  });

  it("hasAlternatingBits(10)", () => {
    const result = hasAlternatingBits(10);
    expect(result).toEqual(true);
  });

  it("hasAlternatingBits(0)", () => {
    const result = hasAlternatingBits(0);
    expect(result).toEqual(true);
  });

  it("hasAlternatingBits(-1)", () => {
    const result = hasAlternatingBits(-1);
    expect(result).toEqual(true);
  });

  it("hasAlternatingBits(1534236469)", () => {
    const result = hasAlternatingBits(1534236469);
    expect(result).toEqual(false);
  });
});
