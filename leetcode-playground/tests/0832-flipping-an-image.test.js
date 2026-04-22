import { flipAndInvertImage } from '../0832-flipping-an-image.js';

describe('0832-flipping-an-image', () => {
  it("flipAndInvertImage([[1, 2], [3, 4]])", () => {
    const result = flipAndInvertImage([[1, 2], [3, 4]]);
    expect(result).toEqual([[3, 0], [5, 2]]);
  });

  it("flipAndInvertImage([[1]])", () => {
    const result = flipAndInvertImage([[1]]);
    expect(result).toEqual([[0]]);
  });

  it("flipAndInvertImage([[]])", () => {
    const result = flipAndInvertImage([[]]);
    expect(result).toEqual([[]]);
  });

  it("flipAndInvertImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = flipAndInvertImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[2, 3, 0], [7, 4, 5], [8, 9, 6]]);
  });
});
