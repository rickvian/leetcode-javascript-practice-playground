import { kClosest } from '../0973-k-closest-points-to-origin.js';

describe('0973-k-closest-points-to-origin', () => {
  it("kClosest([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = kClosest([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it("kClosest([[1, 2], [3, 4]], 5)", () => {
    const result = kClosest([[1, 2], [3, 4]], 5);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  it("kClosest([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = kClosest([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });
});
