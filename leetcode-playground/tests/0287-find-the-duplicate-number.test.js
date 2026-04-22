import { findDuplicate } from '../0287-find-the-duplicate-number.js';

describe('0287-find-the-duplicate-number', () => {
  it("findDuplicate([1, 1])", () => {
    const result = findDuplicate([1, 1]);
    expect(result).toEqual(1);
  });

  it("findDuplicate([3, 1, 4, 1, 5])", () => {
    const result = findDuplicate([3, 1, 4, 1, 5]);
    expect(result).toEqual(1);
  });
});
