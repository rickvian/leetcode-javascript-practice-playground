import { pacificAtlantic } from '../0417-pacific-atlantic-water-flow.js';

describe('0417-pacific-atlantic-water-flow', () => {
  it("pacificAtlantic([[1, 2], [3, 4]])", () => {
    const result = pacificAtlantic([[1, 2], [3, 4]]);
    expect(result).toEqual([[0, 1], [1, 0], [1, 1]]);
  });

  it("pacificAtlantic([[1]])", () => {
    const result = pacificAtlantic([[1]]);
    expect(result).toEqual([[0, 0]]);
  });

  it("pacificAtlantic([[]])", () => {
    const result = pacificAtlantic([[]]);
    expect(result).toEqual([]);
  });

  it("pacificAtlantic([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = pacificAtlantic([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[0, 2], [1, 2], [2, 0], [2, 1], [2, 2]]);
  });
});
