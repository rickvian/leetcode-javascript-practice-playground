import { getSkyline } from '../0218-the-skyline-problem.js';

describe('0218-the-skyline-problem', () => {
  it("getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]])", () => {
    const result = getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]);
    expect(result).toEqual([[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]]);
  });

  it("getSkyline([[0, 2, 3], [2, 5, 3]])", () => {
    const result = getSkyline([[0, 2, 3], [2, 5, 3]]);
    expect(result).toEqual([[0, 3], [5, 0]]);
  });

  it("getSkyline([[1, 5, 3]])", () => {
    const result = getSkyline([[1, 5, 3]]);
    expect(result).toEqual([[1, 3], [5, 0]]);
  });

  it("getSkyline([])", () => {
    const result = getSkyline([]);
    expect(result).toEqual([]);
  });

  it("getSkyline([[1, 2, 1], [3, 4, 2], [5, 6, 3]])", () => {
    const result = getSkyline([[1, 2, 1], [3, 4, 2], [5, 6, 3]]);
    expect(result).toEqual([[1, 1], [2, 0], [3, 2], [4, 0], [5, 3], [6, 0]]);
  });
});
