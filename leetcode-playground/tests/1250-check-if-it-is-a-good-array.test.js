import { isGoodArray } from '../1250-check-if-it-is-a-good-array.js';

describe('1250-check-if-it-is-a-good-array', () => {
  it("isGoodArray([1, 2, 3, 4, 5])", () => {
    const result = isGoodArray([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("isGoodArray([])", () => {
    const result = isGoodArray([]);
    expect(result).toEqual(false);
  });

  it("isGoodArray([1])", () => {
    const result = isGoodArray([1]);
    expect(result).toEqual(true);
  });

  it("isGoodArray([1, 1])", () => {
    const result = isGoodArray([1, 1]);
    expect(result).toEqual(true);
  });

  it("isGoodArray([3, 1, 4, 1, 5])", () => {
    const result = isGoodArray([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("isGoodArray([-1, 0, 1])", () => {
    const result = isGoodArray([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
