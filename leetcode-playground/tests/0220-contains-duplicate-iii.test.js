import { containsNearbyAlmostDuplicate } from '../0220-contains-duplicate-iii.js';

describe('0220-contains-duplicate-iii', () => {
  it("containsNearbyAlmostDuplicate([1, 2, 3])", () => {
    const result = containsNearbyAlmostDuplicate([1, 2, 3]);
    expect(result).toEqual(true);
  });

  it("containsNearbyAlmostDuplicate([])", () => {
    const result = containsNearbyAlmostDuplicate([]);
    expect(result).toEqual(false);
  });

  it("containsNearbyAlmostDuplicate([0])", () => {
    const result = containsNearbyAlmostDuplicate([0]);
    expect(result).toEqual(false);
  });

  it("containsNearbyAlmostDuplicate([-1, 0, 1])", () => {
    const result = containsNearbyAlmostDuplicate([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
