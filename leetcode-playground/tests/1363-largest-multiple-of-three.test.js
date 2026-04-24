import { largestMultipleOfThree } from '../1363-largest-multiple-of-three.js';

describe('1363-largest-multiple-of-three', () => {
  it("largestMultipleOfThree([1, 2, 3, 4, 5])", () => {
    const result = largestMultipleOfThree([1, 2, 3, 4, 5]);
    expect(result).toEqual("54321");
  });

  it("largestMultipleOfThree([])", () => {
    const result = largestMultipleOfThree([]);
    expect(result).toEqual("");
  });

  it("largestMultipleOfThree([1])", () => {
    const result = largestMultipleOfThree([1]);
    expect(result).toEqual("");
  });

  it("largestMultipleOfThree([1, 1])", () => {
    const result = largestMultipleOfThree([1, 1]);
    expect(result).toEqual("");
  });

  it("largestMultipleOfThree([3, 1, 4, 1, 5])", () => {
    const result = largestMultipleOfThree([3, 1, 4, 1, 5]);
    expect(result).toEqual("4311");
  });

  it("largestMultipleOfThree([-1, 0, 1])", () => {
    const result = largestMultipleOfThree([-1, 0, 1]);
    expect(result).toEqual("1");
  });
});
