import { multiply } from '../0311-sparse-matrix-multiplication.js';

describe('0311-sparse-matrix-multiplication', () => {
  it("multiply([[1, 0, 0], [-1, 0, 3]], [[7, 0, 0], [0, 0, 0], [0, 0, 1]])", () => {
    const result = multiply([[1, 0, 0], [-1, 0, 3]], [[7, 0, 0], [0, 0, 0], [0, 0, 1]]);
    expect(result).toEqual([[7, 0, 0], [-7, 0, 3]]);
  });

  it("multiply([[0]], [[0]])", () => {
    const result = multiply([[0]], [[0]]);
    expect(result).toEqual([[0]]);
  });

  it("multiply([[1, 2], [3, 4]], [[5, 6], [7, 8]])", () => {
    const result = multiply([[1, 2], [3, 4]], [[5, 6], [7, 8]]);
    expect(result).toEqual([[19, 22], [43, 50]]);
  });
});
