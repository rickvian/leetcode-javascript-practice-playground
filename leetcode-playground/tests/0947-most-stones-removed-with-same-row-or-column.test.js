import { removeStones } from '../0947-most-stones-removed-with-same-row-or-column.js';

describe('0947-most-stones-removed-with-same-row-or-column', () => {
  it("removeStones([[1, 2], [3, 4]])", () => {
    const result = removeStones([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("removeStones([[1]])", () => {
    const result = removeStones([[1]]);
    expect(result).toEqual(0);
  });

  it("removeStones([[]])", () => {
    const result = removeStones([[]]);
    expect(result).toEqual(0);
  });

  it("removeStones([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = removeStones([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});
