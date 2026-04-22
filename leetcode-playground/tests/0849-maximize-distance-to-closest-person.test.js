import { maxDistToClosest } from '../0849-maximize-distance-to-closest-person.js';

describe('0849-maximize-distance-to-closest-person', () => {
  it("maxDistToClosest([1, 2, 3, 4, 5])", () => {
    const result = maxDistToClosest([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("maxDistToClosest([])", () => {
    const result = maxDistToClosest([]);
    expect(result).toEqual(0);
  });

  it("maxDistToClosest([1])", () => {
    const result = maxDistToClosest([1]);
    expect(result).toEqual(0);
  });

  it("maxDistToClosest([1, 1])", () => {
    const result = maxDistToClosest([1, 1]);
    expect(result).toEqual(0);
  });

  it("maxDistToClosest([3, 1, 4, 1, 5])", () => {
    const result = maxDistToClosest([3, 1, 4, 1, 5]);
    expect(result).toEqual(1);
  });

  it("maxDistToClosest([-1, 0, 1])", () => {
    const result = maxDistToClosest([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
