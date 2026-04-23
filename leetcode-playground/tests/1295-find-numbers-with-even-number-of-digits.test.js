import { findNumbers } from '../1295-find-numbers-with-even-number-of-digits.js';

describe('1295-find-numbers-with-even-number-of-digits', () => {
  it("findNumbers([1, 2, 3, 4, 5])", () => {
    const result = findNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("findNumbers([])", () => {
    const result = findNumbers([]);
    expect(result).toEqual(0);
  });

  it("findNumbers([1])", () => {
    const result = findNumbers([1]);
    expect(result).toEqual(0);
  });

  it("findNumbers([1, 1])", () => {
    const result = findNumbers([1, 1]);
    expect(result).toEqual(0);
  });

  it("findNumbers([3, 1, 4, 1, 5])", () => {
    const result = findNumbers([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("findNumbers([-1, 0, 1])", () => {
    const result = findNumbers([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
