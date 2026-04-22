import { findShortestSubArray } from '../0697-degree-of-an-array.js';

describe('0697-degree-of-an-array', () => {
  it("findShortestSubArray([1, 2, 3, 4, 5])", () => {
    const result = findShortestSubArray([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("findShortestSubArray([1])", () => {
    const result = findShortestSubArray([1]);
    expect(result).toEqual(1);
  });

  it("findShortestSubArray([1, 1])", () => {
    const result = findShortestSubArray([1, 1]);
    expect(result).toEqual(2);
  });

  it("findShortestSubArray([3, 1, 4, 1, 5])", () => {
    const result = findShortestSubArray([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("findShortestSubArray([-1, 0, 1])", () => {
    const result = findShortestSubArray([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
