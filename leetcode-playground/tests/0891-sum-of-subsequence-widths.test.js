import { sumSubseqWidths } from '../0891-sum-of-subsequence-widths.js';

describe('0891-sum-of-subsequence-widths', () => {
  it("sumSubseqWidths([1, 2, 3, 4, 5])", () => {
    const result = sumSubseqWidths([1, 2, 3, 4, 5]);
    expect(result).toEqual(72);
  });

  it("sumSubseqWidths([])", () => {
    const result = sumSubseqWidths([]);
    expect(result).toEqual(0);
  });

  it("sumSubseqWidths([1])", () => {
    const result = sumSubseqWidths([1]);
    expect(result).toEqual(0);
  });

  it("sumSubseqWidths([1, 1])", () => {
    const result = sumSubseqWidths([1, 1]);
    expect(result).toEqual(0);
  });

  it("sumSubseqWidths([3, 1, 4, 1, 5])", () => {
    const result = sumSubseqWidths([3, 1, 4, 1, 5]);
    expect(result).toEqual(78);
  });

  it("sumSubseqWidths([-1, 0, 1])", () => {
    const result = sumSubseqWidths([-1, 0, 1]);
    expect(result).toEqual(-1000000001);
  });
});
