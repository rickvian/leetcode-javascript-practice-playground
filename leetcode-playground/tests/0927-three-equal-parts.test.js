import { threeEqualParts } from '../0927-three-equal-parts.js';

describe('0927-three-equal-parts', () => {
  it("threeEqualParts([1, 2, 3, 4, 5])", () => {
    const result = threeEqualParts([1, 2, 3, 4, 5]);
    expect(result).toEqual([-1, -1]);
  });

  it("threeEqualParts([])", () => {
    const result = threeEqualParts([]);
    expect(result).toEqual([0, -1]);
  });

  it("threeEqualParts([1])", () => {
    const result = threeEqualParts([1]);
    expect(result).toEqual([-1, -1]);
  });

  it("threeEqualParts([1, 1])", () => {
    const result = threeEqualParts([1, 1]);
    expect(result).toEqual([-1, -1]);
  });

  it("threeEqualParts([3, 1, 4, 1, 5])", () => {
    const result = threeEqualParts([3, 1, 4, 1, 5]);
    expect(result).toEqual([-1, -1]);
  });

  it("threeEqualParts([-1, 0, 1])", () => {
    const result = threeEqualParts([-1, 0, 1]);
    expect(result).toEqual([0, 2]);
  });
});
