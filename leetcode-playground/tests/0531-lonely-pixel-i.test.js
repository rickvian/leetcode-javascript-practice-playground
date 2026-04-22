import { findLonelyPixel } from '../0531-lonely-pixel-i.js';

describe('0531-lonely-pixel-i', () => {
  it("findLonelyPixel([1, 2, 3])", () => {
    const result = findLonelyPixel([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("findLonelyPixel([0])", () => {
    const result = findLonelyPixel([0]);
    expect(result).toEqual(0);
  });

  it("findLonelyPixel([-1, 0, 1])", () => {
    const result = findLonelyPixel([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
