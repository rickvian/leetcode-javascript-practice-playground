import { minFlips } from '../1284-minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix.js';

describe('1284-minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix', () => {
  it("minFlips([[1, 2], [3, 4]])", () => {
    const result = minFlips([[1, 2], [3, 4]]);
    expect(result).toEqual(-1);
  });

  it("minFlips([[1]])", () => {
    const result = minFlips([[1]]);
    expect(result).toEqual(1);
  });

  it("minFlips([[]])", () => {
    const result = minFlips([[]]);
    expect(result).toEqual(0);
  });

  it("minFlips([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minFlips([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(-1);
  });
});
