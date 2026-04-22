import { largestRectangleArea } from '../0084-largest-rectangle-in-histogram.js';

describe('0084-largest-rectangle-in-histogram', () => {
  it("largestRectangleArea([1, 2, 3, 4, 5])", () => {
    const result = largestRectangleArea([1, 2, 3, 4, 5]);
    expect(result).toEqual(9);
  });

  it("largestRectangleArea([])", () => {
    const result = largestRectangleArea([]);
    expect(result).toEqual(0);
  });

  it("largestRectangleArea([1])", () => {
    const result = largestRectangleArea([1]);
    expect(result).toEqual(1);
  });

  it("largestRectangleArea([1, 1])", () => {
    const result = largestRectangleArea([1, 1]);
    expect(result).toEqual(2);
  });

  it("largestRectangleArea([3, 1, 4, 1, 5])", () => {
    const result = largestRectangleArea([3, 1, 4, 1, 5]);
    expect(result).toEqual(5);
  });

  it("largestRectangleArea([-1, 0, 1])", () => {
    const result = largestRectangleArea([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
