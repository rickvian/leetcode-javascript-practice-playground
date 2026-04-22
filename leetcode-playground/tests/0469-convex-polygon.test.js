import { isConvex } from '../0469-convex-polygon.js';

describe('0469-convex-polygon', () => {
  it("isConvex([[1, 2], [3, 4]])", () => {
    const result = isConvex([[1, 2], [3, 4]]);
    expect(result).toEqual(true);
  });

  it("isConvex([[1]])", () => {
    const result = isConvex([[1]]);
    expect(result).toEqual(true);
  });

  it("isConvex([[]])", () => {
    const result = isConvex([[]]);
    expect(result).toEqual(true);
  });

  it("isConvex([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = isConvex([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(true);
  });
});
