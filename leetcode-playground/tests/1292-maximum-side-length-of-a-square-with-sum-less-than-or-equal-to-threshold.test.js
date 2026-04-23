import { maxSideLength } from '../1292-maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold.js';

describe('1292-maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold', () => {
  it("maxSideLength([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = maxSideLength([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual(0);
  });

  it("maxSideLength([[1, 2], [3, 4]], 5)", () => {
    const result = maxSideLength([[1, 2], [3, 4]], 5);
    expect(result).toEqual(0);
  });

  it("maxSideLength([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = maxSideLength([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual(2);
  });
});
