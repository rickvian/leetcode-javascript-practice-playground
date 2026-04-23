import { maxAbsValExpr } from '../1131-maximum-of-absolute-value-expression.js';

describe('1131-maximum-of-absolute-value-expression', () => {
  it("maxAbsValExpr([1, 2, 3], [4, 5, 6])", () => {
    const result = maxAbsValExpr([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(6);
  });

  it("maxAbsValExpr([1], [1])", () => {
    const result = maxAbsValExpr([1], [1]);
    expect(result).toEqual(0);
  });

  it("maxAbsValExpr([1, 2], [3, 4])", () => {
    const result = maxAbsValExpr([1, 2], [3, 4]);
    expect(result).toEqual(3);
  });
});
