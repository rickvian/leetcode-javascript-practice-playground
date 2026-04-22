import { sortTransformedArray } from '../0360-sort-transformed-array.js';

describe('0360-sort-transformed-array', () => {
  it("sortTransformedArray([-4, -2, 2, 4], 1...)", () => {
    const result = sortTransformedArray([-4, -2, 2, 4], 1, 3, 5);
    expect(result).toEqual([3, 9, 15, 33]);
  });

  it("sortTransformedArray([-4, -2, 2, 4], -1...)", () => {
    const result = sortTransformedArray([-4, -2, 2, 4], -1, 3, 5);
    expect(result).toEqual([-23, -5, 1, 7]);
  });

  it("sortTransformedArray([0], 1...)", () => {
    const result = sortTransformedArray([0], 1, 0, 0);
    expect(result).toEqual([0]);
  });

  it("sortTransformedArray([-1, 0, 1], 2...)", () => {
    const result = sortTransformedArray([-1, 0, 1], 2, -3, 2);
    expect(result).toEqual([1, 2, 7]);
  });

  it("sortTransformedArray([-3, -2, -1, 0, 1], 0...)", () => {
    const result = sortTransformedArray([-3, -2, -1, 0, 1], 0, 1, -1);
    expect(result).toEqual([-4, -3, -2, -1, 0]);
  });
});
