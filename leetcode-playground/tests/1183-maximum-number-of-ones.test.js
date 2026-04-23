import { maximumNumberOfOnes } from '../1183-maximum-number-of-ones.js';

describe('1183-maximum-number-of-ones', () => {
  it("maximumNumberOfOnes([1, 2, 3])", () => {
    const result = maximumNumberOfOnes([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("maximumNumberOfOnes([])", () => {
    const result = maximumNumberOfOnes([]);
    expect(result).toEqual(0);
  });

  it("maximumNumberOfOnes([0])", () => {
    const result = maximumNumberOfOnes([0]);
    expect(result).toEqual(0);
  });

  it("maximumNumberOfOnes([-1, 0, 1])", () => {
    const result = maximumNumberOfOnes([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
