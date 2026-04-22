import { intersection } from '../0349-intersection-of-two-arrays.js';

describe('0349-intersection-of-two-arrays', () => {
  it("intersection([1, 2, 3], [4, 5, 6])", () => {
    const result = intersection([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([]);
  });

  it("intersection([1], [1])", () => {
    const result = intersection([1], [1]);
    expect(result).toEqual([1]);
  });

  it("intersection([1, 3], [2])", () => {
    const result = intersection([1, 3], [2]);
    expect(result).toEqual([]);
  });

  it("intersection([1, 2], [3, 4])", () => {
    const result = intersection([1, 2], [3, 4]);
    expect(result).toEqual([]);
  });
});
