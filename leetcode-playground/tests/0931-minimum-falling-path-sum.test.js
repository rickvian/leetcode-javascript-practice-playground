import { minFallingPathSum } from '../0931-minimum-falling-path-sum.js';

describe('0931-minimum-falling-path-sum', () => {
  it("minFallingPathSum([[1, 2], [3, 4]])", () => {
    const result = minFallingPathSum([[1, 2], [3, 4]]);
    expect(result).toEqual(4);
  });

  it("minFallingPathSum([[1]])", () => {
    const result = minFallingPathSum([[1]]);
    expect(result).toEqual(1);
  });

  it("minFallingPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minFallingPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(12);
  });
});
