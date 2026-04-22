import { setZeroes } from '../0073-set-matrix-zeroes.js';

describe('0073-set-matrix-zeroes', () => {
  it("setZeroes([[1, 2], [3, 4]])", () => {
    const result = setZeroes([[1, 2], [3, 4]]);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  it("setZeroes([[1]])", () => {
    const result = setZeroes([[1]]);
    expect(result).toEqual([[1]]);
  });

  it("setZeroes([[]])", () => {
    const result = setZeroes([[]]);
    expect(result).toEqual([[]]);
  });

  it("setZeroes([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = setZeroes([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });
});
