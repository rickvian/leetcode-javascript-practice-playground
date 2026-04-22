import { rangeBitwiseAnd } from '../0201-bitwise-and-of-numbers-range.js';

describe('0201-bitwise-and-of-numbers-range', () => {
  it("rangeBitwiseAnd(1, 1)", () => {
    const result = rangeBitwiseAnd(1, 1);
    expect(result).toEqual(1);
  });

  it("rangeBitwiseAnd(0, 0)", () => {
    const result = rangeBitwiseAnd(0, 0);
    expect(result).toEqual(0);
  });

  it("rangeBitwiseAnd(3, 7)", () => {
    const result = rangeBitwiseAnd(3, 7);
    expect(result).toEqual(0);
  });

  it("rangeBitwiseAnd(100, 1000)", () => {
    const result = rangeBitwiseAnd(100, 1000);
    expect(result).toEqual(0);
  });
});
