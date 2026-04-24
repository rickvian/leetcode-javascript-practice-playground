import { numberWays } from '../1434-number-of-ways-to-wear-different-hats-to-each-other.js';

describe('1434-number-of-ways-to-wear-different-hats-to-each-other', () => {
  it("numberWays([[1, 2], [3, 4]])", () => {
    const result = numberWays([[1, 2], [3, 4]]);
    expect(result).toEqual(4);
  });

  it("numberWays([[1]])", () => {
    const result = numberWays([[1]]);
    expect(result).toEqual(1);
  });

  it("numberWays([[]])", () => {
    const result = numberWays([[]]);
    expect(result).toEqual(0);
  });

  it("numberWays([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = numberWays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(27);
  });
});
