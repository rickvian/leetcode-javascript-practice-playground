import { majorityElement } from '../0169-majority-element.js';

describe('0169-majority-element', () => {
  it("majorityElement([1, 2, 3, 4, 5])", () => {
    const result = majorityElement([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("majorityElement([1])", () => {
    const result = majorityElement([1]);
    expect(result).toEqual(1);
  });

  it("majorityElement([1, 1])", () => {
    const result = majorityElement([1, 1]);
    expect(result).toEqual(1);
  });

  it("majorityElement([3, 1, 4, 1, 5])", () => {
    const result = majorityElement([3, 1, 4, 1, 5]);
    expect(result).toEqual(1);
  });

  it("majorityElement([-1, 0, 1])", () => {
    const result = majorityElement([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
