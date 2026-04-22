import { findMaximumXOR } from '../0421-maximum-xor-of-two-numbers-in-an-array.js';

describe('0421-maximum-xor-of-two-numbers-in-an-array', () => {
  it("findMaximumXOR([1, 2, 3, 4, 5])", () => {
    const result = findMaximumXOR([1, 2, 3, 4, 5]);
    expect(result).toEqual(7);
  });

  it("findMaximumXOR([])", () => {
    const result = findMaximumXOR([]);
    expect(result).toEqual(0);
  });

  it("findMaximumXOR([1])", () => {
    const result = findMaximumXOR([1]);
    expect(result).toEqual(0);
  });

  it("findMaximumXOR([1, 1])", () => {
    const result = findMaximumXOR([1, 1]);
    expect(result).toEqual(0);
  });

  it("findMaximumXOR([3, 1, 4, 1, 5])", () => {
    const result = findMaximumXOR([3, 1, 4, 1, 5]);
    expect(result).toEqual(7);
  });

  it("findMaximumXOR([-1, 0, 1])", () => {
    const result = findMaximumXOR([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
