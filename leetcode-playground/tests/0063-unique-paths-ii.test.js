import { uniquePathsWithObstacles } from '../0063-unique-paths-ii.js';

describe('0063-unique-paths-ii', () => {
  it("uniquePathsWithObstacles([[1, 2], [3, 4]])", () => {
    const result = uniquePathsWithObstacles([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("uniquePathsWithObstacles([[1]])", () => {
    const result = uniquePathsWithObstacles([[1]]);
    expect(result).toEqual(0);
  });

  it("uniquePathsWithObstacles([[]])", () => {
    const result = uniquePathsWithObstacles([[]]);
    expect(result).toEqual(0);
  });

  it("uniquePathsWithObstacles([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = uniquePathsWithObstacles([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});
