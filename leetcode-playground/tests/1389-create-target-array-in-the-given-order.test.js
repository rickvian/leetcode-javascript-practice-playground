import { createTargetArray } from '../1389-create-target-array-in-the-given-order.js';

describe('1389-create-target-array-in-the-given-order', () => {
  it("createTargetArray([1, 2, 3], [4, 5, 6])", () => {
    const result = createTargetArray([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("createTargetArray([1], [1])", () => {
    const result = createTargetArray([1], [1]);
    expect(result).toEqual([1]);
  });

  it("createTargetArray([1, 3], [2])", () => {
    const result = createTargetArray([1, 3], [2]);
    expect(result).toEqual([1]);
  });

  it("createTargetArray([1, 2], [3, 4])", () => {
    const result = createTargetArray([1, 2], [3, 4]);
    expect(result).toEqual([1, 2]);
  });
});
