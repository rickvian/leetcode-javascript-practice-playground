import { sortArray } from '../0912-sort-an-array.js';

describe('0912-sort-an-array', () => {
  it("sortArray([1, 2, 3, 4, 5])", () => {
    const result = sortArray([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("sortArray([])", () => {
    const result = sortArray([]);
    expect(result).toEqual([]);
  });

  it("sortArray([1])", () => {
    const result = sortArray([1]);
    expect(result).toEqual([1]);
  });

  it("sortArray([1, 1])", () => {
    const result = sortArray([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("sortArray([3, 1, 4, 1, 5])", () => {
    const result = sortArray([3, 1, 4, 1, 5]);
    expect(result).toEqual([1, 1, 3, 4, 5]);
  });

  it("sortArray([-1, 0, 1])", () => {
    const result = sortArray([-1, 0, 1]);
    expect(result).toEqual([-1, 0, 1]);
  });
});
