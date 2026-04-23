import { sortArrayByParityII } from '../0922-sort-array-by-parity-ii.js';

describe('0922-sort-array-by-parity-ii', () => {
  it("sortArrayByParityII([1, 2, 3, 4, 5])", () => {
    const result = sortArrayByParityII([1, 2, 3, 4, 5]);
    expect(result).toEqual([2, 1, 4, 3, 5]);
  });

  it("sortArrayByParityII([])", () => {
    const result = sortArrayByParityII([]);
    expect(result).toEqual([]);
  });

  it("sortArrayByParityII([1])", () => {
    const result = sortArrayByParityII([1]);
    expect(result).toEqual([1]);
  });

  it("sortArrayByParityII([1, 1])", () => {
    const result = sortArrayByParityII([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("sortArrayByParityII([3, 1, 4, 1, 5])", () => {
    const result = sortArrayByParityII([3, 1, 4, 1, 5]);
    expect(result).toEqual([3, 1, 4, 1, 5]);
  });

  it("sortArrayByParityII([-1, 0, 1])", () => {
    const result = sortArrayByParityII([-1, 0, 1]);
    expect(result).toEqual([0, -1, 1]);
  });
});
