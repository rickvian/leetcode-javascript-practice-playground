import { countBits } from '../0338-counting-bits.js';

describe('0338-counting-bits', () => {
  it("countBits(0)", () => {
    const result = countBits(0);
    expect(result).toEqual([0]);
  });

  it("countBits(1)", () => {
    const result = countBits(1);
    expect(result).toEqual([0, 1]);
  });

  it("countBits(2)", () => {
    const result = countBits(2);
    expect(result).toEqual([0, 1, 1]);
  });

  it("countBits(5)", () => {
    const result = countBits(5);
    expect(result).toEqual([0, 1, 1, 2, 1, 2]);
  });

  it("countBits(10)", () => {
    const result = countBits(10);
    expect(result).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
  });

  it("countBits(16)", () => {
    const result = countBits(16);
    expect(result).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1]);
  });
});
