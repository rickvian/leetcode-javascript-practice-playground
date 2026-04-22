import { getModifiedArray } from '../0370-range-addition.js';

describe('0370-range-addition', () => {
  it("getModifiedArray(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]])", () => {
    const result = getModifiedArray(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]);
    expect(result).toEqual([-2, 0, 3, 5, 3]);
  });

  it("getModifiedArray(3, [[0, 2, 1]])", () => {
    const result = getModifiedArray(3, [[0, 2, 1]]);
    expect(result).toEqual([1, 1, 1]);
  });

  it("getModifiedArray(1, [])", () => {
    const result = getModifiedArray(1, []);
    expect(result).toEqual([0]);
  });

  it("getModifiedArray(4, [[0, 3, 5], [1, 2, -1]])", () => {
    const result = getModifiedArray(4, [[0, 3, 5], [1, 2, -1]]);
    expect(result).toEqual([5, 4, 4, 5]);
  });
});
