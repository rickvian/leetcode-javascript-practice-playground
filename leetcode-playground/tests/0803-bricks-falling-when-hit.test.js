import { hitBricks } from '../0803-bricks-falling-when-hit.js';

describe('0803-bricks-falling-when-hit', () => {
  it("hitBricks([[1, 0, 0, 0], [1, 1, 1, 0]], [[1, 0], [1, 1], [1, 2]])", () => {
    const result = hitBricks([[1, 0, 0, 0], [1, 1, 1, 0]], [[1, 0], [1, 1], [1, 2]]);
    expect(result).toEqual([2, 0, 0]);
  });

  it("hitBricks([[1, 0], [1, 0], [1, 0], [1, 0], [1, 0]], [[1, 2], [0, 0], [1, 0]])", () => {
    const result = hitBricks([[1, 0], [1, 0], [1, 0], [1, 0], [1, 0]], [[1, 2], [0, 0], [1, 0]]);
    expect(result).toEqual([0, 4, 0]);
  });

  it("hitBricks([[1, 1, 1], [1, 0, 0], [1, 0, 0]], [[0, 0]])", () => {
    const result = hitBricks([[1, 1, 1], [1, 0, 0], [1, 0, 0]], [[0, 0]]);
    expect(result).toEqual([2]);
  });

  it("hitBricks([[0, 1, 1, 1], [0, 0, 0, 0]], [[0, 0]])", () => {
    const result = hitBricks([[0, 1, 1, 1], [0, 0, 0, 0]], [[0, 0]]);
    expect(result).toEqual([0]);
  });

  it("hitBricks([[1, 0, 0], [1, 1, 0]], [[0, 0], [1, 1]])", () => {
    const result = hitBricks([[1, 0, 0], [1, 1, 0]], [[0, 0], [1, 1]]);
    expect(result).toEqual([2, 0]);
  });
});
