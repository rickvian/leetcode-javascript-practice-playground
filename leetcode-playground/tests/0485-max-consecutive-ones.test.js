import { findMaxConsecutiveOnes } from '../0485-max-consecutive-ones.js';

describe('0485-max-consecutive-ones', () => {
  it("findMaxConsecutiveOnes([1, 2, 3, 4, 5])", () => {
    const result = findMaxConsecutiveOnes([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("findMaxConsecutiveOnes([])", () => {
    const result = findMaxConsecutiveOnes([]);
    expect(result).toEqual(0);
  });

  it("findMaxConsecutiveOnes([1])", () => {
    const result = findMaxConsecutiveOnes([1]);
    expect(result).toEqual(1);
  });

  it("findMaxConsecutiveOnes([1, 1])", () => {
    const result = findMaxConsecutiveOnes([1, 1]);
    expect(result).toEqual(2);
  });

  it("findMaxConsecutiveOnes([3, 1, 4, 1, 5])", () => {
    const result = findMaxConsecutiveOnes([3, 1, 4, 1, 5]);
    expect(result).toEqual(5);
  });

  it("findMaxConsecutiveOnes([-1, 0, 1])", () => {
    const result = findMaxConsecutiveOnes([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
