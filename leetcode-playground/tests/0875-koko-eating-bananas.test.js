import { minEatingSpeed } from '../0875-koko-eating-bananas.js';

describe('0875-koko-eating-bananas', () => {
  it("minEatingSpeed([2, 7, 11, 15], 9)", () => {
    const result = minEatingSpeed([2, 7, 11, 15], 9);
    expect(result).toEqual(5);
  });

  it("minEatingSpeed([3, 2, 4], 6)", () => {
    const result = minEatingSpeed([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("minEatingSpeed([3, 3], 6)", () => {
    const result = minEatingSpeed([3, 3], 6);
    expect(result).toEqual(1);
  });

  it("minEatingSpeed([-1, -2, -3, -4, -5], -8)", () => {
    const result = minEatingSpeed([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-1);
  });

  it("minEatingSpeed([1, 2], 3)", () => {
    const result = minEatingSpeed([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("minEatingSpeed([0, 4, 3, 0], 0)", () => {
    const result = minEatingSpeed([0, 4, 3, 0], 0);
    expect(result).toEqual(4);
  });
});
