import { spiralOrder } from '../0054-spiral-matrix.js';

describe('0054-spiral-matrix', () => {
  it("spiralOrder([[1, 2], [3, 4]])", () => {
    const result = spiralOrder([[1, 2], [3, 4]]);
    expect(result).toEqual([1, 2, 4, 3]);
  });

  it("spiralOrder([[1]])", () => {
    const result = spiralOrder([[1]]);
    expect(result).toEqual([1]);
  });

  it("spiralOrder([[]])", () => {
    const result = spiralOrder([[]]);
    expect(result).toEqual([]);
  });

  it("spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
});
