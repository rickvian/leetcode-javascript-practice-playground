import { new21Game } from '../0837-new-21-game.js';

describe('0837-new-21-game', () => {
  it("new21Game([1, 2, 3])", () => {
    const result = new21Game([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("new21Game([])", () => {
    const result = new21Game([]);
    expect(result).toEqual(0);
  });

  it("new21Game([0])", () => {
    const result = new21Game([0]);
    expect(result).toEqual(0);
  });

  it("new21Game([-1, 0, 1])", () => {
    const result = new21Game([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
