import { findSpecialInteger } from '../1287-element-appearing-more-than-25-in-sorted-array.js';

describe('1287-element-appearing-more-than-25-in-sorted-array', () => {
  it("findSpecialInteger([1])", () => {
    const result = findSpecialInteger([1]);
    expect(result).toEqual(1);
  });

  it("findSpecialInteger([1, 1])", () => {
    const result = findSpecialInteger([1, 1]);
    expect(result).toEqual(1);
  });

  it("findSpecialInteger([-1, 0, 1])", () => {
    const result = findSpecialInteger([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
