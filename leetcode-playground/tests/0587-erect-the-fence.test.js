import { outerTrees } from '../0587-erect-the-fence.js';

describe('0587-erect-the-fence', () => {
  it("outerTrees([[1, 2], [3, 4]])", () => {
    const result = outerTrees([[1, 2], [3, 4]]);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  it("outerTrees([[1]])", () => {
    const result = outerTrees([[1]]);
    expect(result).toEqual([[1]]);
  });

  it("outerTrees([[]])", () => {
    const result = outerTrees([[]]);
    expect(result).toEqual([[]]);
  });

  it("outerTrees([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = outerTrees([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });
});
