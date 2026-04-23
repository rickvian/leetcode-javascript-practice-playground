import { minDominoRotations } from '../1007-minimum-domino-rotations-for-equal-row.js';

describe('1007-minimum-domino-rotations-for-equal-row', () => {
  it("minDominoRotations([1, 2, 3], [4, 5, 6])", () => {
    const result = minDominoRotations([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(-1);
  });

  it("minDominoRotations([1], [1])", () => {
    const result = minDominoRotations([1], [1]);
    expect(result).toEqual(0);
  });

  it("minDominoRotations([1, 3], [2])", () => {
    const result = minDominoRotations([1, 3], [2]);
    expect(result).toEqual(-1);
  });

  it("minDominoRotations([1, 2], [3, 4])", () => {
    const result = minDominoRotations([1, 2], [3, 4]);
    expect(result).toEqual(-1);
  });
});
