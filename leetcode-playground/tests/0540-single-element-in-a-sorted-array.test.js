import { singleNonDuplicate } from '../0540-single-element-in-a-sorted-array.js';

describe('0540-single-element-in-a-sorted-array', () => {
  it("singleNonDuplicate([1, 2, 3, 4, 5])", () => {
    const result = singleNonDuplicate([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("singleNonDuplicate([1])", () => {
    const result = singleNonDuplicate([1]);
    expect(result).toEqual(1);
  });

  it("singleNonDuplicate([3, 1, 4, 1, 5])", () => {
    const result = singleNonDuplicate([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("singleNonDuplicate([-1, 0, 1])", () => {
    const result = singleNonDuplicate([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
