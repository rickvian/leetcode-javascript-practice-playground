import { arrayNesting } from '../0565-array-nesting.js';

describe('0565-array-nesting', () => {
  it("arrayNesting([1, 2, 3, 4, 5])", () => {
    const result = arrayNesting([1, 2, 3, 4, 5]);
    expect(result).toEqual(6);
  });

  it("arrayNesting([])", () => {
    const result = arrayNesting([]);
    expect(result).toEqual(0);
  });

  it("arrayNesting([1])", () => {
    const result = arrayNesting([1]);
    expect(result).toEqual(2);
  });

  it("arrayNesting([1, 1])", () => {
    const result = arrayNesting([1, 1]);
    expect(result).toEqual(1);
  });

  it("arrayNesting([3, 1, 4, 1, 5])", () => {
    const result = arrayNesting([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("arrayNesting([-1, 0, 1])", () => {
    const result = arrayNesting([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
