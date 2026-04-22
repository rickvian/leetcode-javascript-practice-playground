import { flipgame } from '../0822-card-flipping-game.js';

describe('0822-card-flipping-game', () => {
  it("flipgame([1, 2, 3], [4, 5, 6])", () => {
    const result = flipgame([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(1);
  });

  it("flipgame([1], [1])", () => {
    const result = flipgame([1], [1]);
    expect(result).toEqual(0);
  });

  it("flipgame([1, 2], [3, 4])", () => {
    const result = flipgame([1, 2], [3, 4]);
    expect(result).toEqual(1);
  });
});
