import { makeArrayIncreasing } from '../1187-make-array-strictly-increasing.js';

describe('1187-make-array-strictly-increasing', () => {
  it("makeArrayIncreasing([1, 2, 3], [4, 5, 6])", () => {
    const result = makeArrayIncreasing([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(0);
  });

  it("makeArrayIncreasing([1], [1])", () => {
    const result = makeArrayIncreasing([1], [1]);
    expect(result).toEqual(0);
  });

  it("makeArrayIncreasing([1, 3], [2])", () => {
    const result = makeArrayIncreasing([1, 3], [2]);
    expect(result).toEqual(0);
  });

  it("makeArrayIncreasing([1, 2], [3, 4])", () => {
    const result = makeArrayIncreasing([1, 2], [3, 4]);
    expect(result).toEqual(0);
  });
});
