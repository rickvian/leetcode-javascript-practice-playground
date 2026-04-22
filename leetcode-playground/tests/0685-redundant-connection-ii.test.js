import { findRedundantDirectedConnection } from '../0685-redundant-connection-ii.js';

describe('0685-redundant-connection-ii', () => {
  it("findRedundantDirectedConnection([[1, 2], [3, 4]])", () => {
    const result = findRedundantDirectedConnection([[1, 2], [3, 4]]);
    expect(result).toEqual([3, 4]);
  });

  it("findRedundantDirectedConnection([[1]])", () => {
    const result = findRedundantDirectedConnection([[1]]);
    expect(result).toEqual([1]);
  });

  it("findRedundantDirectedConnection([[]])", () => {
    const result = findRedundantDirectedConnection([[]]);
    expect(result).toEqual([]);
  });

  it("findRedundantDirectedConnection([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = findRedundantDirectedConnection([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([7, 8, 9]);
  });
});
