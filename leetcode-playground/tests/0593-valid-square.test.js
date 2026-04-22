import { validSquare } from '../0593-valid-square.js';

describe('0593-valid-square', () => {
  it("validSquare([0, 0], [1, 1]...)", () => {
    const result = validSquare([0, 0], [1, 1], [1, 0], [0, 1]);
    expect(result).toEqual(true);
  });

  it("validSquare([0, 0], [1, 1]...)", () => {
    const result = validSquare([0, 0], [1, 1], [1, 0], [0, 12]);
    expect(result).toEqual(false);
  });

  it("validSquare([1, 0], [-1, 0]...)", () => {
    const result = validSquare([1, 0], [-1, 0], [0, 1], [0, -1]);
    expect(result).toEqual(true);
  });

  it("validSquare([0, 0], [0, 0]...)", () => {
    const result = validSquare([0, 0], [0, 0], [0, 0], [0, 0]);
    expect(result).toEqual(false);
  });

  it("validSquare([1, 0], [0, 1]...)", () => {
    const result = validSquare([1, 0], [0, 1], [-1, 0], [0, -1]);
    expect(result).toEqual(true);
  });

  it("validSquare([0, 0], [2, 0]...)", () => {
    const result = validSquare([0, 0], [2, 0], [2, 2], [0, 2]);
    expect(result).toEqual(true);
  });
});
