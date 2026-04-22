import { numDistinctIslands } from '../0694-number-of-distinct-islands.js';

describe('0694-number-of-distinct-islands', () => {
  it("numDistinctIslands([[1, 2], [3, 4]])", () => {
    const result = numDistinctIslands([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("numDistinctIslands([[1]])", () => {
    const result = numDistinctIslands([[1]]);
    expect(result).toEqual(1);
  });

  it("numDistinctIslands([[]])", () => {
    const result = numDistinctIslands([[]]);
    expect(result).toEqual(0);
  });

  it("numDistinctIslands([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = numDistinctIslands([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(1);
  });
});
