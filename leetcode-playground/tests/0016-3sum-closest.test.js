import { threeSumClosest } from '../0016-3sum-closest.js';

describe('0016-3sum-closest', () => {
  it("threeSumClosest([2, 7, 11, 15], 9)", () => {
    const result = threeSumClosest([2, 7, 11, 15], 9);
    expect(result).toEqual(20);
  });

  it("threeSumClosest([2, 3, 4], 6)", () => {
    const result = threeSumClosest([2, 3, 4], 6);
    expect(result).toEqual(9);
  });

  it("threeSumClosest([-5, -4, -3, -2, -1], -8)", () => {
    const result = threeSumClosest([-5, -4, -3, -2, -1], -8);
    expect(result).toEqual(-8);
  });

  it("threeSumClosest([0, 0, 3, 4], 0)", () => {
    const result = threeSumClosest([0, 0, 3, 4], 0);
    expect(result).toEqual(3);
  });
});
