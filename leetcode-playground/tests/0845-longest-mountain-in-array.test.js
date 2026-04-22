import { longestMountain } from '../0845-longest-mountain-in-array.js';

describe('0845-longest-mountain-in-array', () => {
  it("longestMountain([1, 2, 3, 4, 5])", () => {
    const result = longestMountain([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("longestMountain([])", () => {
    const result = longestMountain([]);
    expect(result).toEqual(0);
  });

  it("longestMountain([1])", () => {
    const result = longestMountain([1]);
    expect(result).toEqual(0);
  });

  it("longestMountain([1, 1])", () => {
    const result = longestMountain([1, 1]);
    expect(result).toEqual(0);
  });

  it("longestMountain([3, 1, 4, 1, 5])", () => {
    const result = longestMountain([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("longestMountain([-1, 0, 1])", () => {
    const result = longestMountain([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
