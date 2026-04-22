import { thirdMax } from '../0414-third-maximum-number.js';

describe('0414-third-maximum-number', () => {
  it("thirdMax([1, 2, 3, 4, 5])", () => {
    const result = thirdMax([1, 2, 3, 4, 5]);
    expect(result).toEqual(3);
  });

  it("thirdMax([1])", () => {
    const result = thirdMax([1]);
    expect(result).toEqual(1);
  });

  it("thirdMax([1, 1])", () => {
    const result = thirdMax([1, 1]);
    expect(result).toEqual(1);
  });

  it("thirdMax([3, 1, 4, 1, 5])", () => {
    const result = thirdMax([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("thirdMax([-1, 0, 1])", () => {
    const result = thirdMax([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
