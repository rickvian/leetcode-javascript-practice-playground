import { sumOfDigits } from '../1085-sum-of-digits-in-the-minimum-number.js';

describe('1085-sum-of-digits-in-the-minimum-number', () => {
  it("sumOfDigits([1, 2, 3, 4, 5])", () => {
    const result = sumOfDigits([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("sumOfDigits([])", () => {
    const result = sumOfDigits([]);
    expect(result).toEqual(0);
  });

  it("sumOfDigits([1])", () => {
    const result = sumOfDigits([1]);
    expect(result).toEqual(0);
  });

  it("sumOfDigits([1, 1])", () => {
    const result = sumOfDigits([1, 1]);
    expect(result).toEqual(0);
  });

  it("sumOfDigits([3, 1, 4, 1, 5])", () => {
    const result = sumOfDigits([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("sumOfDigits([-1, 0, 1])", () => {
    const result = sumOfDigits([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
