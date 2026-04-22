import { longestIncreasingPath } from '../0329-longest-increasing-path-in-a-matrix.js';

describe('0329-longest-increasing-path-in-a-matrix', () => {
  it("longestIncreasingPath([[1, 2], [3, 4]])", () => {
    const result = longestIncreasingPath([[1, 2], [3, 4]]);
    expect(result).toEqual(3);
  });

  it("longestIncreasingPath([[1]])", () => {
    const result = longestIncreasingPath([[1]]);
    expect(result).toEqual(1);
  });

  it("longestIncreasingPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = longestIncreasingPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(5);
  });
});
