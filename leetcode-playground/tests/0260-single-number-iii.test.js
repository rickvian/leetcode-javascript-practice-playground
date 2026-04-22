import { singleNumber } from '../0260-single-number-iii.js';

describe('0260-single-number-iii', () => {
  it("singleNumber([1, 2, 3, 4, 5])", () => {
    const result = singleNumber([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("singleNumber([])", () => {
    const result = singleNumber([]);
    expect(result).toEqual([]);
  });

  it("singleNumber([1])", () => {
    const result = singleNumber([1]);
    expect(result).toEqual([1]);
  });

  it("singleNumber([1, 1])", () => {
    const result = singleNumber([1, 1]);
    expect(result).toEqual([]);
  });

  it("singleNumber([3, 1, 4, 1, 5])", () => {
    const result = singleNumber([3, 1, 4, 1, 5]);
    expect(result).toEqual([3, 4, 5]);
  });

  it("singleNumber([-1, 0, 1])", () => {
    const result = singleNumber([-1, 0, 1]);
    expect(result).toEqual([-1, 0, 1]);
  });
});
