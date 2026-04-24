import { smallerNumbersThanCurrent } from '../1365-how-many-numbers-are-smaller-than-the-current-number.js';

describe('1365-how-many-numbers-are-smaller-than-the-current-number', () => {
  it("smallerNumbersThanCurrent([1, 2, 3, 4, 5])", () => {
    const result = smallerNumbersThanCurrent([1, 2, 3, 4, 5]);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it("smallerNumbersThanCurrent([])", () => {
    const result = smallerNumbersThanCurrent([]);
    expect(result).toEqual([]);
  });

  it("smallerNumbersThanCurrent([1])", () => {
    const result = smallerNumbersThanCurrent([1]);
    expect(result).toEqual([0]);
  });

  it("smallerNumbersThanCurrent([1, 1])", () => {
    const result = smallerNumbersThanCurrent([1, 1]);
    expect(result).toEqual([0, 0]);
  });

  it("smallerNumbersThanCurrent([3, 1, 4, 1, 5])", () => {
    const result = smallerNumbersThanCurrent([3, 1, 4, 1, 5]);
    expect(result).toEqual([2, 0, 3, 0, 4]);
  });

  it("smallerNumbersThanCurrent([-1, 0, 1])", () => {
    const result = smallerNumbersThanCurrent([-1, 0, 1]);
    expect(result).toEqual([0, 1, 2]);
  });
});
