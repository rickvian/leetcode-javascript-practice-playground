import { isRectangleOverlap } from '../0836-rectangle-overlap.js';

describe('0836-rectangle-overlap', () => {
  it("isRectangleOverlap([1, 2, 3], [4, 5, 6])", () => {
    const result = isRectangleOverlap([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(false);
  });

  it("isRectangleOverlap([1], [1])", () => {
    const result = isRectangleOverlap([1], [1]);
    expect(result).toEqual(false);
  });

  it("isRectangleOverlap([1, 3], [2])", () => {
    const result = isRectangleOverlap([1, 3], [2]);
    expect(result).toEqual(false);
  });

  it("isRectangleOverlap([1, 2], [3, 4])", () => {
    const result = isRectangleOverlap([1, 2], [3, 4]);
    expect(result).toEqual(false);
  });
});
