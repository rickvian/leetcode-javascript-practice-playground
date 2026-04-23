import { minKBitFlips } from '../0995-minimum-number-of-k-consecutive-bit-flips.js';

describe('0995-minimum-number-of-k-consecutive-bit-flips', () => {
  it("minKBitFlips([2, 7, 11, 15], 9)", () => {
    const result = minKBitFlips([2, 7, 11, 15], 9);
    expect(result).toEqual(-1);
  });

  it("minKBitFlips([3, 2, 4], 6)", () => {
    const result = minKBitFlips([3, 2, 4], 6);
    expect(result).toEqual(-1);
  });

  it("minKBitFlips([3, 3], 6)", () => {
    const result = minKBitFlips([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("minKBitFlips([-1, -2, -3, -4, -5], -8)", () => {
    const result = minKBitFlips([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(4);
  });

  it("minKBitFlips([1, 2], 3)", () => {
    const result = minKBitFlips([1, 2], 3);
    expect(result).toEqual(-1);
  });

  it("minKBitFlips([0, 4, 3, 0], 0)", () => {
    const result = minKBitFlips([0, 4, 3, 0], 0);
    expect(result).toEqual(3);
  });
});
