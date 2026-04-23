import { getNoZeroIntegers } from '../1317-convert-integer-to-the-sum-of-two-no-zero-integers.js';

describe('1317-convert-integer-to-the-sum-of-two-no-zero-integers', () => {
  it("getNoZeroIntegers(121)", () => {
    const result = getNoZeroIntegers(121);
    expect(result).toEqual([119, 2]);
  });

  it("getNoZeroIntegers(-121)", () => {
    const result = getNoZeroIntegers(-121);
    expect(result).toEqual([-122, 1]);
  });

  it("getNoZeroIntegers(10)", () => {
    const result = getNoZeroIntegers(10);
    expect(result).toEqual([9, 1]);
  });

  it("getNoZeroIntegers(-1)", () => {
    const result = getNoZeroIntegers(-1);
    expect(result).toEqual([-2, 1]);
  });

  it("getNoZeroIntegers(1534236469)", () => {
    const result = getNoZeroIntegers(1534236469);
    expect(result).toEqual([1534236468, 1]);
  });
});
