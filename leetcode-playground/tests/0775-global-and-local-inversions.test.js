import { isIdealPermutation } from '../0775-global-and-local-inversions.js';

describe('0775-global-and-local-inversions', () => {
  it("isIdealPermutation([1, 2, 3, 4, 5])", () => {
    const result = isIdealPermutation([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("isIdealPermutation([])", () => {
    const result = isIdealPermutation([]);
    expect(result).toEqual(true);
  });

  it("isIdealPermutation([1])", () => {
    const result = isIdealPermutation([1]);
    expect(result).toEqual(true);
  });

  it("isIdealPermutation([1, 1])", () => {
    const result = isIdealPermutation([1, 1]);
    expect(result).toEqual(true);
  });

  it("isIdealPermutation([3, 1, 4, 1, 5])", () => {
    const result = isIdealPermutation([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("isIdealPermutation([-1, 0, 1])", () => {
    const result = isIdealPermutation([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
