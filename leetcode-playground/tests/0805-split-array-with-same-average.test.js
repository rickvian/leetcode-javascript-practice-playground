import { splitArraySameAverage } from '../0805-split-array-with-same-average.js';

describe('0805-split-array-with-same-average', () => {
  it("splitArraySameAverage([1, 2, 3, 4, 5])", () => {
    const result = splitArraySameAverage([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("splitArraySameAverage([])", () => {
    const result = splitArraySameAverage([]);
    expect(result).toEqual(false);
  });

  it("splitArraySameAverage([1])", () => {
    const result = splitArraySameAverage([1]);
    expect(result).toEqual(false);
  });

  it("splitArraySameAverage([1, 1])", () => {
    const result = splitArraySameAverage([1, 1]);
    expect(result).toEqual(true);
  });

  it("splitArraySameAverage([3, 1, 4, 1, 5])", () => {
    const result = splitArraySameAverage([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("splitArraySameAverage([-1, 0, 1])", () => {
    const result = splitArraySameAverage([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
