import { findPoisonedDuration } from '../0495-teemo-attacking.js';

describe('0495-teemo-attacking', () => {
  it("findPoisonedDuration([2, 7, 11, 15], 9)", () => {
    const result = findPoisonedDuration([2, 7, 11, 15], 9);
    expect(result).toEqual(22);
  });

  it("findPoisonedDuration([3, 2, 4], 6)", () => {
    const result = findPoisonedDuration([3, 2, 4], 6);
    expect(result).toEqual(7);
  });

  it("findPoisonedDuration([3, 3], 6)", () => {
    const result = findPoisonedDuration([3, 3], 6);
    expect(result).toEqual(6);
  });

  it("findPoisonedDuration([-1, -2, -3, -4, -5], -8)", () => {
    const result = findPoisonedDuration([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-40);
  });

  it("findPoisonedDuration([1, 2], 3)", () => {
    const result = findPoisonedDuration([1, 2], 3);
    expect(result).toEqual(4);
  });

  it("findPoisonedDuration([0, 4, 3, 0], 0)", () => {
    const result = findPoisonedDuration([0, 4, 3, 0], 0);
    expect(result).toEqual(-4);
  });
});
