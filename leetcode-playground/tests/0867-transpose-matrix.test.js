import { transpose } from '../0867-transpose-matrix.js';

describe('0867-transpose-matrix', () => {
  it("transpose([[1, 2], [3, 4]])", () => {
    const result = transpose([[1, 2], [3, 4]]);
    expect(result).toEqual([[1, 3], [2, 4]]);
  });

  it("transpose([[1]])", () => {
    const result = transpose([[1]]);
    expect(result).toEqual([[1]]);
  });

  it("transpose([[]])", () => {
    const result = transpose([[]]);
    expect(result).toEqual([]);
  });

  it("transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });
});
