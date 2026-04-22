import { numDistinctIslands2 } from '../0711-number-of-distinct-islands-ii.js';

describe('0711-number-of-distinct-islands-ii', () => {
  it("numDistinctIslands2([[1, 2], [3, 4]])", () => {
    const result = numDistinctIslands2([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("numDistinctIslands2([[1]])", () => {
    const result = numDistinctIslands2([[1]]);
    expect(result).toEqual(1);
  });

  it("numDistinctIslands2([[]])", () => {
    const result = numDistinctIslands2([[]]);
    expect(result).toEqual(0);
  });

  it("numDistinctIslands2([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = numDistinctIslands2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(1);
  });
});
