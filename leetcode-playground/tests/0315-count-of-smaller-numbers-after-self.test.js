import { countSmaller } from '../0315-count-of-smaller-numbers-after-self.js';

describe('0315-count-of-smaller-numbers-after-self', () => {
  it("countSmaller([1, 2, 3, 4, 5])", () => {
    const result = countSmaller([1, 2, 3, 4, 5]);
    expect(result).toEqual([0, 0, 0, 0, 0]);
  });

  it("countSmaller([])", () => {
    const result = countSmaller([]);
    expect(result).toEqual([]);
  });

  it("countSmaller([1])", () => {
    const result = countSmaller([1]);
    expect(result).toEqual([0]);
  });

  it("countSmaller([1, 1])", () => {
    const result = countSmaller([1, 1]);
    expect(result).toEqual([0, 0]);
  });

  it("countSmaller([3, 1, 4, 1, 5])", () => {
    const result = countSmaller([3, 1, 4, 1, 5]);
    expect(result).toEqual([2, 0, 1, 0, 0]);
  });

  it("countSmaller([-1, 0, 1])", () => {
    const result = countSmaller([-1, 0, 1]);
    expect(result).toEqual([0, 0, 0]);
  });
});
