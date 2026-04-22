import { numIslands2 } from '../0305-number-of-islands-ii.js';

describe('0305-number-of-islands-ii', () => {
  it("numIslands2(3, 3...)", () => {
    const result = numIslands2(3, 3, [[0, 0], [0, 1], [1, 2], [2, 1]]);
    expect(result).toEqual([1, 1, 2, 3]);
  });

  it("numIslands2(1, 1...)", () => {
    const result = numIslands2(1, 1, [[0, 0]]);
    expect(result).toEqual([1]);
  });

  it("numIslands2(2, 2...)", () => {
    const result = numIslands2(2, 2, [[0, 0], [1, 1], [0, 1]]);
    expect(result).toEqual([1, 2, 1]);
  });
});
