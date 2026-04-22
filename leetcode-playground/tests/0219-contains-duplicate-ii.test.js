import { containsNearbyDuplicate } from '../0219-contains-duplicate-ii.js';

describe('0219-contains-duplicate-ii', () => {
  it("containsNearbyDuplicate([2, 7, 11, 15], 9)", () => {
    const result = containsNearbyDuplicate([2, 7, 11, 15], 9);
    expect(result).toEqual(false);
  });

  it("containsNearbyDuplicate([3, 2, 4], 6)", () => {
    const result = containsNearbyDuplicate([3, 2, 4], 6);
    expect(result).toEqual(false);
  });

  it("containsNearbyDuplicate([3, 3], 6)", () => {
    const result = containsNearbyDuplicate([3, 3], 6);
    expect(result).toEqual(true);
  });

  it("containsNearbyDuplicate([-1, -2, -3, -4, -5], -8)", () => {
    const result = containsNearbyDuplicate([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(false);
  });

  it("containsNearbyDuplicate([1, 2], 3)", () => {
    const result = containsNearbyDuplicate([1, 2], 3);
    expect(result).toEqual(false);
  });

  it("containsNearbyDuplicate([0, 4, 3, 0], 0)", () => {
    const result = containsNearbyDuplicate([0, 4, 3, 0], 0);
    expect(result).toEqual(false);
  });
});
