import { largestSumOfAverages } from '../0813-largest-sum-of-averages.js';

describe('0813-largest-sum-of-averages', () => {
  it("largestSumOfAverages([2, 7, 11, 15], 9)", () => {
    const result = largestSumOfAverages([2, 7, 11, 15], 9);
    expect(result).toEqual(0);
  });

  it("largestSumOfAverages([3, 2, 4], 6)", () => {
    const result = largestSumOfAverages([3, 2, 4], 6);
    expect(result).toEqual(0);
  });

  it("largestSumOfAverages([3, 3], 6)", () => {
    const result = largestSumOfAverages([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("largestSumOfAverages([1, 2], 3)", () => {
    const result = largestSumOfAverages([1, 2], 3);
    expect(result).toEqual(0);
  });

  it("largestSumOfAverages([0, 4, 3, 0], 0)", () => {
    const result = largestSumOfAverages([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
