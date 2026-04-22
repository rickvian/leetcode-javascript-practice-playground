import { generateMatrix } from '../0059-spiral-matrix-ii.js';

describe('0059-spiral-matrix-ii', () => {
  it("generateMatrix(1)", () => {
    const result = generateMatrix(1);
    expect(result).toEqual([[1]]);
  });

  it("generateMatrix(2)", () => {
    const result = generateMatrix(2);
    expect(result).toEqual([[1, 2], [4, 3]]);
  });

  it("generateMatrix(3)", () => {
    const result = generateMatrix(3);
    expect(result).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
  });

  it("generateMatrix(4)", () => {
    const result = generateMatrix(4);
    expect(result).toEqual([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]);
  });

  it("generateMatrix(5)", () => {
    const result = generateMatrix(5);
    expect(result).toEqual([[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]);
  });
});
