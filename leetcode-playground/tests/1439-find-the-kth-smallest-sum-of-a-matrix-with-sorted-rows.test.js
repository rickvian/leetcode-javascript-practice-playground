import { kthSmallest } from '../1439-find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows.js';

describe('1439-find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows', () => {
  it("kthSmallest([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = kthSmallest([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual(6);
  });

  it("kthSmallest([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = kthSmallest([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual(15);
  });
});
