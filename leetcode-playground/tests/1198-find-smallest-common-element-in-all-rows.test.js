import { smallestCommonElement } from '../1198-find-smallest-common-element-in-all-rows.js';

describe('1198-find-smallest-common-element-in-all-rows', () => {
  it("smallestCommonElement([[1, 2], [3, 4]])", () => {
    const result = smallestCommonElement([[1, 2], [3, 4]]);
    expect(result).toEqual(-1);
  });

  it("smallestCommonElement([[1]])", () => {
    const result = smallestCommonElement([[1]]);
    expect(result).toEqual(1);
  });

  it("smallestCommonElement([[]])", () => {
    const result = smallestCommonElement([[]]);
    expect(result).toEqual(-1);
  });

  it("smallestCommonElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = smallestCommonElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(-1);
  });
});
