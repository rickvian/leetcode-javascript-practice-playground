import { candyCrush } from '../0723-candy-crush.js';

describe('0723-candy-crush', () => {
  it("candyCrush([[1, 2], [3, 4]])", () => {
    const result = candyCrush([[1, 2], [3, 4]]);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  it("candyCrush([[1]])", () => {
    const result = candyCrush([[1]]);
    expect(result).toEqual([[1]]);
  });

  it("candyCrush([[]])", () => {
    const result = candyCrush([[]]);
    expect(result).toEqual([[]]);
  });

  it("candyCrush([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = candyCrush([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });
});
