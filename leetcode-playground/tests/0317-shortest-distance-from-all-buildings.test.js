import { shortestDistance } from '../0317-shortest-distance-from-all-buildings.js';

describe('0317-shortest-distance-from-all-buildings', () => {
  it("shortestDistance([[1, 2], [3, 4]])", () => {
    const result = shortestDistance([[1, 2], [3, 4]]);
    expect(result).toEqual(-1);
  });

  it("shortestDistance([[1]])", () => {
    const result = shortestDistance([[1]]);
    expect(result).toEqual(-1);
  });

  it("shortestDistance([[]])", () => {
    const result = shortestDistance([[]]);
    expect(result).toEqual(-1);
  });

  it("shortestDistance([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = shortestDistance([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(-1);
  });
});
