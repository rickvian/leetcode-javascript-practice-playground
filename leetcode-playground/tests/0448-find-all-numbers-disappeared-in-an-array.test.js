import { findDisappearedNumbers } from '../0448-find-all-numbers-disappeared-in-an-array.js';

describe('0448-find-all-numbers-disappeared-in-an-array', () => {
  it("findDisappearedNumbers([1, 2, 3, 4, 5])", () => {
    const result = findDisappearedNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([]);
  });

  it("findDisappearedNumbers([])", () => {
    const result = findDisappearedNumbers([]);
    expect(result).toEqual([]);
  });

  it("findDisappearedNumbers([1])", () => {
    const result = findDisappearedNumbers([1]);
    expect(result).toEqual([]);
  });

  it("findDisappearedNumbers([1, 1])", () => {
    const result = findDisappearedNumbers([1, 1]);
    expect(result).toEqual([2]);
  });

  it("findDisappearedNumbers([3, 1, 4, 1, 5])", () => {
    const result = findDisappearedNumbers([3, 1, 4, 1, 5]);
    expect(result).toEqual([2]);
  });

  it("findDisappearedNumbers([-1, 0, 1])", () => {
    const result = findDisappearedNumbers([-1, 0, 1]);
    expect(result).toEqual([2, 3]);
  });
});
