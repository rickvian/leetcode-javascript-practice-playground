import { largestTriangleArea } from '../0812-largest-triangle-area.js';

describe('0812-largest-triangle-area', () => {
  it("largestTriangleArea([[1, 2], [3, 4]])", () => {
    const result = largestTriangleArea([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("largestTriangleArea([[1]])", () => {
    const result = largestTriangleArea([[1]]);
    expect(result).toEqual(0);
  });

  it("largestTriangleArea([[]])", () => {
    const result = largestTriangleArea([[]]);
    expect(result).toEqual(0);
  });

  it("largestTriangleArea([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = largestTriangleArea([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});
