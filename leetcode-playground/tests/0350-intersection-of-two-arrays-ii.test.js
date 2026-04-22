import { intersect } from '../0350-intersection-of-two-arrays-ii.js';

describe('0350-intersection-of-two-arrays-ii', () => {
  it("intersect([1, 2, 3], [4, 5, 6])", () => {
    const result = intersect([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([]);
  });

  it("intersect([1], [1])", () => {
    const result = intersect([1], [1]);
    expect(result).toEqual([1]);
  });

  it("intersect([1, 3], [2])", () => {
    const result = intersect([1, 3], [2]);
    expect(result).toEqual([]);
  });

  it("intersect([1, 2], [3, 4])", () => {
    const result = intersect([1, 2], [3, 4]);
    expect(result).toEqual([]);
  });
});
