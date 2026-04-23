import { closedIsland } from '../1254-number-of-closed-islands.js';

describe('1254-number-of-closed-islands', () => {
  it("closedIsland([[1, 2], [3, 4]])", () => {
    const result = closedIsland([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("closedIsland([[1]])", () => {
    const result = closedIsland([[1]]);
    expect(result).toEqual(0);
  });

  it("closedIsland([[]])", () => {
    const result = closedIsland([[]]);
    expect(result).toEqual(0);
  });

  it("closedIsland([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = closedIsland([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});
