import { validMountainArray } from '../0941-valid-mountain-array.js';

describe('0941-valid-mountain-array', () => {
  it("validMountainArray([1, 2, 3, 4, 5])", () => {
    const result = validMountainArray([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("validMountainArray([])", () => {
    const result = validMountainArray([]);
    expect(result).toEqual(false);
  });

  it("validMountainArray([1])", () => {
    const result = validMountainArray([1]);
    expect(result).toEqual(false);
  });

  it("validMountainArray([1, 1])", () => {
    const result = validMountainArray([1, 1]);
    expect(result).toEqual(false);
  });

  it("validMountainArray([3, 1, 4, 1, 5])", () => {
    const result = validMountainArray([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("validMountainArray([-1, 0, 1])", () => {
    const result = validMountainArray([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
