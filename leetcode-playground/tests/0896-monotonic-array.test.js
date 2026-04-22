import { isMonotonic } from '../0896-monotonic-array.js';

describe('0896-monotonic-array', () => {
  it("isMonotonic([1, 2, 3, 4, 5])", () => {
    const result = isMonotonic([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("isMonotonic([])", () => {
    const result = isMonotonic([]);
    expect(result).toEqual(true);
  });

  it("isMonotonic([1])", () => {
    const result = isMonotonic([1]);
    expect(result).toEqual(true);
  });

  it("isMonotonic([1, 1])", () => {
    const result = isMonotonic([1, 1]);
    expect(result).toEqual(true);
  });

  it("isMonotonic([3, 1, 4, 1, 5])", () => {
    const result = isMonotonic([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("isMonotonic([-1, 0, 1])", () => {
    const result = isMonotonic([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
