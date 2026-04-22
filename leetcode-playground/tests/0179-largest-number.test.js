import { largestNumber } from '../0179-largest-number.js';

describe('0179-largest-number', () => {
  it("largestNumber([1, 2, 3, 4, 5])", () => {
    const result = largestNumber([1, 2, 3, 4, 5]);
    expect(result).toEqual("54321");
  });

  it("largestNumber([])", () => {
    const result = largestNumber([]);
    expect(result).toEqual("");
  });

  it("largestNumber([1])", () => {
    const result = largestNumber([1]);
    expect(result).toEqual("1");
  });

  it("largestNumber([1, 1])", () => {
    const result = largestNumber([1, 1]);
    expect(result).toEqual("11");
  });

  it("largestNumber([3, 1, 4, 1, 5])", () => {
    const result = largestNumber([3, 1, 4, 1, 5]);
    expect(result).toEqual("54311");
  });

  it("largestNumber([-1, 0, 1])", () => {
    const result = largestNumber([-1, 0, 1]);
    expect(result).toEqual("-110");
  });
});
