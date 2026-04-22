import { surfaceArea } from '../0892-surface-area-of-3d-shapes.js';

describe('0892-surface-area-of-3d-shapes', () => {
  it("surfaceArea([[1, 2], [3, 4]])", () => {
    const result = surfaceArea([[1, 2], [3, 4]]);
    expect(result).toEqual(34);
  });

  it("surfaceArea([[1]])", () => {
    const result = surfaceArea([[1]]);
    expect(result).toEqual(6);
  });

  it("surfaceArea([[]])", () => {
    const result = surfaceArea([[]]);
    expect(result).toEqual(0);
  });

  it("surfaceArea([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = surfaceArea([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(102);
  });
});
