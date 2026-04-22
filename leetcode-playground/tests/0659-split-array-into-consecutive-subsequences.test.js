import { isPossible } from '../0659-split-array-into-consecutive-subsequences.js';

describe('0659-split-array-into-consecutive-subsequences', () => {
  it("isPossible([1, 2, 3, 4, 5])", () => {
    const result = isPossible([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("isPossible([])", () => {
    const result = isPossible([]);
    expect(result).toEqual(true);
  });

  it("isPossible([1])", () => {
    const result = isPossible([1]);
    expect(result).toEqual(false);
  });

  it("isPossible([1, 1])", () => {
    const result = isPossible([1, 1]);
    expect(result).toEqual(false);
  });

  it("isPossible([3, 1, 4, 1, 5])", () => {
    const result = isPossible([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("isPossible([-1, 0, 1])", () => {
    const result = isPossible([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
