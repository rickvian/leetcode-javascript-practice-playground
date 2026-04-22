import { minPathSum } from '../0064-minimum-path-sum.js';

describe('0064-minimum-path-sum', () => {
  it("minPathSum([[1, 2], [3, 4]])", () => {
    const result = minPathSum([[1, 2], [3, 4]]);
    expect(result).toEqual(7);
  });

  it("minPathSum([[1]])", () => {
    const result = minPathSum([[1]]);
    expect(result).toEqual(1);
  });

  it("minPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(21);
  });
});
