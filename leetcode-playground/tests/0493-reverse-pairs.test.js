import { reversePairs } from '../0493-reverse-pairs.js';

describe('0493-reverse-pairs', () => {
  it("reversePairs([1, 2, 3, 4, 5])", () => {
    const result = reversePairs([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("reversePairs([])", () => {
    const result = reversePairs([]);
    expect(result).toEqual(0);
  });

  it("reversePairs([1])", () => {
    const result = reversePairs([1]);
    expect(result).toEqual(0);
  });

  it("reversePairs([1, 1])", () => {
    const result = reversePairs([1, 1]);
    expect(result).toEqual(0);
  });

  it("reversePairs([3, 1, 4, 1, 5])", () => {
    const result = reversePairs([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("reversePairs([-1, 0, 1])", () => {
    const result = reversePairs([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
