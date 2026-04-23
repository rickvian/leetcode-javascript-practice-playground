import { shortestPathBinaryMatrix } from '../1091-shortest-path-in-binary-matrix.js';

describe('1091-shortest-path-in-binary-matrix', () => {
  it("shortestPathBinaryMatrix([[1, 2], [3, 4]])", () => {
    const result = shortestPathBinaryMatrix([[1, 2], [3, 4]]);
    expect(result).toEqual(-1);
  });

  it("shortestPathBinaryMatrix([[1]])", () => {
    const result = shortestPathBinaryMatrix([[1]]);
    expect(result).toEqual(-1);
  });

  it("shortestPathBinaryMatrix([[]])", () => {
    const result = shortestPathBinaryMatrix([[]]);
    expect(result).toEqual(1);
  });

  it("shortestPathBinaryMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = shortestPathBinaryMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(-1);
  });
});
