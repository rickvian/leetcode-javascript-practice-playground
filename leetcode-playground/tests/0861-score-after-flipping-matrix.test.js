import { matrixScore } from '../0861-score-after-flipping-matrix.js';

describe('0861-score-after-flipping-matrix', () => {
  it("matrixScore([[1, 2], [3, 4]])", () => {
    const result = matrixScore([[1, 2], [3, 4]]);
    expect(result).toEqual(10);
  });

  it("matrixScore([[1]])", () => {
    const result = matrixScore([[1]]);
    expect(result).toEqual(1);
  });

  it("matrixScore([[]])", () => {
    const result = matrixScore([[]]);
    expect(result).toEqual(-2147483648);
  });

  it("matrixScore([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = matrixScore([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(60);
  });
});
