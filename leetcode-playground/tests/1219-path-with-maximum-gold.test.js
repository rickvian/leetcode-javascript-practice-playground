import { getMaximumGold } from '../1219-path-with-maximum-gold.js';

describe('1219-path-with-maximum-gold', () => {
  it("getMaximumGold([[1, 2], [3, 4]])", () => {
    const result = getMaximumGold([[1, 2], [3, 4]]);
    expect(result).toEqual(10);
  });

  it("getMaximumGold([[1]])", () => {
    const result = getMaximumGold([[1]]);
    expect(result).toEqual(1);
  });

  it("getMaximumGold([[]])", () => {
    const result = getMaximumGold([[]]);
    expect(result).toEqual(0);
  });

  it("getMaximumGold([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = getMaximumGold([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(45);
  });
});
