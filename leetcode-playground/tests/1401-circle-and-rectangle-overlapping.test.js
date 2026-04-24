import { checkOverlap } from '../1401-circle-and-rectangle-overlapping.js';

describe('1401-circle-and-rectangle-overlapping', () => {
  it("checkOverlap([1, 2, 3])", () => {
    const result = checkOverlap([1, 2, 3]);
    expect(result).toEqual(false);
  });

  it("checkOverlap([])", () => {
    const result = checkOverlap([]);
    expect(result).toEqual(false);
  });

  it("checkOverlap([0])", () => {
    const result = checkOverlap([0]);
    expect(result).toEqual(false);
  });

  it("checkOverlap([-1, 0, 1])", () => {
    const result = checkOverlap([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
