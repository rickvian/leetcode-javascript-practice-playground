import { missingNumber } from '../0268-missing-number.js';

describe('0268-missing-number', () => {
  it("missingNumber([1, 2, 3, 4, 5])", () => {
    const result = missingNumber([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("missingNumber([])", () => {
    const result = missingNumber([]);
    expect(result).toEqual(0);
  });

  it("missingNumber([1])", () => {
    const result = missingNumber([1]);
    expect(result).toEqual(0);
  });

  it("missingNumber([1, 1])", () => {
    const result = missingNumber([1, 1]);
    expect(result).toEqual(1);
  });

  it("missingNumber([3, 1, 4, 1, 5])", () => {
    const result = missingNumber([3, 1, 4, 1, 5]);
    expect(result).toEqual(1);
  });

  it("missingNumber([-1, 0, 1])", () => {
    const result = missingNumber([-1, 0, 1]);
    expect(result).toEqual(6);
  });
});
