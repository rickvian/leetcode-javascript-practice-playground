import { maxIncreaseKeepingSkyline } from '../0807-max-increase-to-keep-city-skyline.js';

describe('0807-max-increase-to-keep-city-skyline', () => {
  it("maxIncreaseKeepingSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]])", () => {
    const result = maxIncreaseKeepingSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]);
    expect(result).toEqual(52);
  });

  it("maxIncreaseKeepingSkyline([])", () => {
    const result = maxIncreaseKeepingSkyline([]);
    expect(result).toEqual(0);
  });

  it("maxIncreaseKeepingSkyline([[1, 2, 1], [3, 4, 2], [5, 6, 3]])", () => {
    const result = maxIncreaseKeepingSkyline([[1, 2, 1], [3, 4, 2], [5, 6, 3]]);
    expect(result).toEqual(4);
  });
});
