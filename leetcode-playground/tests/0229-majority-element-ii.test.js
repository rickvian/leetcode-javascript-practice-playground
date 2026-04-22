import { majorityElement } from '../0229-majority-element-ii.js';

describe('0229-majority-element-ii', () => {
  it("majorityElement([1, 2, 3, 4, 5])", () => {
    const result = majorityElement([1, 2, 3, 4, 5]);
    expect(result).toEqual([]);
  });

  it("majorityElement([])", () => {
    const result = majorityElement([]);
    expect(result).toEqual([]);
  });

  it("majorityElement([1])", () => {
    const result = majorityElement([1]);
    expect(result).toEqual([1]);
  });

  it("majorityElement([1, 1])", () => {
    const result = majorityElement([1, 1]);
    expect(result).toEqual([1]);
  });

  it("majorityElement([3, 1, 4, 1, 5])", () => {
    const result = majorityElement([3, 1, 4, 1, 5]);
    expect(result).toEqual([1]);
  });

  it("majorityElement([-1, 0, 1])", () => {
    const result = majorityElement([-1, 0, 1]);
    expect(result).toEqual([]);
  });
});
