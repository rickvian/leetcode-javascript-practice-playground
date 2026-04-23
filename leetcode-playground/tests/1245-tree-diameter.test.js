import { treeDiameter } from '../1245-tree-diameter.js';

describe('1245-tree-diameter', () => {
  it("treeDiameter([[1, 2], [3, 4]])", () => {
    const result = treeDiameter([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("treeDiameter([[1]])", () => {
    const result = treeDiameter([[1]]);
    expect(result).toEqual(0);
  });

  it("treeDiameter([[]])", () => {
    const result = treeDiameter([[]]);
    expect(result).toEqual(0);
  });

  it("treeDiameter([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = treeDiameter([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});
