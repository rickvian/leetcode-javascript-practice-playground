import { searchMatrix } from '../0074-search-a-2d-matrix.js';

describe('0074-search-a-2d-matrix', () => {
  it("searchMatrix([[1, 2], [3, 4]])", () => {
    const result = searchMatrix([[1, 2], [3, 4]]);
    expect(result).toEqual(false);
  });

  it("searchMatrix([[1]])", () => {
    const result = searchMatrix([[1]]);
    expect(result).toEqual(false);
  });

  it("searchMatrix([[]])", () => {
    const result = searchMatrix([[]]);
    expect(result).toEqual(false);
  });

  it("searchMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = searchMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(false);
  });
});
