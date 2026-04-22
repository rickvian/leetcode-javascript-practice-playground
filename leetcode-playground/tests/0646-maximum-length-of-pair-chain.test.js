import { findLongestChain } from '../0646-maximum-length-of-pair-chain.js';

describe('0646-maximum-length-of-pair-chain', () => {
  it("findLongestChain([[1, 2], [3, 4]])", () => {
    const result = findLongestChain([[1, 2], [3, 4]]);
    expect(result).toEqual(2);
  });

  it("findLongestChain([[1]])", () => {
    const result = findLongestChain([[1]]);
    expect(result).toEqual(1);
  });

  it("findLongestChain([[]])", () => {
    const result = findLongestChain([[]]);
    expect(result).toEqual(0);
  });

  it("findLongestChain([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = findLongestChain([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(3);
  });
});
