import { islandPerimeter } from '../0463-island-perimeter.js';

describe('0463-island-perimeter', () => {
  it("islandPerimeter([[1, 2], [3, 4]])", () => {
    const result = islandPerimeter([[1, 2], [3, 4]]);
    expect(result).toEqual(4);
  });

  it("islandPerimeter([[1]])", () => {
    const result = islandPerimeter([[1]]);
    expect(result).toEqual(4);
  });

  it("islandPerimeter([[]])", () => {
    const result = islandPerimeter([[]]);
    expect(result).toEqual(0);
  });

  it("islandPerimeter([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = islandPerimeter([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(4);
  });
});
