import { minimumMoves } from '../1210-minimum-moves-to-reach-target-with-rotations.js';

describe('1210-minimum-moves-to-reach-target-with-rotations', () => {
  it("minimumMoves([[1, 2], [3, 4]])", () => {
    const result = minimumMoves([[1, 2], [3, 4]]);
    expect(result).toEqual(-1);
  });

  it("minimumMoves([[1]])", () => {
    const result = minimumMoves([[1]]);
    expect(result).toEqual(-1);
  });

  it("minimumMoves([[]])", () => {
    const result = minimumMoves([[]]);
    expect(result).toEqual(-1);
  });

  it("minimumMoves([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minimumMoves([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(-1);
  });
});
