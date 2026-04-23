import { fixedPoint } from '../1064-fixed-point.js';

describe('1064-fixed-point', () => {
  it("fixedPoint([1, 2, 3, 4, 5])", () => {
    const result = fixedPoint([1, 2, 3, 4, 5]);
    expect(result).toEqual(-1);
  });

  it("fixedPoint([])", () => {
    const result = fixedPoint([]);
    expect(result).toEqual(-1);
  });

  it("fixedPoint([1])", () => {
    const result = fixedPoint([1]);
    expect(result).toEqual(-1);
  });

  it("fixedPoint([1, 1])", () => {
    const result = fixedPoint([1, 1]);
    expect(result).toEqual(-1);
  });

  it("fixedPoint([3, 1, 4, 1, 5])", () => {
    const result = fixedPoint([3, 1, 4, 1, 5]);
    expect(result).toEqual(-1);
  });

  it("fixedPoint([-1, 0, 1])", () => {
    const result = fixedPoint([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
