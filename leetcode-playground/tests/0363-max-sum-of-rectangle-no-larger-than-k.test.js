import { maxSumSubmatrix } from '../0363-max-sum-of-rectangle-no-larger-than-k.js';

describe('0363-max-sum-of-rectangle-no-larger-than-k', () => {
  it("maxSumSubmatrix([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = maxSumSubmatrix([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual(2);
  });

  it("maxSumSubmatrix([[1, 2], [3, 4]], 5)", () => {
    const result = maxSumSubmatrix([[1, 2], [3, 4]], 5);
    expect(result).toEqual(4);
  });

  it("maxSumSubmatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = maxSumSubmatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual(15);
  });
});
