import { shortestSubarray } from '../0862-shortest-subarray-with-sum-at-least-k.js';

describe('0862-shortest-subarray-with-sum-at-least-k', () => {
  it("shortestSubarray([2, 7, 11, 15], 9)", () => {
    const result = shortestSubarray([2, 7, 11, 15], 9);
    expect(result).toEqual(1);
  });

  it("shortestSubarray([3, 2, 4], 6)", () => {
    const result = shortestSubarray([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("shortestSubarray([3, 3], 6)", () => {
    const result = shortestSubarray([3, 3], 6);
    expect(result).toEqual(2);
  });

  it("shortestSubarray([-1, -2, -3, -4, -5], -8)", () => {
    const result = shortestSubarray([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(1);
  });

  it("shortestSubarray([1, 2], 3)", () => {
    const result = shortestSubarray([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("shortestSubarray([0, 4, 3, 0], 0)", () => {
    const result = shortestSubarray([0, 4, 3, 0], 0);
    expect(result).toEqual(1);
  });
});
