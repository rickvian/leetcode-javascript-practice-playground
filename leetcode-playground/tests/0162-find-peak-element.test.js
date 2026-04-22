import { findPeakElement } from '../0162-find-peak-element.js';

describe('0162-find-peak-element', () => {
  it("findPeakElement([1, 2, 3, 4, 5])", () => {
    const result = findPeakElement([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("findPeakElement([])", () => {
    const result = findPeakElement([]);
    expect(result).toEqual(0);
  });

  it("findPeakElement([1])", () => {
    const result = findPeakElement([1]);
    expect(result).toEqual(0);
  });

  it("findPeakElement([1, 1])", () => {
    const result = findPeakElement([1, 1]);
    expect(result).toEqual(1);
  });

  it("findPeakElement([3, 1, 4, 1, 5])", () => {
    const result = findPeakElement([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("findPeakElement([-1, 0, 1])", () => {
    const result = findPeakElement([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
