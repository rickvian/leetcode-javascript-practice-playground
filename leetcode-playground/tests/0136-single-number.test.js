import { singleNumber } from '../0136-single-number.js';

describe('0136-single-number', () => {
  it("singleNumber([1, 2, 3, 4, 5])", () => {
    const result = singleNumber([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("singleNumber([])", () => {
    const result = singleNumber([]);
    expect(result).toEqual(0);
  });

  it("singleNumber([1])", () => {
    const result = singleNumber([1]);
    expect(result).toEqual(1);
  });

  it("singleNumber([1, 1])", () => {
    const result = singleNumber([1, 1]);
    expect(result).toEqual(0);
  });

  it("singleNumber([3, 1, 4, 1, 5])", () => {
    const result = singleNumber([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("singleNumber([-1, 0, 1])", () => {
    const result = singleNumber([-1, 0, 1]);
    expect(result).toEqual(-2);
  });
});
