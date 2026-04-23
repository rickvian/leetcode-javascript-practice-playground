import { missingNumber } from '../1228-missing-number-in-arithmetic-progression.js';

describe('1228-missing-number-in-arithmetic-progression', () => {
  it("missingNumber([1, 2, 3, 4, 5])", () => {
    const result = missingNumber([1, 2, 3, 4, 5]);
    expect(result).toEqual(1.8);
  });

  it("missingNumber([1])", () => {
    const result = missingNumber([1]);
    expect(result).toEqual(1);
  });

  it("missingNumber([1, 1])", () => {
    const result = missingNumber([1, 1]);
    expect(result).toEqual(1);
  });

  it("missingNumber([3, 1, 4, 1, 5])", () => {
    const result = missingNumber([3, 1, 4, 1, 5]);
    expect(result).toEqual(3.4);
  });

  it("missingNumber([-1, 0, 1])", () => {
    const result = missingNumber([-1, 0, 1]);
    expect(result).toEqual(-0.33333333333333337);
  });
});
