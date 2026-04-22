import { matrixReshape } from '../0566-reshape-the-matrix.js';

describe('0566-reshape-the-matrix', () => {
  it("matrixReshape([1, 2, 3])", () => {
    const result = matrixReshape([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("matrixReshape([])", () => {
    const result = matrixReshape([]);
    expect(result).toEqual([]);
  });

  it("matrixReshape([0])", () => {
    const result = matrixReshape([0]);
    expect(result).toEqual([0]);
  });

  it("matrixReshape([-1, 0, 1])", () => {
    const result = matrixReshape([-1, 0, 1]);
    expect(result).toEqual([-1, 0, 1]);
  });
});
