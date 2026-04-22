import { findErrorNums } from '../0645-set-mismatch.js';

describe('0645-set-mismatch', () => {
  it("findErrorNums([1, 2, 3, 4, 5])", () => {
    const result = findErrorNums([1, 2, 3, 4, 5]);
    expect(result).toEqual([]);
  });

  it("findErrorNums([])", () => {
    const result = findErrorNums([]);
    expect(result).toEqual([]);
  });

  it("findErrorNums([1])", () => {
    const result = findErrorNums([1]);
    expect(result).toEqual([]);
  });

  it("findErrorNums([1, 1])", () => {
    const result = findErrorNums([1, 1]);
    expect(result).toEqual([1, 2]);
  });

  it("findErrorNums([3, 1, 4, 1, 5])", () => {
    const result = findErrorNums([3, 1, 4, 1, 5]);
    expect(result).toEqual([1, 2]);
  });

  it("findErrorNums([-1, 0, 1])", () => {
    const result = findErrorNums([-1, 0, 1]);
    expect(result).toEqual([3]);
  });
});
