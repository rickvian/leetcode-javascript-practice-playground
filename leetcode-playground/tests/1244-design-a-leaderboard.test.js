import { Leaderboard } from '../1244-design-a-leaderboard.js';

describe('1244-design-a-leaderboard', () => {
  it("sequence 1", () => {
    const obj = new Leaderboard();
    obj.addScore(1, 1);
    expect(obj.top(1)).toEqual(1);
    obj.reset(1);
  });
});
