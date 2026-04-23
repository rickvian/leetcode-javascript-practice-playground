import { largestPerimeter } from '../0976-largest-perimeter-triangle.js';

describe('0976-largest-perimeter-triangle', () => {
  it("largestPerimeter([1, 2, 3, 4, 5])", () => {
    const result = largestPerimeter([1, 2, 3, 4, 5]);
    expect(result).toEqual(12);
  });

  it("largestPerimeter([])", () => {
    const result = largestPerimeter([]);
    expect(result).toEqual(0);
  });

  it("largestPerimeter([1])", () => {
    const result = largestPerimeter([1]);
    expect(result).toEqual(0);
  });

  it("largestPerimeter([1, 1])", () => {
    const result = largestPerimeter([1, 1]);
    expect(result).toEqual(0);
  });

  it("largestPerimeter([3, 1, 4, 1, 5])", () => {
    const result = largestPerimeter([3, 1, 4, 1, 5]);
    expect(result).toEqual(12);
  });

  it("largestPerimeter([-1, 0, 1])", () => {
    const result = largestPerimeter([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
