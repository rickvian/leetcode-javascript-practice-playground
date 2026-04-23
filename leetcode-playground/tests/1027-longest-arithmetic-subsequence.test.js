import { longestArithSeqLength } from '../1027-longest-arithmetic-subsequence.js';

describe('1027-longest-arithmetic-subsequence', () => {
  it("longestArithSeqLength([1, 2, 3, 4, 5])", () => {
    const result = longestArithSeqLength([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("longestArithSeqLength([])", () => {
    const result = longestArithSeqLength([]);
    expect(result).toEqual(2);
  });

  it("longestArithSeqLength([1])", () => {
    const result = longestArithSeqLength([1]);
    expect(result).toEqual(2);
  });

  it("longestArithSeqLength([1, 1])", () => {
    const result = longestArithSeqLength([1, 1]);
    expect(result).toEqual(2);
  });

  it("longestArithSeqLength([3, 1, 4, 1, 5])", () => {
    const result = longestArithSeqLength([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("longestArithSeqLength([-1, 0, 1])", () => {
    const result = longestArithSeqLength([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
