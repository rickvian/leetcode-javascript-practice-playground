import { lenLongestFibSubseq } from '../0873-length-of-longest-fibonacci-subsequence.js';

describe('0873-length-of-longest-fibonacci-subsequence', () => {
  it("lenLongestFibSubseq([1, 2, 3, 4, 5])", () => {
    const result = lenLongestFibSubseq([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("lenLongestFibSubseq([])", () => {
    const result = lenLongestFibSubseq([]);
    expect(result).toEqual(0);
  });

  it("lenLongestFibSubseq([1])", () => {
    const result = lenLongestFibSubseq([1]);
    expect(result).toEqual(0);
  });

  it("lenLongestFibSubseq([1, 1])", () => {
    const result = lenLongestFibSubseq([1, 1]);
    expect(result).toEqual(0);
  });

  it("lenLongestFibSubseq([3, 1, 4, 1, 5])", () => {
    const result = lenLongestFibSubseq([3, 1, 4, 1, 5]);
    expect(result).toEqual(4);
  });

  it("lenLongestFibSubseq([-1, 0, 1])", () => {
    const result = lenLongestFibSubseq([-1, 0, 1]);
    expect(result).toEqual(5);
  });
});
