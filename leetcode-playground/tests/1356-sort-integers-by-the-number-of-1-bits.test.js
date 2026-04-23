import { sortByBits } from '../1356-sort-integers-by-the-number-of-1-bits.js';

describe('1356-sort-integers-by-the-number-of-1-bits', () => {
  it("sortByBits([1, 2, 3, 4, 5])", () => {
    const result = sortByBits([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 4, 3, 5]);
  });

  it("sortByBits([])", () => {
    const result = sortByBits([]);
    expect(result).toEqual([]);
  });

  it("sortByBits([1])", () => {
    const result = sortByBits([1]);
    expect(result).toEqual([1]);
  });

  it("sortByBits([1, 1])", () => {
    const result = sortByBits([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("sortByBits([3, 1, 4, 1, 5])", () => {
    const result = sortByBits([3, 1, 4, 1, 5]);
    expect(result).toEqual([1, 1, 4, 3, 5]);
  });

  it("sortByBits([-1, 0, 1])", () => {
    const result = sortByBits([-1, 0, 1]);
    expect(result).toEqual([0, 1, -1]);
  });
});
