import { merge } from '../0056-merge-intervals.js';

describe('0056-merge-intervals', () => {
  it("merge([[1, 2], [3, 4]])", () => {
    const result = merge([[1, 2], [3, 4]]);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  it("merge([[1]])", () => {
    const result = merge([[1]]);
    expect(result).toEqual([[1]]);
  });

  it("merge([[]])", () => {
    const result = merge([[]]);
    expect(result).toEqual([[]]);
  });

  it("merge([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = merge([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[1, 2, 3], [4, 5], [7, 8]]);
  });
});
