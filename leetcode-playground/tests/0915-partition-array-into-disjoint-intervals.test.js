import { partitionDisjoint } from '../0915-partition-array-into-disjoint-intervals.js';

describe('0915-partition-array-into-disjoint-intervals', () => {
  it("partitionDisjoint([1, 2, 3, 4, 5])", () => {
    const result = partitionDisjoint([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("partitionDisjoint([])", () => {
    const result = partitionDisjoint([]);
    expect(result).toEqual(1);
  });

  it("partitionDisjoint([1])", () => {
    const result = partitionDisjoint([1]);
    expect(result).toEqual(1);
  });

  it("partitionDisjoint([1, 1])", () => {
    const result = partitionDisjoint([1, 1]);
    expect(result).toEqual(1);
  });

  it("partitionDisjoint([3, 1, 4, 1, 5])", () => {
    const result = partitionDisjoint([3, 1, 4, 1, 5]);
    expect(result).toEqual(4);
  });

  it("partitionDisjoint([-1, 0, 1])", () => {
    const result = partitionDisjoint([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
