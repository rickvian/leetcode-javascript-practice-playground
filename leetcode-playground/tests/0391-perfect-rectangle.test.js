import { isRectangleCover } from '../0391-perfect-rectangle.js';

describe('0391-perfect-rectangle', () => {
  it("isRectangleCover([[1, 2], [3, 4]])", () => {
    const result = isRectangleCover([[1, 2], [3, 4]]);
    expect(result).toEqual(false);
  });

  it("isRectangleCover([[1]])", () => {
    const result = isRectangleCover([[1]]);
    expect(result).toEqual(false);
  });

  it("isRectangleCover([[]])", () => {
    const result = isRectangleCover([[]]);
    expect(result).toEqual(false);
  });

  it("isRectangleCover([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = isRectangleCover([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(false);
  });
});
