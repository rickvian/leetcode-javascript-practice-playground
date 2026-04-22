import { snakesAndLadders } from '../0909-snakes-and-ladders.js';

describe('0909-snakes-and-ladders', () => {
  it("snakesAndLadders([[1, 2], [3, 4]])", () => {
    const result = snakesAndLadders([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("snakesAndLadders([[1]])", () => {
    const result = snakesAndLadders([[1]]);
    expect(result).toEqual(0);
  });

  it("snakesAndLadders([[]])", () => {
    const result = snakesAndLadders([[]]);
    expect(result).toEqual(0);
  });

  it("snakesAndLadders([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = snakesAndLadders([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(1);
  });
});
