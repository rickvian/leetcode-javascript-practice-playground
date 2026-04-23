import { pancakeSort } from '../0969-pancake-sorting.js';

describe('0969-pancake-sorting', () => {
  it("pancakeSort([1, 2, 3, 4, 5])", () => {
    const result = pancakeSort([1, 2, 3, 4, 5]);
    expect(result).toEqual([]);
  });

  it("pancakeSort([])", () => {
    const result = pancakeSort([]);
    expect(result).toEqual([]);
  });

  it("pancakeSort([1])", () => {
    const result = pancakeSort([1]);
    expect(result).toEqual([]);
  });

  it("pancakeSort([1, 1])", () => {
    const result = pancakeSort([1, 1]);
    expect(result).toEqual([0, 2]);
  });

  it("pancakeSort([3, 1, 4, 1, 5])", () => {
    const result = pancakeSort([3, 1, 4, 1, 5]);
    expect(result).toEqual([3, 4, 2, 3, 0, 2]);
  });

  it("pancakeSort([-1, 0, 1])", () => {
    const result = pancakeSort([-1, 0, 1]);
    expect(result).toEqual([0, 3, 0, 2]);
  });
});
