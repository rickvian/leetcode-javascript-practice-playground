import { maxDistance } from '../0624-maximum-distance-in-arrays.js';

describe('0624-maximum-distance-in-arrays', () => {
  it("maxDistance([[1, 2], [3, 4]])", () => {
    const result = maxDistance([[1, 2], [3, 4]]);
    expect(result).toEqual(3);
  });

  it("maxDistance([[1]])", () => {
    const result = maxDistance([[1]]);
    expect(result).toEqual(0);
  });

  it("maxDistance([[]])", () => {
    const result = maxDistance([[]]);
    expect(result).toEqual(0);
  });

  it("maxDistance([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = maxDistance([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(8);
  });
});
