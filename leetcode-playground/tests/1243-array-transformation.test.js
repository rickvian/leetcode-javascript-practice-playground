import { transformArray } from '../1243-array-transformation.js';

describe('1243-array-transformation', () => {
  it("transformArray([1, 2, 3, 4, 5])", () => {
    const result = transformArray([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("transformArray([])", () => {
    const result = transformArray([]);
    expect(result).toEqual([]);
  });

  it("transformArray([1])", () => {
    const result = transformArray([1]);
    expect(result).toEqual([1]);
  });

  it("transformArray([1, 1])", () => {
    const result = transformArray([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("transformArray([3, 1, 4, 1, 5])", () => {
    const result = transformArray([3, 1, 4, 1, 5]);
    expect(result).toEqual([3, 3, 3, 3, 5]);
  });

  it("transformArray([-1, 0, 1])", () => {
    const result = transformArray([-1, 0, 1]);
    expect(result).toEqual([-1, 0, 1]);
  });
});
