import { twoSum } from '../0167-two-sum-ii-input-array-is-sorted.js';

describe('0167-two-sum-ii-input-array-is-sorted', () => {
  it("twoSum([2, 7, 11, 15], 9)", () => {
    const result = twoSum([2, 7, 11, 15], 9);
    const nums = [2, 7, 11, 15];
    expect(result).toHaveLength(2);
    expect(nums[result[0]-1] + nums[result[1]-1]).toBe(9);
  });

  it("twoSum([3, 2, 4], 6)", () => {
    const result = twoSum([3, 2, 4], 6);
    const nums = [3, 2, 4];
    expect(result).toHaveLength(2);
    expect(nums[result[0]-1] + nums[result[1]-1]).toBe(6);
  });

  it("twoSum([3, 3], 6)", () => {
    const result = twoSum([3, 3], 6);
    const nums = [3, 3];
    expect(result).toHaveLength(2);
    expect(nums[result[0]-1] + nums[result[1]-1]).toBe(6);
  });

  it("twoSum([-1, -2, -3, -4, -5], -8)", () => {
    const result = twoSum([-1, -2, -3, -4, -5], -8);
    const nums = [-1, -2, -3, -4, -5];
    expect(result).toHaveLength(2);
    expect(nums[result[0]-1] + nums[result[1]-1]).toBe(-8);
  });

  it("twoSum([1, 2], 3)", () => {
    const result = twoSum([1, 2], 3);
    const nums = [1, 2];
    expect(result).toHaveLength(2);
    expect(nums[result[0]-1] + nums[result[1]-1]).toBe(3);
  });

  it("twoSum([0, 4, 3, 0], 0)", () => {
    const result = twoSum([0, 4, 3, 0], 0);
    const nums = [0, 4, 3, 0];
    expect(result).toHaveLength(2);
    expect(nums[result[0]-1] + nums[result[1]-1]).toBe(0);
  });
});
