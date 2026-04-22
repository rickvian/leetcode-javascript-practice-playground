import { fourSumCount } from '../0454-4sum-ii.js';

describe('0454-4sum-ii', () => {
  it("fourSumCount([1, 2], [-2, -1]...)", () => {
    const result = fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]);
    expect(result).toEqual(2);
  });

  it("fourSumCount([0], [0]...)", () => {
    const result = fourSumCount([0], [0], [0], [0]);
    expect(result).toEqual(1);
  });

  it("fourSumCount([], []...)", () => {
    const result = fourSumCount([], [], [], []);
    expect(result).toEqual(0);
  });

  it("fourSumCount([1, -1], [-1, 1]...)", () => {
    const result = fourSumCount([1, -1], [-1, 1], [0, 0], [0, 0]);
    expect(result).toEqual(8);
  });

  it("fourSumCount([-1, -1], [1, 1]...)", () => {
    const result = fourSumCount([-1, -1], [1, 1], [0, 0], [0, 0]);
    expect(result).toEqual(16);
  });

  it("fourSumCount([1, 2, 3], [-1, -2, -3]...)", () => {
    const result = fourSumCount([1, 2, 3], [-1, -2, -3], [0, 1, 2], [-2, -1, 0]);
    expect(result).toEqual(19);
  });
});
