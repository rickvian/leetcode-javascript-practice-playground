import { spiralMatrixIII } from '../0885-spiral-matrix-iii.js';

describe('0885-spiral-matrix-iii', () => {
  it("spiralMatrixIII(1, 4...)", () => {
    const result = spiralMatrixIII(1, 4, 0, 0);
    expect(result).toEqual([[0, 0], [0, 1], [0, 2], [0, 3]]);
  });

  it("spiralMatrixIII(5, 6...)", () => {
    const result = spiralMatrixIII(5, 6, 1, 4);
    expect(result).toEqual([[1, 4], [1, 5], [2, 5], [2, 4], [2, 3], [1, 3], [0, 3], [0, 4], [0, 5], [3, 5], [3, 4], [3, 3], [3, 2], [2, 2], [1, 2], [0, 2], [4, 5], [4, 4], [4, 3], [4, 2], [4, 1], [3, 1], [2, 1], [1, 1], [0, 1], [4, 0], [3, 0], [2, 0], [1, 0], [0, 0]]);
  });

  it("spiralMatrixIII(1, 1...)", () => {
    const result = spiralMatrixIII(1, 1, 0, 0);
    expect(result).toEqual([[0, 0]]);
  });

  it("spiralMatrixIII(3, 3...)", () => {
    const result = spiralMatrixIII(3, 3, 1, 1);
    expect(result).toEqual([[1, 1], [1, 2], [2, 2], [2, 1], [2, 0], [1, 0], [0, 0], [0, 1], [0, 2]]);
  });

  it("spiralMatrixIII(2, 2...)", () => {
    const result = spiralMatrixIII(2, 2, 0, 0);
    expect(result).toEqual([[0, 0], [0, 1], [1, 1], [1, 0]]);
  });

  it("spiralMatrixIII(4, 4...)", () => {
    const result = spiralMatrixIII(4, 4, 2, 2);
    expect(result).toEqual([[2, 2], [2, 3], [3, 3], [3, 2], [3, 1], [2, 1], [1, 1], [1, 2], [1, 3], [3, 0], [2, 0], [1, 0], [0, 0], [0, 1], [0, 2], [0, 3]]);
  });
});
