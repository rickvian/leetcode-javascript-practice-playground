import { largestTimeFromDigits } from '../0949-largest-time-for-given-digits.js';

describe('0949-largest-time-for-given-digits', () => {
  it("largestTimeFromDigits([1, 2, 3, 4, 5])", () => {
    const result = largestTimeFromDigits([1, 2, 3, 4, 5]);
    expect(result).toEqual("23:54");
  });

  it("largestTimeFromDigits([])", () => {
    const result = largestTimeFromDigits([]);
    expect(result).toEqual("");
  });

  it("largestTimeFromDigits([1])", () => {
    const result = largestTimeFromDigits([1]);
    expect(result).toEqual("");
  });

  it("largestTimeFromDigits([1, 1])", () => {
    const result = largestTimeFromDigits([1, 1]);
    expect(result).toEqual("");
  });

  it("largestTimeFromDigits([3, 1, 4, 1, 5])", () => {
    const result = largestTimeFromDigits([3, 1, 4, 1, 5]);
    expect(result).toEqual("15:43");
  });

  it("largestTimeFromDigits([-1, 0, 1])", () => {
    const result = largestTimeFromDigits([-1, 0, 1]);
    expect(result).toEqual("");
  });
});
