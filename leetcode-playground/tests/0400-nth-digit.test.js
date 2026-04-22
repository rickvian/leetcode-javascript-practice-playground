import { findNthDigit } from '../0400-nth-digit.js';

describe('0400-nth-digit', () => {
  it("findNthDigit(121)", () => {
    const result = findNthDigit(121);
    expect(result).toEqual(5);
  });

  it("findNthDigit(10)", () => {
    const result = findNthDigit(10);
    expect(result).toEqual(1);
  });

  it("findNthDigit(0)", () => {
    const result = findNthDigit(0);
    expect(result).toEqual(0);
  });

  it("findNthDigit(1534236469)", () => {
    const result = findNthDigit(1534236469);
    expect(result).toEqual(3);
  });
});
