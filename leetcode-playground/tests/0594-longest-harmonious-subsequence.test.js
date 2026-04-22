import { findLHS } from '../0594-longest-harmonious-subsequence.js';

describe('0594-longest-harmonious-subsequence', () => {
  it("findLHS([1, 2, 3, 4, 5])", () => {
    const result = findLHS([1, 2, 3, 4, 5]);
    expect(result).toEqual(2);
  });

  it("findLHS([])", () => {
    const result = findLHS([]);
    expect(result).toEqual(0);
  });

  it("findLHS([1])", () => {
    const result = findLHS([1]);
    expect(result).toEqual(0);
  });

  it("findLHS([1, 1])", () => {
    const result = findLHS([1, 1]);
    expect(result).toEqual(0);
  });

  it("findLHS([3, 1, 4, 1, 5])", () => {
    const result = findLHS([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("findLHS([-1, 0, 1])", () => {
    const result = findLHS([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
