import { pivotIndex } from '../0724-find-pivot-index.js';

describe('0724-find-pivot-index', () => {
  it("pivotIndex([1, 2, 3, 4, 5])", () => {
    const result = pivotIndex([1, 2, 3, 4, 5]);
    expect(result).toEqual(-1);
  });

  it("pivotIndex([])", () => {
    const result = pivotIndex([]);
    expect(result).toEqual(-1);
  });

  it("pivotIndex([1])", () => {
    const result = pivotIndex([1]);
    expect(result).toEqual(0);
  });

  it("pivotIndex([1, 1])", () => {
    const result = pivotIndex([1, 1]);
    expect(result).toEqual(-1);
  });

  it("pivotIndex([3, 1, 4, 1, 5])", () => {
    const result = pivotIndex([3, 1, 4, 1, 5]);
    expect(result).toEqual(-1);
  });

  it("pivotIndex([-1, 0, 1])", () => {
    const result = pivotIndex([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
