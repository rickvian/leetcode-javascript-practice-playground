import { countSquares } from '../1277-count-square-submatrices-with-all-ones.js';

describe('1277-count-square-submatrices-with-all-ones', () => {
  it("countSquares([[1, 2], [3, 4]])", () => {
    const result = countSquares([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("countSquares([[1]])", () => {
    const result = countSquares([[1]]);
    expect(result).toEqual(1);
  });

  it("countSquares([[]])", () => {
    const result = countSquares([[]]);
    expect(result).toEqual(0);
  });

  it("countSquares([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = countSquares([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(1);
  });
});
