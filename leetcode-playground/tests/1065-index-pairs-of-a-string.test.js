import { indexPairs } from '../1065-index-pairs-of-a-string.js';

describe('1065-index-pairs-of-a-string', () => {
  it("indexPairs([1, 2, 3])", () => {
    const result = indexPairs([1, 2, 3]);
    expect(result).toEqual([]);
  });

  it("indexPairs([])", () => {
    const result = indexPairs([]);
    expect(result).toEqual([]);
  });

  it("indexPairs([0])", () => {
    const result = indexPairs([0]);
    expect(result).toEqual([]);
  });

  it("indexPairs([-1, 0, 1])", () => {
    const result = indexPairs([-1, 0, 1]);
    expect(result).toEqual([]);
  });
});
