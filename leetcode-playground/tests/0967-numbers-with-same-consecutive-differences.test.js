import { numsSameConsecDiff } from '../0967-numbers-with-same-consecutive-differences.js';

describe('0967-numbers-with-same-consecutive-differences', () => {
  it("numsSameConsecDiff(1, 1)", () => {
    const result = numsSameConsecDiff(1, 1);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("numsSameConsecDiff(0, 0)", () => {
    const result = numsSameConsecDiff(0, 0);
    expect(result).toEqual([]);
  });

  it("numsSameConsecDiff(3, 7)", () => {
    const result = numsSameConsecDiff(3, 7);
    expect(result).toEqual([181, 292, 707, 818, 929]);
  });

  it("numsSameConsecDiff(100, 1000)", () => {
    const result = numsSameConsecDiff(100, 1000);
    expect(result).toEqual([]);
  });
});
