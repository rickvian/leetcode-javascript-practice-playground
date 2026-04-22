import { smallestRange } from '../0632-smallest-range-covering-elements-from-k-lists.js';

describe('0632-smallest-range-covering-elements-from-k-lists', () => {
  it("smallestRange([[1, 2], [3, 4]])", () => {
    const result = smallestRange([[1, 2], [3, 4]]);
    expect(result).toEqual([2, 3]);
  });

  it("smallestRange([[1]])", () => {
    const result = smallestRange([[1]]);
    expect(result).toEqual([1, 1]);
  });
});
