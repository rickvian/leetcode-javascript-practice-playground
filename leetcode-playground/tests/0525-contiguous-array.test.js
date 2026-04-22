import { findMaxLength } from '../0525-contiguous-array.js';

describe('0525-contiguous-array', () => {
  it("findMaxLength([1, 2, 3, 4, 5])", () => {
    const result = findMaxLength([1, 2, 3, 4, 5]);
    expect(result).toEqual(2);
  });

  it("findMaxLength([])", () => {
    const result = findMaxLength([]);
    expect(result).toEqual(0);
  });

  it("findMaxLength([1])", () => {
    const result = findMaxLength([1]);
    expect(result).toEqual(0);
  });

  it("findMaxLength([1, 1])", () => {
    const result = findMaxLength([1, 1]);
    expect(result).toEqual(0);
  });

  it("findMaxLength([3, 1, 4, 1, 5])", () => {
    const result = findMaxLength([3, 1, 4, 1, 5]);
    expect(result).toEqual(4);
  });

  it("findMaxLength([-1, 0, 1])", () => {
    const result = findMaxLength([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
