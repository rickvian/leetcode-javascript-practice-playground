import { largestUniqueNumber } from '../1133-largest-unique-number.js';

describe('1133-largest-unique-number', () => {
  it("largestUniqueNumber([1, 2, 3, 4, 5])", () => {
    const result = largestUniqueNumber([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("largestUniqueNumber([])", () => {
    const result = largestUniqueNumber([]);
    expect(result).toEqual(-1);
  });

  it("largestUniqueNumber([1])", () => {
    const result = largestUniqueNumber([1]);
    expect(result).toEqual(1);
  });

  it("largestUniqueNumber([1, 1])", () => {
    const result = largestUniqueNumber([1, 1]);
    expect(result).toEqual(-1);
  });

  it("largestUniqueNumber([3, 1, 4, 1, 5])", () => {
    const result = largestUniqueNumber([3, 1, 4, 1, 5]);
    expect(result).toEqual(5);
  });

  it("largestUniqueNumber([-1, 0, 1])", () => {
    const result = largestUniqueNumber([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
