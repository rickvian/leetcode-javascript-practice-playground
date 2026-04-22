import { hasPath } from '../0490-the-maze.js';

describe('0490-the-maze', () => {
  it("hasPath([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4]...)", () => {
    const result = hasPath([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4], [4, 4]);
    expect(result).toEqual(true);
  });

  it("hasPath([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4]...)", () => {
    const result = hasPath([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4], [3, 2]);
    expect(result).toEqual(false);
  });

  it("hasPath([[0, 0, 0], [0, 0, 0], [0, 0, 0]], [0, 0]...)", () => {
    const result = hasPath([[0, 0, 0], [0, 0, 0], [0, 0, 0]], [0, 0], [2, 2]);
    expect(result).toEqual(true);
  });

  it("hasPath([[0, 0], [0, 0]], [0, 0]...)", () => {
    const result = hasPath([[0, 0], [0, 0]], [0, 0], [1, 1]);
    expect(result).toEqual(true);
  });
});
