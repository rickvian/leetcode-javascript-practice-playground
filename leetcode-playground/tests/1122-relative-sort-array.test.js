import { relativeSortArray } from '../1122-relative-sort-array.js';

describe('1122-relative-sort-array', () => {
  it("relativeSortArray([1, 2, 3], [4, 5, 6])", () => {
    const result = relativeSortArray([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("relativeSortArray([1], [1])", () => {
    const result = relativeSortArray([1], [1]);
    expect(result).toEqual([1]);
  });

  it("relativeSortArray([1, 3], [2])", () => {
    const result = relativeSortArray([1, 3], [2]);
    expect(result).toEqual([1, 3]);
  });

  it("relativeSortArray([1, 2], [3, 4])", () => {
    const result = relativeSortArray([1, 2], [3, 4]);
    expect(result).toEqual([1, 2]);
  });
});
