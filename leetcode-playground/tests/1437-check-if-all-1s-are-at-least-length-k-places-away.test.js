import { kLengthApart } from '../1437-check-if-all-1s-are-at-least-length-k-places-away.js';

describe('1437-check-if-all-1s-are-at-least-length-k-places-away', () => {
  it("kLengthApart([2, 7, 11, 15], 9)", () => {
    const result = kLengthApart([2, 7, 11, 15], 9);
    expect(result).toEqual(false);
  });

  it("kLengthApart([3, 2, 4], 6)", () => {
    const result = kLengthApart([3, 2, 4], 6);
    expect(result).toEqual(false);
  });

  it("kLengthApart([3, 3], 6)", () => {
    const result = kLengthApart([3, 3], 6);
    expect(result).toEqual(false);
  });

  it("kLengthApart([-1, -2, -3, -4, -5], -8)", () => {
    const result = kLengthApart([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(true);
  });

  it("kLengthApart([1, 2], 3)", () => {
    const result = kLengthApart([1, 2], 3);
    expect(result).toEqual(false);
  });

  it("kLengthApart([0, 4, 3, 0], 0)", () => {
    const result = kLengthApart([0, 4, 3, 0], 0);
    expect(result).toEqual(true);
  });
});
