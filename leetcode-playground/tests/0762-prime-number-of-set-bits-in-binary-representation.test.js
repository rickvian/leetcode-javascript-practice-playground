import { countPrimeSetBits } from '../0762-prime-number-of-set-bits-in-binary-representation.js';

describe('0762-prime-number-of-set-bits-in-binary-representation', () => {
  it("countPrimeSetBits(1, 1)", () => {
    const result = countPrimeSetBits(1, 1);
    expect(result).toEqual(0);
  });

  it("countPrimeSetBits(0, 0)", () => {
    const result = countPrimeSetBits(0, 0);
    expect(result).toEqual(0);
  });

  it("countPrimeSetBits(3, 7)", () => {
    const result = countPrimeSetBits(3, 7);
    expect(result).toEqual(4);
  });

  it("countPrimeSetBits(100, 1000)", () => {
    const result = countPrimeSetBits(100, 1000);
    expect(result).toEqual(466);
  });
});
