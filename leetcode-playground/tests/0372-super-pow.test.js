import { superPow } from '../0372-super-pow.js';

describe('0372-super-pow', () => {
  it("superPow(2, [3, 2, 6, 5, 0, 3])", () => {
    const result = superPow(2, [3, 2, 6, 5, 0, 3]);
    expect(result).toEqual(9);
  });

  it("superPow(2, [2, 1])", () => {
    const result = superPow(2, [2, 1]);
    expect(result).toEqual(736);
  });

  it("superPow(0, [3, 2, 6])", () => {
    const result = superPow(0, [3, 2, 6]);
    expect(result).toEqual(0);
  });

  it("superPow(1, [1, 2, 3])", () => {
    const result = superPow(1, [1, 2, 3]);
    expect(result).toEqual(1);
  });

  it("superPow(3, [1, 2, 3, 4, 5])", () => {
    const result = superPow(3, [1, 2, 3, 4, 5]);
    expect(result).toEqual(944);
  });

  it("superPow(1, [7, 6, 4, 3, 1])", () => {
    const result = superPow(1, [7, 6, 4, 3, 1]);
    expect(result).toEqual(1);
  });
});
