import { arrayRankTransform } from '../1331-rank-transform-of-an-array.js';

describe('1331-rank-transform-of-an-array', () => {
  it("arrayRankTransform([1, 2, 3, 4, 5])", () => {
    const result = arrayRankTransform([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("arrayRankTransform([])", () => {
    const result = arrayRankTransform([]);
    expect(result).toEqual([]);
  });

  it("arrayRankTransform([1])", () => {
    const result = arrayRankTransform([1]);
    expect(result).toEqual([1]);
  });

  it("arrayRankTransform([1, 1])", () => {
    const result = arrayRankTransform([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("arrayRankTransform([3, 1, 4, 1, 5])", () => {
    const result = arrayRankTransform([3, 1, 4, 1, 5]);
    expect(result).toEqual([2, 1, 3, 1, 4]);
  });

  it("arrayRankTransform([-1, 0, 1])", () => {
    const result = arrayRankTransform([-1, 0, 1]);
    expect(result).toEqual([1, 2, 3]);
  });
});
