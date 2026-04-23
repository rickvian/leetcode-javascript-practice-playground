import { threeSumMulti } from '../0923-3sum-with-multiplicity.js';

describe('0923-3sum-with-multiplicity', () => {
  it("threeSumMulti([2, 7, 11, 15], 9)", () => {
    const result = threeSumMulti([2, 7, 11, 15], 9);
    expect(result).toEqual(0);
  });

  it("threeSumMulti([3, 2, 4], 6)", () => {
    const result = threeSumMulti([3, 2, 4], 6);
    expect(result).toEqual(0);
  });

  it("threeSumMulti([3, 3], 6)", () => {
    const result = threeSumMulti([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("threeSumMulti([-1, -2, -3, -4, -5], -8)", () => {
    const result = threeSumMulti([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(2);
  });

  it("threeSumMulti([1, 2], 3)", () => {
    const result = threeSumMulti([1, 2], 3);
    expect(result).toEqual(0);
  });

  it("threeSumMulti([0, 4, 3, 0], 0)", () => {
    const result = threeSumMulti([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
