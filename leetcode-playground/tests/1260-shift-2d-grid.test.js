import { shiftGrid } from '../1260-shift-2d-grid.js';

describe('1260-shift-2d-grid', () => {
  it("shiftGrid([[1, 2, 3], [4, 5, 6]], 2)", () => {
    const result = shiftGrid([[1, 2, 3], [4, 5, 6]], 2);
    expect(result).toEqual([[5, 6, 1], [2, 3, 4]]);
  });

  it("shiftGrid([[1, 2], [3, 4]], 5)", () => {
    const result = shiftGrid([[1, 2], [3, 4]], 5);
    expect(result).toEqual([[4, 1], [2, 3]]);
  });

  it("shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15)", () => {
    const result = shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15);
    expect(result).toEqual([[4, 5, 6], [7, 8, 9], [1, 2, 3]]);
  });
});
