import { uniquePathsIII } from '../0980-unique-paths-iii.js';

describe('0980-unique-paths-iii', () => {
  it("uniquePathsIII([[1, 2], [3, 4]])", () => {
    const result = uniquePathsIII([[1, 2], [3, 4]]);
    expect(result).toEqual(1);
  });

  it("uniquePathsIII([[1]])", () => {
    const result = uniquePathsIII([[1]]);
    expect(result).toEqual(0);
  });

  it("uniquePathsIII([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = uniquePathsIII([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(1);
  });
});
