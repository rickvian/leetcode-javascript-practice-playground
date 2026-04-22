import { SnakeGame } from '../0353-design-snake-game.js';

describe('0353-design-snake-game', () => {
  it("sequence 1", () => {
    const obj = new SnakeGame(3, 2, [[1, 2], [0, 1]]);
    expect(obj.move("R")).toEqual(0);
    expect(obj.move("D")).toEqual(0);
    expect(obj.move("R")).toEqual(1);
    expect(obj.move("U")).toEqual(1);
    expect(obj.move("L")).toEqual(2);
    expect(obj.move("U")).toEqual(-1);
  });
});
