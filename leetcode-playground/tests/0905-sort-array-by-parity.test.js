import { sortArrayByParity } from '../0905-sort-array-by-parity.js';

describe('0905-sort-array-by-parity', () => {
  it("sortArrayByParity([1, 2, 3, 4, 5])", () => {
    const result = sortArrayByParity([1, 2, 3, 4, 5]);
    expect(result).toEqual([4, 2, 1, 3, 5]);
  });

  it("sortArrayByParity([])", () => {
    const result = sortArrayByParity([]);
    expect(result).toEqual([]);
  });

  it("sortArrayByParity([1])", () => {
    const result = sortArrayByParity([1]);
    expect(result).toEqual([1]);
  });

  it("sortArrayByParity([1, 1])", () => {
    const result = sortArrayByParity([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("sortArrayByParity([3, 1, 4, 1, 5])", () => {
    const result = sortArrayByParity([3, 1, 4, 1, 5]);
    expect(result).toEqual([4, 3, 1, 1, 5]);
  });

  it("sortArrayByParity([-1, 0, 1])", () => {
    const result = sortArrayByParity([-1, 0, 1]);
    expect(result).toEqual([0, -1, 1]);
  });
});
