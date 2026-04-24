import { luckyNumbers } from '../1380-lucky-numbers-in-a-matrix.js';

describe('1380-lucky-numbers-in-a-matrix', () => {
  it("luckyNumbers([[1, 2], [3, 4]])", () => {
    const result = luckyNumbers([[1, 2], [3, 4]]);
    expect(result).toEqual([3]);
  });

  it("luckyNumbers([[1]])", () => {
    const result = luckyNumbers([[1]]);
    expect(result).toEqual([1]);
  });

  it("luckyNumbers([[]])", () => {
    const result = luckyNumbers([[]]);
    expect(result).toEqual([]);
  });

  it("luckyNumbers([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = luckyNumbers([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([7]);
  });
});
