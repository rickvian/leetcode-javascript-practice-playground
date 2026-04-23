import { matrixBlockSum } from '../1314-matrix-block-sum.js';

describe('1314-matrix-block-sum', () => {
  it("matrixBlockSum([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = matrixBlockSum([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual([[21, 21, 21], [21, 21, 21]]);
  });

  it("matrixBlockSum([[1, 2], [3, 4]], 5)", () => {
    const result = matrixBlockSum([[1, 2], [3, 4]], 5);
    expect(result).toEqual([[10, 10], [10, 10]]);
  });

  it("matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual([[45, 45, 45], [45, 45, 45], [45, 45, 45]]);
  });
});
