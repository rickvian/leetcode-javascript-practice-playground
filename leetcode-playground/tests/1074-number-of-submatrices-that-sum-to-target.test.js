import { numSubmatrixSumTarget } from '../1074-number-of-submatrices-that-sum-to-target.js';

describe('1074-number-of-submatrices-that-sum-to-target', () => {
  it("numSubmatrixSumTarget([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = numSubmatrixSumTarget([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual(1);
  });

  it("numSubmatrixSumTarget([[1, 2], [3, 4]], 5)", () => {
    const result = numSubmatrixSumTarget([[1, 2], [3, 4]], 5);
    expect(result).toEqual(0);
  });

  it("numSubmatrixSumTarget([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = numSubmatrixSumTarget([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual(4);
  });
});
