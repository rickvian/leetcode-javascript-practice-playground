import { updateMatrix } from '../0542-01-matrix.js';

describe('0542-01-matrix', () => {
  it("updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]])", () => {
    const result = updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
    expect(result).toEqual([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
  });

  it("updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]])", () => {
    const result = updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]);
    expect(result).toEqual([[0, 0, 0], [0, 1, 0], [1, 2, 1]]);
  });

  it("updateMatrix([[0]])", () => {
    const result = updateMatrix([[0]]);
    expect(result).toEqual([[0]]);
  });

  it("updateMatrix([[1, 0], [0, 1]])", () => {
    const result = updateMatrix([[1, 0], [0, 1]]);
    expect(result).toEqual([[1, 0], [0, 1]]);
  });

  it("updateMatrix([[0, 1, 0, 1, 1]])", () => {
    const result = updateMatrix([[0, 1, 0, 1, 1]]);
    expect(result).toEqual([[0, 1, 0, 1, 2]]);
  });

  it("updateMatrix([[1, 1], [1, 0]])", () => {
    const result = updateMatrix([[1, 1], [1, 0]]);
    expect(result).toEqual([[2, 1], [1, 0]]);
  });
});
