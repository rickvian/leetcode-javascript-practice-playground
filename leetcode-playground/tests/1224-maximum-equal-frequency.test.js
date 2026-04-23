import { maxEqualFreq } from '../1224-maximum-equal-frequency.js';

describe('1224-maximum-equal-frequency', () => {
  it("maxEqualFreq([1, 2, 3, 4, 5])", () => {
    const result = maxEqualFreq([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("maxEqualFreq([])", () => {
    const result = maxEqualFreq([]);
    expect(result).toEqual(0);
  });

  it("maxEqualFreq([1])", () => {
    const result = maxEqualFreq([1]);
    expect(result).toEqual(1);
  });

  it("maxEqualFreq([1, 1])", () => {
    const result = maxEqualFreq([1, 1]);
    expect(result).toEqual(2);
  });

  it("maxEqualFreq([3, 1, 4, 1, 5])", () => {
    const result = maxEqualFreq([3, 1, 4, 1, 5]);
    expect(result).toEqual(5);
  });

  it("maxEqualFreq([-1, 0, 1])", () => {
    const result = maxEqualFreq([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
