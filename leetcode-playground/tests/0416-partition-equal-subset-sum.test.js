import { canPartition } from '../0416-partition-equal-subset-sum.js';

describe('0416-partition-equal-subset-sum', () => {
  it("canPartition([1, 2, 3, 4, 5])", () => {
    const result = canPartition([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("canPartition([1])", () => {
    const result = canPartition([1]);
    expect(result).toEqual(false);
  });

  it("canPartition([1, 1])", () => {
    const result = canPartition([1, 1]);
    expect(result).toEqual(true);
  });

  it("canPartition([3, 1, 4, 1, 5])", () => {
    const result = canPartition([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("canPartition([-1, 0, 1])", () => {
    const result = canPartition([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
