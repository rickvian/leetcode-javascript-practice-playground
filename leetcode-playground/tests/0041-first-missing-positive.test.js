import { firstMissingPositive } from '../0041-first-missing-positive.js';

describe('0041-first-missing-positive', () => {
  it("firstMissingPositive([1, 2, 3, 4, 5])", () => {
    const result = firstMissingPositive([1, 2, 3, 4, 5]);
    expect(result).toEqual(6);
  });

  it("firstMissingPositive([])", () => {
    const result = firstMissingPositive([]);
    expect(result).toEqual(1);
  });

  it("firstMissingPositive([1])", () => {
    const result = firstMissingPositive([1]);
    expect(result).toEqual(2);
  });

  it("firstMissingPositive([1, 1])", () => {
    const result = firstMissingPositive([1, 1]);
    expect(result).toEqual(2);
  });

  it("firstMissingPositive([1, 1, 3, 4, 5])", () => {
    const result = firstMissingPositive([1, 1, 3, 4, 5]);
    expect(result).toEqual(2);
  });

  it("firstMissingPositive([1, 0, -1])", () => {
    const result = firstMissingPositive([1, 0, -1]);
    expect(result).toEqual(2);
  });
});
