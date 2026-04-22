import { maximalRectangle } from '../0085-maximal-rectangle.js';

describe('0085-maximal-rectangle', () => {
  it("maximalRectangle([1, 2, 3])", () => {
    const result = maximalRectangle([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("maximalRectangle([])", () => {
    const result = maximalRectangle([]);
    expect(result).toEqual(0);
  });

  it("maximalRectangle([0])", () => {
    const result = maximalRectangle([0]);
    expect(result).toEqual(0);
  });

  it("maximalRectangle([-1, 0, 1])", () => {
    const result = maximalRectangle([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
