import { findBlackPixel } from '../0533-lonely-pixel-ii.js';

describe('0533-lonely-pixel-ii', () => {
  it("findBlackPixel([1, 2, 3])", () => {
    const result = findBlackPixel([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("findBlackPixel([0])", () => {
    const result = findBlackPixel([0]);
    expect(result).toEqual(0);
  });

  it("findBlackPixel([-1, 0, 1])", () => {
    const result = findBlackPixel([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
