import { orangesRotting } from '../0994-rotting-oranges.js';

describe('0994-rotting-oranges', () => {
  it("orangesRotting([[1, 2], [3, 4]])", () => {
    const result = orangesRotting([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("orangesRotting([[1]])", () => {
    const result = orangesRotting([[1]]);
    expect(result).toEqual(-1);
  });

  it("orangesRotting([[]])", () => {
    const result = orangesRotting([[]]);
    expect(result).toEqual(0);
  });

  it("orangesRotting([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = orangesRotting([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(1);
  });
});
