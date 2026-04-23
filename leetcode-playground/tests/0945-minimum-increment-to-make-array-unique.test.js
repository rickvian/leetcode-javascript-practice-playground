import { minIncrementForUnique } from '../0945-minimum-increment-to-make-array-unique.js';

describe('0945-minimum-increment-to-make-array-unique', () => {
  it("minIncrementForUnique([1, 2, 3, 4, 5])", () => {
    const result = minIncrementForUnique([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("minIncrementForUnique([])", () => {
    const result = minIncrementForUnique([]);
    expect(result).toEqual(0);
  });

  it("minIncrementForUnique([1])", () => {
    const result = minIncrementForUnique([1]);
    expect(result).toEqual(0);
  });

  it("minIncrementForUnique([1, 1])", () => {
    const result = minIncrementForUnique([1, 1]);
    expect(result).toEqual(1);
  });

  it("minIncrementForUnique([3, 1, 4, 1, 5])", () => {
    const result = minIncrementForUnique([3, 1, 4, 1, 5]);
    expect(result).toEqual(1);
  });

  it("minIncrementForUnique([-1, 0, 1])", () => {
    const result = minIncrementForUnique([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
