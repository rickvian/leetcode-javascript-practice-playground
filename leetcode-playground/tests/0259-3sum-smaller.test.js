import { threeSumSmaller } from '../0259-3sum-smaller.js';

describe('0259-3sum-smaller', () => {
  it("threeSumSmaller([2, 7, 11, 15], 9)", () => {
    const result = threeSumSmaller([2, 7, 11, 15], 9);
    expect(result).toEqual(0);
  });

  it("threeSumSmaller([3, 2, 4], 6)", () => {
    const result = threeSumSmaller([3, 2, 4], 6);
    expect(result).toEqual(0);
  });

  it("threeSumSmaller([3, 3], 6)", () => {
    const result = threeSumSmaller([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("threeSumSmaller([-1, -2, -3, -4, -5], -8)", () => {
    const result = threeSumSmaller([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(6);
  });

  it("threeSumSmaller([1, 2], 3)", () => {
    const result = threeSumSmaller([1, 2], 3);
    expect(result).toEqual(0);
  });

  it("threeSumSmaller([0, 4, 3, 0], 0)", () => {
    const result = threeSumSmaller([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
