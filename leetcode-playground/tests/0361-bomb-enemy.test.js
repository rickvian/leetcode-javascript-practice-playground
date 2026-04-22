import { maxKilledEnemies } from '../0361-bomb-enemy.js';

describe('0361-bomb-enemy', () => {
  it("maxKilledEnemies([1, 2, 3])", () => {
    const result = maxKilledEnemies([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("maxKilledEnemies([0])", () => {
    const result = maxKilledEnemies([0]);
    expect(result).toEqual(0);
  });

  it("maxKilledEnemies([-1, 0, 1])", () => {
    const result = maxKilledEnemies([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
