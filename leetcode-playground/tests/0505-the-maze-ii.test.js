import { shortestDistance } from '../0505-the-maze-ii.js';

describe('0505-the-maze-ii', () => {
  it("shortestDistance([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4]...)", () => {
    const result = shortestDistance([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4], [4, 4]);
    expect(result).toEqual(12);
  });

  it("shortestDistance([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4]...)", () => {
    const result = shortestDistance([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4], [3, 2]);
    expect(result).toEqual(-1);
  });

  it("shortestDistance([[0, 0, 0], [0, 0, 0], [0, 0, 0]], [0, 0]...)", () => {
    const result = shortestDistance([[0, 0, 0], [0, 0, 0], [0, 0, 0]], [0, 0], [2, 2]);
    expect(result).toEqual(4);
  });

  it("shortestDistance([[0, 0], [0, 0]], [0, 0]...)", () => {
    const result = shortestDistance([[0, 0], [0, 0]], [0, 0], [1, 1]);
    expect(result).toEqual(2);
  });
});
