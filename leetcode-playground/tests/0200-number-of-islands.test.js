import { numIslands } from '../0200-number-of-islands.js';

describe('0200-number-of-islands', () => {
  it("numIslands([1, 2, 3])", () => {
    const result = numIslands([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("numIslands([])", () => {
    const result = numIslands([]);
    expect(result).toEqual(0);
  });

  it("numIslands([0])", () => {
    const result = numIslands([0]);
    expect(result).toEqual(0);
  });

  it("numIslands([-1, 0, 1])", () => {
    const result = numIslands([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
