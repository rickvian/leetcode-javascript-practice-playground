import { kthSmallest } from '../0378-kth-smallest-element-in-a-sorted-matrix.js';

describe('0378-kth-smallest-element-in-a-sorted-matrix', () => {
  it("kthSmallest([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = kthSmallest([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual(2);
  });
});
