import { maxAreaOfIsland } from '../0695-max-area-of-island.js';

describe('0695-max-area-of-island', () => {
  it("maxAreaOfIsland([[1, 2], [3, 4]])", () => {
    const result = maxAreaOfIsland([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("maxAreaOfIsland([[1]])", () => {
    const result = maxAreaOfIsland([[1]]);
    expect(result).toEqual(1);
  });

  it("maxAreaOfIsland([[]])", () => {
    const result = maxAreaOfIsland([[]]);
    expect(result).toEqual(0);
  });

  it("maxAreaOfIsland([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = maxAreaOfIsland([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(1);
  });
});
