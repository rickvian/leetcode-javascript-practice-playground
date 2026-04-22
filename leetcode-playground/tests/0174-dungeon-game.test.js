import { calculateMinimumHP } from '../0174-dungeon-game.js';

describe('0174-dungeon-game', () => {
  it("calculateMinimumHP([[1, 2], [3, 4]])", () => {
    const result = calculateMinimumHP([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("calculateMinimumHP([[1]])", () => {
    const result = calculateMinimumHP([[1]]);
    expect(result).toEqual(1);
  });

  it("calculateMinimumHP([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = calculateMinimumHP([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(1);
  });
});
