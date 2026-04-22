import { findSubsequences } from '../0491-non-decreasing-subsequences.js';

describe('0491-non-decreasing-subsequences', () => {
  it("findSubsequences([1, 2, 3, 4, 5])", () => {
    const result = findSubsequences([1, 2, 3, 4, 5]);
    expect(result).toEqual([["1", "2"], ["1", "2", "3"], ["1", "2", "3", "4"], ["1", "2", "3", "4", "5"], ["1", "2", "3", "5"], ["1", "2", "4"], ["1", "2", "4", "5"], ["1", "2", "5"], ["1", "3"], ["1", "3", "4"], ["1", "3", "4", "5"], ["1", "3", "5"], ["1", "4"], ["1", "4", "5"], ["1", "5"], ["2", "3"], ["2", "3", "4"], ["2", "3", "4", "5"], ["2", "3", "5"], ["2", "4"], ["2", "4", "5"], ["2", "5"], ["3", "4"], ["3", "4", "5"], ["3", "5"], ["4", "5"]]);
  });

  it("findSubsequences([])", () => {
    const result = findSubsequences([]);
    expect(result).toEqual([]);
  });

  it("findSubsequences([1])", () => {
    const result = findSubsequences([1]);
    expect(result).toEqual([]);
  });

  it("findSubsequences([1, 1])", () => {
    const result = findSubsequences([1, 1]);
    expect(result).toEqual([["1", "1"]]);
  });

  it("findSubsequences([3, 1, 4, 1, 5])", () => {
    const result = findSubsequences([3, 1, 4, 1, 5]);
    expect(result).toEqual([["3", "4"], ["3", "4", "5"], ["3", "5"], ["1", "4"], ["1", "4", "5"], ["1", "1"], ["1", "1", "5"], ["1", "5"], ["4", "5"]]);
  });

  it("findSubsequences([-1, 0, 1])", () => {
    const result = findSubsequences([-1, 0, 1]);
    expect(result).toEqual([["-1", "0"], ["-1", "0", "1"], ["-1", "1"], ["0", "1"]]);
  });
});
