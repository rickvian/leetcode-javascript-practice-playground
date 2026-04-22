import { containsDuplicate } from '../0217-contains-duplicate.js';

describe('0217-contains-duplicate', () => {
  it("containsDuplicate([1, 2, 3, 4, 5])", () => {
    const result = containsDuplicate([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("containsDuplicate([])", () => {
    const result = containsDuplicate([]);
    expect(result).toEqual(false);
  });

  it("containsDuplicate([1])", () => {
    const result = containsDuplicate([1]);
    expect(result).toEqual(false);
  });

  it("containsDuplicate([1, 1])", () => {
    const result = containsDuplicate([1, 1]);
    expect(result).toEqual(true);
  });

  it("containsDuplicate([3, 1, 4, 1, 5])", () => {
    const result = containsDuplicate([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("containsDuplicate([-1, 0, 1])", () => {
    const result = containsDuplicate([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
