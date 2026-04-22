import { floodFill } from '../0733-flood-fill.js';

describe('0733-flood-fill', () => {
  it("floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1...)", () => {
    const result = floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2);
    expect(result).toEqual([[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
  });

  it("floodFill([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 0...)", () => {
    const result = floodFill([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 0, 0, 2);
    expect(result).toEqual([[2, 2, 2], [2, 2, 2], [2, 2, 2]]);
  });

  it("floodFill([[1]], 0...)", () => {
    const result = floodFill([[1]], 0, 0, 5);
    expect(result).toEqual([[5]]);
  });

  it("floodFill([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 1...)", () => {
    const result = floodFill([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 1, 1, 2);
    expect(result).toEqual([[2, 2, 2], [2, 2, 2], [2, 2, 2]]);
  });

  it("floodFill([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 1...)", () => {
    const result = floodFill([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 1, 1, 1);
    expect(result).toEqual([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
  });
});
