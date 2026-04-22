import { projectionArea } from '../0883-projection-area-of-3d-shapes.js';

describe('0883-projection-area-of-3d-shapes', () => {
  it("projectionArea([[1, 2], [3, 4]])", () => {
    const result = projectionArea([[1, 2], [3, 4]]);
    expect(result).toEqual(17);
  });

  it("projectionArea([[1]])", () => {
    const result = projectionArea([[1]]);
    expect(result).toEqual(3);
  });

  it("projectionArea([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = projectionArea([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(51);
  });
});
