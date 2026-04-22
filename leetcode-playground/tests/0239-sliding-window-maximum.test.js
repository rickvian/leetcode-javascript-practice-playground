import { maxSlidingWindow } from '../0239-sliding-window-maximum.js';

describe('0239-sliding-window-maximum', () => {
  it("maxSlidingWindow([2, 7, 11, 15], 9)", () => {
    const result = maxSlidingWindow([2, 7, 11, 15], 9);
    expect(result).toEqual([]);
  });

  it("maxSlidingWindow([3, 2, 4], 6)", () => {
    const result = maxSlidingWindow([3, 2, 4], 6);
    expect(result).toEqual([]);
  });

  it("maxSlidingWindow([3, 3], 6)", () => {
    const result = maxSlidingWindow([3, 3], 6);
    expect(result).toEqual([]);
  });

  it("maxSlidingWindow([-1, -2, -3, -4, -5], -8)", () => {
    const result = maxSlidingWindow([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual([-1, -2, -3, -4, -5]);
  });

  it("maxSlidingWindow([1, 2], 3)", () => {
    const result = maxSlidingWindow([1, 2], 3);
    expect(result).toEqual([]);
  });

  it("maxSlidingWindow([0, 4, 3, 0], 0)", () => {
    const result = maxSlidingWindow([0, 4, 3, 0], 0);
    expect(result).toEqual([0, 4, 3, 0]);
  });
});
