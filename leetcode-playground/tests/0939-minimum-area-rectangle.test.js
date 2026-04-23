import { minAreaRect } from '../0939-minimum-area-rectangle.js';

describe('0939-minimum-area-rectangle', () => {
  it("minAreaRect([[1, 2], [3, 4]])", () => {
    const result = minAreaRect([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("minAreaRect([[1]])", () => {
    const result = minAreaRect([[1]]);
    expect(result).toEqual(0);
  });

  it("minAreaRect([[]])", () => {
    const result = minAreaRect([[]]);
    expect(result).toEqual(0);
  });

  it("minAreaRect([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minAreaRect([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});
