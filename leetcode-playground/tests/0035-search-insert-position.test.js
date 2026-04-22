import { searchInsert } from '../0035-search-insert-position.js';

describe('0035-search-insert-position', () => {
  it("searchInsert([2, 7, 11, 15], 9)", () => {
    const result = searchInsert([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("searchInsert([3, 2, 4], 6)", () => {
    const result = searchInsert([3, 2, 4], 6);
    expect(result).toEqual(3);
  });

  it("searchInsert([3, 3], 6)", () => {
    const result = searchInsert([3, 3], 6);
    expect(result).toEqual(2);
  });

  it("searchInsert([-1, -2, -3, -4, -5], -8)", () => {
    const result = searchInsert([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("searchInsert([1, 2], 3)", () => {
    const result = searchInsert([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("searchInsert([0, 4, 3, 0], 0)", () => {
    const result = searchInsert([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
