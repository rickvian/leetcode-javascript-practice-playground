import { isMajorityElement } from '../1150-check-if-a-number-is-majority-element-in-a-sorted-array.js';

describe('1150-check-if-a-number-is-majority-element-in-a-sorted-array', () => {
  it("isMajorityElement([2, 7, 11, 15], 9)", () => {
    const result = isMajorityElement([2, 7, 11, 15], 9);
    expect(result).toEqual(false);
  });

  it("isMajorityElement([3, 2, 4], 6)", () => {
    const result = isMajorityElement([3, 2, 4], 6);
    expect(result).toEqual(false);
  });

  it("isMajorityElement([3, 3], 6)", () => {
    const result = isMajorityElement([3, 3], 6);
    expect(result).toEqual(false);
  });

  it("isMajorityElement([-1, -2, -3, -4, -5], -8)", () => {
    const result = isMajorityElement([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(false);
  });

  it("isMajorityElement([1, 2], 3)", () => {
    const result = isMajorityElement([1, 2], 3);
    expect(result).toEqual(false);
  });

  it("isMajorityElement([0, 4, 3, 0], 0)", () => {
    const result = isMajorityElement([0, 4, 3, 0], 0);
    expect(result).toEqual(false);
  });
});
