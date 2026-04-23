import { minimumAbsDifference } from '../1200-minimum-absolute-difference.js';

describe('1200-minimum-absolute-difference', () => {
  it("minimumAbsDifference([1, 2, 3, 4, 5])", () => {
    const result = minimumAbsDifference([1, 2, 3, 4, 5]);
    expect(result).toEqual([[1, 2], [2, 3], [3, 4], [4, 5]]);
  });

  it("minimumAbsDifference([])", () => {
    const result = minimumAbsDifference([]);
    expect(result).toEqual([]);
  });

  it("minimumAbsDifference([1])", () => {
    const result = minimumAbsDifference([1]);
    expect(result).toEqual([]);
  });

  it("minimumAbsDifference([1, 1])", () => {
    const result = minimumAbsDifference([1, 1]);
    expect(result).toEqual([[1, 1]]);
  });

  it("minimumAbsDifference([3, 1, 4, 1, 5])", () => {
    const result = minimumAbsDifference([3, 1, 4, 1, 5]);
    expect(result).toEqual([[1, 1]]);
  });

  it("minimumAbsDifference([-1, 0, 1])", () => {
    const result = minimumAbsDifference([-1, 0, 1]);
    expect(result).toEqual([[-1, 0], [0, 1]]);
  });
});
