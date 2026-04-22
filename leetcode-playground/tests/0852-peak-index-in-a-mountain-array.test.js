import { peakIndexInMountainArray } from '../0852-peak-index-in-a-mountain-array.js';

describe('0852-peak-index-in-a-mountain-array', () => {
  it("peakIndexInMountainArray([1, 2, 3, 4, 5])", () => {
    const result = peakIndexInMountainArray([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("peakIndexInMountainArray([])", () => {
    const result = peakIndexInMountainArray([]);
    expect(result).toEqual(0);
  });

  it("peakIndexInMountainArray([1])", () => {
    const result = peakIndexInMountainArray([1]);
    expect(result).toEqual(0);
  });

  it("peakIndexInMountainArray([1, 1])", () => {
    const result = peakIndexInMountainArray([1, 1]);
    expect(result).toEqual(1);
  });

  it("peakIndexInMountainArray([3, 1, 4, 1, 5])", () => {
    const result = peakIndexInMountainArray([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("peakIndexInMountainArray([-1, 0, 1])", () => {
    const result = peakIndexInMountainArray([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
