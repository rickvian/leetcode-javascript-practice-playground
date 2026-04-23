import { numEquivDominoPairs } from '../1128-number-of-equivalent-domino-pairs.js';

describe('1128-number-of-equivalent-domino-pairs', () => {
  it("numEquivDominoPairs([[1, 2], [3, 4]])", () => {
    const result = numEquivDominoPairs([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("numEquivDominoPairs([[1]])", () => {
    const result = numEquivDominoPairs([[1]]);
    expect(result).toEqual(0);
  });

  it("numEquivDominoPairs([[]])", () => {
    const result = numEquivDominoPairs([[]]);
    expect(result).toEqual(0);
  });

  it("numEquivDominoPairs([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = numEquivDominoPairs([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});
