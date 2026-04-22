import { findUnsortedSubarray } from '../0581-shortest-unsorted-continuous-subarray.js';

describe('0581-shortest-unsorted-continuous-subarray', () => {
  it("findUnsortedSubarray([1, 2, 3, 4, 5])", () => {
    const result = findUnsortedSubarray([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("findUnsortedSubarray([])", () => {
    const result = findUnsortedSubarray([]);
    expect(result).toEqual(0);
  });

  it("findUnsortedSubarray([1])", () => {
    const result = findUnsortedSubarray([1]);
    expect(result).toEqual(0);
  });

  it("findUnsortedSubarray([1, 1])", () => {
    const result = findUnsortedSubarray([1, 1]);
    expect(result).toEqual(0);
  });

  it("findUnsortedSubarray([3, 1, 4, 1, 5])", () => {
    const result = findUnsortedSubarray([3, 1, 4, 1, 5]);
    expect(result).toEqual(4);
  });

  it("findUnsortedSubarray([-1, 0, 1])", () => {
    const result = findUnsortedSubarray([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
