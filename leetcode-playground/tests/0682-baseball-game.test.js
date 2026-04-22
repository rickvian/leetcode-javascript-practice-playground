import { calPoints } from '../0682-baseball-game.js';

describe('0682-baseball-game', () => {
  it("calPoints([])", () => {
    const result = calPoints([]);
    expect(result).toEqual(0);
  });

  it("calPoints([\"\"])", () => {
    const result = calPoints([""]);
    expect(result).toEqual(0);
  });
});
