import { canPartitionKSubsets } from '../0698-partition-to-k-equal-sum-subsets.js';

describe('0698-partition-to-k-equal-sum-subsets', () => {
  it("canPartitionKSubsets([2, 7, 11, 15], 9)", () => {
    const result = canPartitionKSubsets([2, 7, 11, 15], 9);
    expect(result).toEqual(false);
  });

  it("canPartitionKSubsets([3, 2, 4], 6)", () => {
    const result = canPartitionKSubsets([3, 2, 4], 6);
    expect(result).toEqual(false);
  });

  it("canPartitionKSubsets([3, 3], 6)", () => {
    const result = canPartitionKSubsets([3, 3], 6);
    expect(result).toEqual(false);
  });

  it("canPartitionKSubsets([-1, -2, -3, -4, -5], -8)", () => {
    const result = canPartitionKSubsets([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(false);
  });

  it("canPartitionKSubsets([1, 2], 3)", () => {
    const result = canPartitionKSubsets([1, 2], 3);
    expect(result).toEqual(false);
  });

  it("canPartitionKSubsets([0, 4, 3, 0], 0)", () => {
    const result = canPartitionKSubsets([0, 4, 3, 0], 0);
    expect(result).toEqual(false);
  });
});
