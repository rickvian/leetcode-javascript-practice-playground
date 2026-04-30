import { removeElement } from '../0027-remove-element';

describe('0027-remove-element', () => {
  // Official LeetCode examples
  it('should remove all instances of val from example 1', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const k = removeElement(nums, val);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([2, 2]);
  });

  it('should remove all instances of val from example 2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toBe(5);
    // First 5 elements should not contain 2
    expect(nums.slice(0, k).every(x => x !== val)).toBe(true);
  });

  // Constraint-based test cases
  it('should return entire array length when val not present', () => {
    const nums = [1, 2, 3, 4, 5];
    const val = 6;
    const k = removeElement(nums, val);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return 0 when all elements equal val', () => {
    const nums = [5, 5, 5, 5];
    const val = 5;
    const k = removeElement(nums, val);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  it('should handle single element matching val', () => {
    const nums = [3];
    const val = 3;
    const k = removeElement(nums, val);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  it('should handle single element not matching val', () => {
    const nums = [3];
    const val = 5;
    const k = removeElement(nums, val);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([3]);
  });

  it('should handle empty array', () => {
    const nums = [];
    const val = 0;
    const k = removeElement(nums, val);
    expect(k).toBe(0);
  });

  it('should handle two-element array with both equal to val', () => {
    const nums = [2, 2];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toBe(0);
  });

  it('should handle two-element array with one equal to val', () => {
    const nums = [2, 1];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('should remove val from start of array', () => {
    const nums = [2, 2, 3, 4];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([3, 4]);
  });

  it('should remove val from end of array', () => {
    const nums = [1, 3, 4, 2, 2];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toBe(3);
    expect(nums.slice(0, k).every(x => x !== val)).toBe(true);
  });

  it('should remove val from middle of array', () => {
    const nums = [1, 2, 2, 3, 4];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 3, 4]);
  });

  it('should handle array with multiple values', () => {
    const nums = [1, 2, 3, 4, 5];
    const val = 3;
    const k = removeElement(nums, val);
    expect(k).toBe(4);
    expect(nums.slice(0, k).every(x => x !== val)).toBe(true);
  });

  it('should remove val and verify no val remains in first k elements', () => {
    const nums = [3, 1, 3, 1, 3, 1, 3];
    const val = 3;
    const k = removeElement(nums, val);
    expect(k).toBe(4);
    // All first k elements must not equal val
    for (let i = 0; i < k; i++) {
      expect(nums[i]).not.toBe(val);
    }
  });

  it('should handle array with negative numbers', () => {
    const nums = [-1, -2, -1, -2];
    const val = -1;
    const k = removeElement(nums, val);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([-2, -2]);
  });

  it('should handle array with zero values', () => {
    const nums = [0, 1, 0, 2, 0, 3];
    const val = 0;
    const k = removeElement(nums, val);
    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });

  it('should handle larger array with val at multiple positions', () => {
    const nums = [1, 2, 3, 4, 5, 1, 1, 1];
    const val = 1;
    const k = removeElement(nums, val);
    expect(k).toBe(5);
    expect(nums.slice(0, k).every(x => x !== val)).toBe(true);
  });

  it('should maintain relative order of remaining elements', () => {
    const nums = [4, 2, 4, 3, 4];
    const val = 4;
    const k = removeElement(nums, val);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([2, 3]);
  });
});
