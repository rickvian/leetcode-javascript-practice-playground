import { findLucky } from '../1394-find-lucky-integer-in-an-array.js';

describe('1394-find-lucky-integer-in-an-array', () => {
  it("findLucky([1, 2, 3, 4, 5])", () => {
    const result = findLucky([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("findLucky([])", () => {
    const result = findLucky([]);
    expect(result).toEqual(-1);
  });

  it("findLucky([1])", () => {
    const result = findLucky([1]);
    expect(result).toEqual(1);
  });

  it("findLucky([1, 1])", () => {
    const result = findLucky([1, 1]);
    expect(result).toEqual(-1);
  });

  it("findLucky([3, 1, 4, 1, 5])", () => {
    const result = findLucky([3, 1, 4, 1, 5]);
    expect(result).toEqual(-1);
  });

  it("findLucky([-1, 0, 1])", () => {
    const result = findLucky([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
