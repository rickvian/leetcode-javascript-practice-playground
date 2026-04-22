import { findMaxAverage } from '../0643-maximum-average-subarray-i.js';

describe('0643-maximum-average-subarray-i', () => {
  it("findMaxAverage([1, 12, -5, -6, 50, 3], 4)", () => {
    const result = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
    expect(result).toEqual(12.75);
  });

  it("findMaxAverage([5], 1)", () => {
    const result = findMaxAverage([5], 1);
    expect(result).toEqual(5);
  });

  it("findMaxAverage([1, 2, 3, 4, 5], 2)", () => {
    const result = findMaxAverage([1, 2, 3, 4, 5], 2);
    expect(result).toEqual(4.5);
  });

  it("findMaxAverage([0, 4, 0, 3, 2], 1)", () => {
    const result = findMaxAverage([0, 4, 0, 3, 2], 1);
    expect(result).toEqual(4);
  });

  it("findMaxAverage([-1, -2, -3, -4, -5], 3)", () => {
    const result = findMaxAverage([-1, -2, -3, -4, -5], 3);
    expect(result).toEqual(-2);
  });

  it("findMaxAverage([1, 1, 1, 1, 1, 1], 3)", () => {
    const result = findMaxAverage([1, 1, 1, 1, 1, 1], 3);
    expect(result).toEqual(1);
  });
});
