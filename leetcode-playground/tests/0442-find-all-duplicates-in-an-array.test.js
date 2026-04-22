import { findDuplicates } from '../0442-find-all-duplicates-in-an-array.js';

describe('0442-find-all-duplicates-in-an-array', () => {
  it("findDuplicates([1, 2, 3, 4, 5])", () => {
    const result = findDuplicates([1, 2, 3, 4, 5]);
    expect(result).toEqual([]);
  });

  it("findDuplicates([])", () => {
    const result = findDuplicates([]);
    expect(result).toEqual([]);
  });

  it("findDuplicates([1])", () => {
    const result = findDuplicates([1]);
    expect(result).toEqual([]);
  });

  it("findDuplicates([1, 1])", () => {
    const result = findDuplicates([1, 1]);
    expect(result).toEqual([1]);
  });

  it("findDuplicates([3, 1, 4, 1, 5])", () => {
    const result = findDuplicates([3, 1, 4, 1, 5]);
    expect(result).toEqual([1]);
  });

  it("findDuplicates([-1, 0, 1])", () => {
    const result = findDuplicates([-1, 0, 1]);
    expect(result).toEqual([1, 1]);
  });
});
