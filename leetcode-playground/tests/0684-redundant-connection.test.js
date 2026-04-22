import { findRedundantConnection } from '../0684-redundant-connection.js';

describe('0684-redundant-connection', () => {
  it("findRedundantConnection([[1, 2], [1, 3], [2, 3]])", () => {
    const result = findRedundantConnection([[1, 2], [1, 3], [2, 3]]);
    expect(result).toEqual([2, 3]);
  });

  it("findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])", () => {
    const result = findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]);
    expect(result).toEqual([1, 4]);
  });

  it("findRedundantConnection([[1, 2], [2, 3], [1, 3]])", () => {
    const result = findRedundantConnection([[1, 2], [2, 3], [1, 3]]);
    expect(result).toEqual([1, 3]);
  });

  it("findRedundantConnection([[1, 2], [1, 3], [2, 4], [3, 4], [4, 5]])", () => {
    const result = findRedundantConnection([[1, 2], [1, 3], [2, 4], [3, 4], [4, 5]]);
    expect(result).toEqual([3, 4]);
  });

  it("findRedundantConnection([[1, 2], [2, 3], [3, 1]])", () => {
    const result = findRedundantConnection([[1, 2], [2, 3], [3, 1]]);
    expect(result).toEqual([3, 1]);
  });
});
