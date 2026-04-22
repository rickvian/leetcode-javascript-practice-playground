import { findClosestElements } from '../0658-find-k-closest-elements.js';

describe('0658-find-k-closest-elements', () => {
  it("findClosestElements([1, 2, 3])", () => {
    const result = findClosestElements([1, 2, 3]);
    expect(result).toEqual([]);
  });

  it("findClosestElements([])", () => {
    const result = findClosestElements([]);
    expect(result).toEqual([]);
  });

  it("findClosestElements([0])", () => {
    const result = findClosestElements([0]);
    expect(result).toEqual([]);
  });

  it("findClosestElements([-1, 0, 1])", () => {
    const result = findClosestElements([-1, 0, 1]);
    expect(result).toEqual([]);
  });
});
