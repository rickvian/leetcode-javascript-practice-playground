import { maxArea } from '../0011-container-with-most-water.js';

describe('0011-container-with-most-water', () => {
  it("maxArea([1, 2, 3, 4, 5])", () => {
    const result = maxArea([1, 2, 3, 4, 5]);
    expect(result).toEqual(6);
  });

  it("maxArea([])", () => {
    const result = maxArea([]);
    expect(result).toEqual(0);
  });

  it("maxArea([1])", () => {
    const result = maxArea([1]);
    expect(result).toEqual(0);
  });

  it("maxArea([1, 1])", () => {
    const result = maxArea([1, 1]);
    expect(result).toEqual(1);
  });

  it("maxArea([3, 1, 4, 1, 5])", () => {
    const result = maxArea([3, 1, 4, 1, 5]);
    expect(result).toEqual(12);
  });

  it("maxArea([-1, 0, 1])", () => {
    const result = maxArea([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
