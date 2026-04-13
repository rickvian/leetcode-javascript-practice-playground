import { combinationSum } from '../0039-combination-sum';

// LeetCode specified Constraints:

// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40

describe('0039-combination-sum', () => {
  // Basic cases - happy path
  it('should find all combinations that sum to target', () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    const result = combinationSum(candidates, target);

    // Expected: [[2,2,3], [7]]
    expect(result).toEqual(expect.arrayContaining([
      expect.arrayContaining([7]),
      expect.arrayContaining([2, 2, 3])
    ]));
    expect(result).toHaveLength(2);
  });

  it('should handle case with single combination', () => {
    const candidates = [2];
    const target = 1;
    const result = combinationSum(candidates, target);

    expect(result).toEqual([]);
  });


  // Edge case: target equals a single candidate
  it('should return single element combination when target matches a candidate', () => {
    const candidates = [3, 6, 9];
    const target = 3;
    const result = combinationSum(candidates, target);

    expect(result).toEqual([[3]]);
  });

  // Edge case: single element array
  it('should handle single element candidates array', () => {
    const candidates = [7];
    const target = 7;
    const result = combinationSum(candidates, target);

    expect(result).toEqual([[7]]);
  });

  // Edge case: single element repeated in solution
  it('should find combinations using same candidate multiple times', () => {
    const candidates = [2];
    const target = 8;
    const result = combinationSum(candidates, target);

    expect(result).toEqual([[2, 2, 2, 2]]);
  });

  // Edge case: no valid combinations
  it('should return empty array when no valid combinations exist', () => {
    const candidates = [2];
    const target = 1;
    const result = combinationSum(candidates, target);

    expect(result).toEqual([]);
  });

  // Edge case: target larger than sum of all candidates
  it('should return empty array when target exceeds sum of all candidates', () => {
    const candidates = [100, 200, 30];
    const target = 10;
    const result = combinationSum(candidates, target);

    expect(result).toEqual([]);
  });

  // Edge case: multiple valid combinations
  it('should find multiple different combinations', () => {
    const candidates = [2, 3, 5];
    const target = 8;
    const result = combinationSum(candidates, target);

    // Expected: [[2,2,2,2], [2,3,3], [3,5]]
    expect(result).toHaveLength(3);
    expect(result).toContainEqual([2, 2, 2, 2]);
    expect(result).toContainEqual([2, 3, 3]);
    expect(result).toContainEqual([3, 5]);
  });

  // Edge case: candidates with large numbers
  it('should handle large numbers in candidates', () => {
    const candidates = [10, 20, 30];
    const target = 30;
    const result = combinationSum(candidates, target);

    expect(result).toEqual(expect.arrayContaining([
      expect.arrayContaining([10, 20]),
      expect.arrayContaining([30]) // if 30 exists in candidates
    ]));
  });

  // Edge case: target = 1, minimum positive
  it('should handle target of 1 with candidates >= 1', () => {
    const candidates = [2, 3, 5];
    const target = 1;
    const result = combinationSum(candidates, target);

    expect(result).toEqual([]);
  });

  // Edge case: candidate equals 1, allows any target
  it('should handle candidate of 1 allowing all targets', () => {
    const candidates = [1];
    const target = 3;
    const result = combinationSum(candidates, target);

    expect(result).toEqual([[1, 1, 1]]);
  });
});
