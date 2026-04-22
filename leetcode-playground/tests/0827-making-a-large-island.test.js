import { largestIsland } from '../0827-making-a-large-island.js';

describe('0827-making-a-large-island', () => {
  it("largestIsland([[1, 2], [3, 4]])", () => {
    const result = largestIsland([[1, 2], [3, 4]]);
    expect(result).toEqual(3);
  });

  it("largestIsland([[1]])", () => {
    const result = largestIsland([[1]]);
    expect(result).toEqual(1);
  });

  it("largestIsland([[]])", () => {
    const result = largestIsland([[]]);
    expect(result).toEqual(1);
  });

  it("largestIsland([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = largestIsland([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(8);
  });
});
